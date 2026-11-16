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
  const dataConnectionMissing = input.facts.dataConnectionMissing;

  if (!dataConnectionMissing) return responses;

  if (
    hasValidation(input.validation, 'data-connection-required') &&
    hasKnowledge(input.applicableKnowledge, 'data-connection-required-help')
  ) {
    responses.push({
      id: 'data-connection-required-explanation',
      type: 'explanation',
      authority: 3,
      field: 'dataConnection',
      message: 'This workflow requires a Data Connection before it can run.',
      validationIds: ['data-connection-required'],
      knowledgeIds: ['data-connection-required-help'],
    });
  }

  if (hasValidation(input.validation, 'data-connection-required')) {
    responses.push({
      id: 'data-connection-highlight',
      type: 'highlight',
      authority: 4,
      field: 'dataConnection',
      message: 'Choose a Data Connection to continue.',
      validationIds: ['data-connection-required'],
    });
  }

  if (hasKnowledge(input.applicableKnowledge, 'data-connection-beginner')) {
    responses.push({
      id: 'data-connection-beginner-help',
      type: 'help',
      authority: 2,
      field: 'dataConnection',
      message: 'A Data Connection identifies the external system and credentials this workflow will use.',
      knowledgeIds: ['data-connection-beginner'],
    });
  }

  if (hasKnowledge(input.applicableKnowledge, 'data-connection-required-v42')) {
    responses.push({
      id: 'data-connection-version-guidance',
      type: 'help',
      authority: 2,
      field: 'dataConnection',
      message: 'Starting with version 4.2, workflows must explicitly select a Data Connection.',
      knowledgeIds: ['data-connection-required-v42'],
    });
  }

  if (
    input.facts.availableDataConnectionCount > 1 &&
    hasKnowledge(input.applicableKnowledge, 'data-connection-option-overview')
  ) {
    responses.push({
      id: 'data-connection-option-overview',
      type: 'help',
      authority: 2,
      field: 'dataConnection',
      message: 'Each compatible connection points to a different system. Pick the one whose data this workflow needs.',
      knowledgeIds: ['data-connection-option-overview'],
      items: input.runtime.availableDataConnections
        .filter((connection) => Boolean(connection.purpose))
        .map((connection) => `${connection.name}: ${connection.purpose}`),
    });
  }

  if (input.facts.hasSingleDataConnectionCandidate) {
    const candidate = input.runtime.availableDataConnections[0];

    if (candidate) {
      responses.push({
        id: 'data-connection-single-option-suggestion',
        type: 'preconfiguration',
        authority: 6,
        field: 'dataConnection',
        message: `${candidate.name} is the only compatible Data Connection for this workflow.`,
        actions: [
          {
            id: `use-${candidate.id}`,
            label: `Use ${candidate.name}`,
            type: 'set-value',
            field: 'dataConnection',
            value: candidate.id,
          },
        ],
      });
    }
  } else if (
    input.facts.availableDataConnectionCount > 1 &&
    hasKnowledge(input.applicableKnowledge, 'data-connection-selection-guidance')
  ) {
    responses.push({
      id: 'data-connection-selection-guidance',
      type: 'suggestion',
      authority: 5,
      field: 'dataConnection',
      message: `${input.facts.availableDataConnectionCount} compatible connections are available. Choose the one for the system this workflow needs to access.`,
      knowledgeIds: ['data-connection-selection-guidance'],
      actions: [
        {
          id: 'focus-data-connection',
          label: 'Choose Data Connection',
          type: 'focus-field',
          field: 'dataConnection',
        },
      ],
    });
  }

  return responses;
}
