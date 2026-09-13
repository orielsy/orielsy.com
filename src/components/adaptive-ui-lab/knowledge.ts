import type {
  DerivedFacts,
  KnowledgeItem,
  ProductVersion,
  ResolveInput,
} from './types.ts';

export const KNOWLEDGE: KnowledgeItem[] = [
  {
    id: 'data-connection-summary',
    concept: 'data-connection',
    kind: 'summary',
    text: 'Selects the external system this workflow reads from or writes to.',
    audience: 'all',
    source: { type: 'documentation', label: 'Data Connections' },
  },
  {
    id: 'data-connection-required-help',
    concept: 'data-connection',
    kind: 'field-help',
    text: 'This workflow requires a Data Connection before it can run.',
    audience: 'all',
    conditions: { dataConnectionMissing: true },
    source: { type: 'documentation', label: 'Configuring Data Connections' },
  },
  {
    id: 'data-connection-beginner',
    concept: 'data-connection',
    kind: 'concept',
    text: 'A Data Connection identifies the external system and credentials the workflow will use.',
    audience: 'new',
    conditions: { dataConnectionMissing: true },
    source: { type: 'documentation', label: 'Data Connections' },
  },
  {
    id: 'data-connection-required-v42',
    concept: 'data-connection',
    kind: 'version-guidance',
    text: 'Starting with version 4.2, workflows must explicitly select a Data Connection.',
    audience: 'all',
    versions: { min: '4.2' },
    conditions: { dataConnectionMissing: true },
    source: { type: 'release-note', label: 'Version 4.2 connection changes' },
  },
  {
    id: 'data-connection-selection-guidance',
    concept: 'data-connection',
    kind: 'configuration-guidance',
    text: 'Choose the connection for the system this workflow needs to access.',
    audience: 'all',
    conditions: { dataConnectionMissing: true },
    source: { type: 'documentation', label: 'Choosing a Data Connection' },
  },
];

const VERSION_ORDER: Record<ProductVersion, number> = {
  '4.1': 41,
  '4.2': 42,
};

function matchesVersion(item: KnowledgeItem, version: ProductVersion): boolean {
  if (!item.versions) return true;
  const current = VERSION_ORDER[version];
  const min = item.versions.min ? VERSION_ORDER[item.versions.min] : undefined;
  const max = item.versions.max ? VERSION_ORDER[item.versions.max] : undefined;
  if (min !== undefined && current < min) return false;
  if (max !== undefined && current > max) return false;
  return true;
}

function matchesConditions(item: KnowledgeItem, facts: DerivedFacts): boolean {
  const conditions = item.conditions;
  if (!conditions) return true;
  if (conditions.dataConnectionMissing !== undefined && conditions.dataConnectionMissing !== facts.dataConnectionMissing) return false;
  if (
    conditions.availableDataConnectionCount !== undefined &&
    conditions.availableDataConnectionCount !== facts.availableDataConnectionCount
  ) return false;
  return true;
}

export function resolveApplicableKnowledge(input: ResolveInput, facts: DerivedFacts): KnowledgeItem[] {
  return input.knowledge.filter((item) => {
    const audienceMatches = item.audience === 'all' || item.audience === input.runtime.userFamiliarity;
    return audienceMatches && matchesVersion(item, input.runtime.productVersion) && matchesConditions(item, facts);
  });
}
