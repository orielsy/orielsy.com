import assert from 'node:assert/strict';
import test from 'node:test';

import {
  DEFAULT_CONFIG,
  DEFAULT_UI_STATE,
  ONE_WORKER_GROUP,
  THREE_WORKER_GROUPS,
  WORKER_GROUPS,
} from './fixtures.ts';
import { KNOWLEDGE } from './knowledge.ts';
import { resolveInterface } from './resolver.ts';
import type { ProductVersion, UserFamiliarity, WorkerGroup } from './types.ts';

function responseIds(result: ReturnType<typeof resolveInterface>) {
  return result.responses.map((response) => response.id);
}

function resolveScenario({
  familiarity,
  version,
  groups,
  workerGroupId = null,
}: {
  familiarity: UserFamiliarity;
  version: ProductVersion;
  groups: WorkerGroup[];
  workerGroupId?: string | null;
}) {
  return resolveInterface({
    config: {
      ...DEFAULT_CONFIG,
      workerGroupId,
    },
    runtime: {
      productVersion: version,
      userFamiliarity: familiarity,
      availableWorkerGroups: groups,
    },
    ui: DEFAULT_UI_STATE,
    knowledge: KNOWLEDGE,
  });
}

test('Scenario A: new user on v4.1 with three groups gets beginner and selection guidance', () => {
  const result = resolveScenario({
    familiarity: 'new',
    version: '4.1',
    groups: THREE_WORKER_GROUPS,
  });

  assert.deepEqual(responseIds(result), [
    'worker-group-required-explanation',
    'worker-group-highlight',
    'worker-group-beginner-help',
    'worker-group-selection-guidance',
  ]);
  assert.equal(result.validation[0]?.id, 'worker-group-required');
});

test('Scenario B: new user on v4.2 also gets version-specific guidance', () => {
  const result = resolveScenario({
    familiarity: 'new',
    version: '4.2',
    groups: THREE_WORKER_GROUPS,
  });

  assert.deepEqual(responseIds(result), [
    'worker-group-required-explanation',
    'worker-group-highlight',
    'worker-group-beginner-help',
    'worker-group-version-guidance',
    'worker-group-selection-guidance',
  ]);
});

test('Scenario C: experienced user does not get beginner help', () => {
  const result = resolveScenario({
    familiarity: 'experienced',
    version: '4.2',
    groups: THREE_WORKER_GROUPS,
  });

  assert.deepEqual(responseIds(result), [
    'worker-group-required-explanation',
    'worker-group-highlight',
    'worker-group-version-guidance',
    'worker-group-selection-guidance',
  ]);
  assert.equal(responseIds(result).includes('worker-group-beginner-help'), false);
});

test('Scenario D: new user with one available group gets a safe preconfiguration action', () => {
  const result = resolveScenario({
    familiarity: 'new',
    version: '4.2',
    groups: ONE_WORKER_GROUP,
  });

  assert.deepEqual(responseIds(result), [
    'worker-group-required-explanation',
    'worker-group-highlight',
    'worker-group-beginner-help',
    'worker-group-version-guidance',
    'worker-group-single-option-suggestion',
  ]);

  const suggestion = result.responses.find(
    (response) => response.id === 'worker-group-single-option-suggestion',
  );
  assert.equal(suggestion?.actions?.[0]?.value, WORKER_GROUPS.eastCoastProduction.id);
});

test('Scenario E: experienced user with one available group gets the action without beginner help', () => {
  const result = resolveScenario({
    familiarity: 'experienced',
    version: '4.2',
    groups: ONE_WORKER_GROUP,
  });

  assert.deepEqual(responseIds(result), [
    'worker-group-required-explanation',
    'worker-group-highlight',
    'worker-group-version-guidance',
    'worker-group-single-option-suggestion',
  ]);
});

test('Scenario F: a valid selected worker group removes missing-group intervention', () => {
  const result = resolveScenario({
    familiarity: 'new',
    version: '4.2',
    groups: THREE_WORKER_GROUPS,
    workerGroupId: WORKER_GROUPS.eastCoastProduction.id,
  });

  assert.deepEqual(result.validation, []);
  assert.deepEqual(result.responses, []);
});
