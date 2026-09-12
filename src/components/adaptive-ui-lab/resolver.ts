import { resolveApplicableKnowledge } from './knowledge.ts';
import { resolveResponses } from './response-policy.ts';
import type {
  AutomationConfiguration,
  DerivedFacts,
  ResolveInput,
  ResolveResult,
  RuntimeContext,
} from './types.ts';
import { validateConfiguration } from './validation.ts';

export function deriveFacts(
  config: AutomationConfiguration,
  runtime: RuntimeContext,
): DerivedFacts {
  const workerGroupMissing =
    config.executionMode === 'distributed' && config.workerGroupId === null;

  return {
    workerGroupMissing,
    availableWorkerGroupCount: runtime.availableWorkerGroups.length,
    hasSingleWorkerGroupCandidate:
      workerGroupMissing && runtime.availableWorkerGroups.length === 1,
  };
}

export function resolveInterface(input: ResolveInput): ResolveResult {
  const facts = deriveFacts(input.config, input.runtime);
  const validation = validateConfiguration(input.config);
  const applicableKnowledge = resolveApplicableKnowledge(input, facts);
  const responses = resolveResponses({
    ...input,
    facts,
    validation,
    applicableKnowledge,
  });

  return {
    validation,
    applicableKnowledge,
    responses,
  };
}
