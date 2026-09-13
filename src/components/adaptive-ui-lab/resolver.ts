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
  const dataConnectionMissing = config.dataConnectionId === null;

  return {
    dataConnectionMissing,
    availableDataConnectionCount: runtime.availableDataConnections.length,
    hasSingleDataConnectionCandidate:
      dataConnectionMissing && runtime.availableDataConnections.length === 1,
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
