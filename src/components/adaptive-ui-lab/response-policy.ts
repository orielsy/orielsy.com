import type {
  DerivedFacts,
  KnowledgeItem,
  ResolveInput,
  UIResponse,
  ValidationIssue,
} from './types.ts';

interface ResolveResponsesInput extends ResolveInput {
  facts: DerivedFacts;
  validation: ValidationIssue[];
  applicableKnowledge: KnowledgeItem[];
}

function hasKnowledge(items: KnowledgeItem[], id: string): boolean {
  return items.some((item) => item.id === id);
}

function hasValidation(items: ValidationIssue[], id: string): boolean {
  return items.some((item) => item.id === id);
}

export function resolveResponses(input: ResolveResponsesInput): UIResponse[] {
  const responses: UIResponse[] = [];
  const workerGroupMissing = input.facts.workerGroupMissing;

  if (!workerGroupMissing) return responses;

  if (
    hasValidation(input.validation, 'worker-group-required') &&
    hasKnowledge(input.applicableKnowledge, 'worker-group-distributed-help')
  ) {
    responses.push({
      id: 'worker-group-required-explanation',
      type: 'explanation',
      authority: 3,
      field: 'workerGroup',
      message: 'You selected Distributed Execution. A Worker Group is required for this mode.',
      validationIds: ['worker-group-required'],
      knowledgeIds: ['worker-group-distributed-help'],
    });
  }

  if (hasValidation(input.validation, 'worker-group-required')) {
    responses.push({
      id: 'worker-group-highlight',
      type: 'highlight',
      authority: 4,
      field: 'workerGroup',
      message: 'Choose a Worker Group to continue.',
      validationIds: ['worker-group-required'],
    });
  }

  if (hasKnowledge(input.applicableKnowledge, 'worker-group-beginner')) {
    responses.push({
      id: 'worker-group-beginner-help',
      type: 'help',
      authority: 2,
      field: 'workerGroup',
      message: 'Worker Groups determine where distributed automations run and which systems they can reach.',
      knowledgeIds: ['worker-group-beginner'],
    });
  }

  if (hasKnowledge(input.applicableKnowledge, 'worker-group-required-v42')) {
    responses.push({
      id: 'worker-group-version-guidance',
      type: 'help',
      authority: 2,
      field: 'workerGroup',
      message: 'Starting with version 4.2, distributed execution requires an explicit Worker Group.',
      knowledgeIds: ['worker-group-required-v42'],
    });
  }

  if (input.facts.hasSingleWorkerGroupCandidate) {
    const candidate = input.runtime.availableWorkerGroups[0];

    if (candidate) {
      responses.push({
        id: 'worker-group-single-option-suggestion',
        type: 'preconfiguration',
        authority: 6,
        field: 'workerGroup',
        message: `${candidate.name} is the only available Worker Group.`,
        actions: [
          {
            id: `use-${candidate.id}`,
            label: `Use ${candidate.name}`,
            type: 'set-value',
            field: 'workerGroup',
            value: candidate.id,
          },
        ],
      });
    }
  } else if (
    input.facts.availableWorkerGroupCount > 1 &&
    hasKnowledge(input.applicableKnowledge, 'worker-group-selection-guidance')
  ) {
    responses.push({
      id: 'worker-group-selection-guidance',
      type: 'suggestion',
      authority: 5,
      field: 'workerGroup',
      message: 'Choose the Worker Group associated with the systems this automation needs to reach.',
      knowledgeIds: ['worker-group-selection-guidance'],
      actions: [
        {
          id: 'focus-worker-group',
          label: 'Choose Worker Group',
          type: 'focus-field',
          field: 'workerGroup',
        },
      ],
    });
  }

  return responses;
}
