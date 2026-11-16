import assert from 'node:assert/strict';
import test from 'node:test';

import {
  DATA_CONNECTIONS,
  DEFAULT_CONFIG,
  DEFAULT_UI_STATE,
  ONE_DATA_CONNECTION,
  THREE_DATA_CONNECTIONS,
} from './fixtures.ts';
import { KNOWLEDGE } from './knowledge.ts';
import { resolveInterface } from './resolver.ts';
import type { DataConnection, ProductVersion, UserFamiliarity } from './types.ts';

function responseIds(result: ReturnType<typeof resolveInterface>) {
  return result.responses.map((response) => response.id);
}

function resolveScenario({
  familiarity,
  version,
  connections,
  dataConnectionId = null,
}: {
  familiarity: UserFamiliarity;
  version: ProductVersion;
  connections: DataConnection[];
  dataConnectionId?: string | null;
}) {
  return resolveInterface({
    config: {
      ...DEFAULT_CONFIG,
      dataConnectionId,
    },
    runtime: {
      productVersion: version,
      userFamiliarity: familiarity,
      availableDataConnections: connections,
    },
    ui: DEFAULT_UI_STATE,
    knowledge: KNOWLEDGE,
  });
}

test('Scenario A: new user on v4.1 with three connections gets beginner and selection guidance', () => {
  const result = resolveScenario({
    familiarity: 'new',
    version: '4.1',
    connections: THREE_DATA_CONNECTIONS,
  });

  assert.deepEqual(responseIds(result), [
    'data-connection-required-explanation',
    'data-connection-highlight',
    'data-connection-beginner-help',
    'data-connection-option-overview',
    'data-connection-selection-guidance',
  ]);
  assert.equal(result.validation[0]?.id, 'data-connection-required');
});

test('Scenario B: new user on v4.2 also gets version-specific guidance', () => {
  const result = resolveScenario({
    familiarity: 'new',
    version: '4.2',
    connections: THREE_DATA_CONNECTIONS,
  });

  assert.deepEqual(responseIds(result), [
    'data-connection-required-explanation',
    'data-connection-highlight',
    'data-connection-beginner-help',
    'data-connection-version-guidance',
    'data-connection-option-overview',
    'data-connection-selection-guidance',
  ]);
});

test('Scenario C: experienced user does not get beginner help', () => {
  const result = resolveScenario({
    familiarity: 'experienced',
    version: '4.2',
    connections: THREE_DATA_CONNECTIONS,
  });

  assert.deepEqual(responseIds(result), [
    'data-connection-required-explanation',
    'data-connection-highlight',
    'data-connection-version-guidance',
    'data-connection-selection-guidance',
  ]);
  assert.equal(responseIds(result).includes('data-connection-beginner-help'), false);
});

test('Scenario D: new user with one compatible connection gets a safe preconfiguration action', () => {
  const result = resolveScenario({
    familiarity: 'new',
    version: '4.2',
    connections: ONE_DATA_CONNECTION,
  });

  assert.deepEqual(responseIds(result), [
    'data-connection-required-explanation',
    'data-connection-highlight',
    'data-connection-beginner-help',
    'data-connection-version-guidance',
    'data-connection-single-option-suggestion',
  ]);

  const suggestion = result.responses.find(
    (response) => response.id === 'data-connection-single-option-suggestion',
  );
  assert.equal(suggestion?.actions?.[0]?.value, DATA_CONNECTIONS.salesforceProduction.id);
});

test('Scenario E: experienced user with one compatible connection gets the action without beginner help', () => {
  const result = resolveScenario({
    familiarity: 'experienced',
    version: '4.2',
    connections: ONE_DATA_CONNECTION,
  });

  assert.deepEqual(responseIds(result), [
    'data-connection-required-explanation',
    'data-connection-highlight',
    'data-connection-version-guidance',
    'data-connection-single-option-suggestion',
  ]);
});

test('Scenario F: selecting a valid Data Connection removes the missing-connection intervention', () => {
  const result = resolveScenario({
    familiarity: 'new',
    version: '4.2',
    connections: THREE_DATA_CONNECTIONS,
    dataConnectionId: DATA_CONNECTIONS.salesforceProduction.id,
  });

  assert.deepEqual(result.validation, []);
  assert.deepEqual(result.responses, []);
});

test('Scenario G: option descriptions are surfaced for new users only, and only when several options exist', () => {
  const newUser = resolveScenario({ familiarity: 'new', version: '4.1', connections: THREE_DATA_CONNECTIONS });
  const overview = newUser.responses.find((response) => response.id === 'data-connection-option-overview');
  assert.equal(overview?.items?.length, THREE_DATA_CONNECTIONS.length);
  assert.ok(overview?.items?.[0]?.startsWith('Salesforce Production:'));

  const experienced = resolveScenario({ familiarity: 'experienced', version: '4.1', connections: THREE_DATA_CONNECTIONS });
  assert.equal(responseIds(experienced).includes('data-connection-option-overview'), false);

  const single = resolveScenario({ familiarity: 'new', version: '4.1', connections: ONE_DATA_CONNECTION });
  assert.equal(responseIds(single).includes('data-connection-option-overview'), false);
});

test('Scenario H: several-option guidance states the count and never carries a set-value action', () => {
  const result = resolveScenario({ familiarity: 'experienced', version: '4.1', connections: THREE_DATA_CONNECTIONS });
  const guidance = result.responses.find((response) => response.id === 'data-connection-selection-guidance');
  assert.match(guidance?.message ?? '', /^3 compatible connections/);
  assert.equal(result.responses.some((response) => response.actions?.some((action) => action.type === 'set-value')), false);
});
