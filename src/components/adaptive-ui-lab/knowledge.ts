import type {
  DerivedFacts,
  KnowledgeItem,
  ProductVersion,
  ResolveInput,
} from './types.ts';

export const KNOWLEDGE: KnowledgeItem[] = [
  {
    id: 'worker-group-summary',
    concept: 'worker-group',
    kind: 'summary',
    text: 'Determines which workers can execute distributed automations.',
    audience: 'all',
    source: { type: 'documentation', label: 'Worker Groups' },
  },
  {
    id: 'worker-group-distributed-help',
    concept: 'worker-group',
    kind: 'field-help',
    text: 'A Worker Group is required when Execution Mode is Distributed.',
    audience: 'all',
    conditions: { executionMode: 'distributed' },
    source: { type: 'documentation', label: 'Distributed Execution' },
  },
  {
    id: 'worker-group-beginner',
    concept: 'worker-group',
    kind: 'concept',
    text: 'Worker Groups determine where distributed automations run and which systems they can reach.',
    audience: 'new',
    conditions: { executionMode: 'distributed' },
    source: { type: 'documentation', label: 'Worker Groups' },
  },
  {
    id: 'worker-group-required-v42',
    concept: 'worker-group',
    kind: 'version-guidance',
    text: 'Starting with version 4.2, distributed execution requires an explicit Worker Group.',
    audience: 'all',
    versions: { min: '4.2' },
    conditions: { executionMode: 'distributed', workerGroupMissing: true },
    source: { type: 'release-note', label: 'Version 4.2 distributed execution changes' },
  },
  {
    id: 'worker-group-selection-guidance',
    concept: 'worker-group',
    kind: 'configuration-guidance',
    text: 'Choose the Worker Group associated with the systems this automation needs to reach.',
    audience: 'all',
    conditions: { executionMode: 'distributed', workerGroupMissing: true },
    source: { type: 'documentation', label: 'Choosing a Worker Group' },
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

function matchesConditions(item: KnowledgeItem, input: ResolveInput, facts: DerivedFacts): boolean {
  const conditions = item.conditions;
  if (!conditions) return true;
  if (conditions.executionMode !== undefined && conditions.executionMode !== input.config.executionMode) return false;
  if (conditions.workerGroupMissing !== undefined && conditions.workerGroupMissing !== facts.workerGroupMissing) return false;
  if (conditions.targetEnvironment !== undefined && conditions.targetEnvironment !== input.config.targetEnvironment) return false;
  if (conditions.availableWorkerGroupCount !== undefined && conditions.availableWorkerGroupCount !== facts.availableWorkerGroupCount) return false;
  return true;
}

export function resolveApplicableKnowledge(input: ResolveInput, facts: DerivedFacts): KnowledgeItem[] {
  return input.knowledge.filter((item) => {
    const audienceMatches = item.audience === 'all' || item.audience === input.runtime.userFamiliarity;
    return audienceMatches && matchesVersion(item, input.runtime.productVersion) && matchesConditions(item, input, facts);
  });
}
