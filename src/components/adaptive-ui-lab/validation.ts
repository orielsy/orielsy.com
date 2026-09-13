import type { AutomationConfiguration, ValidationIssue } from './types.ts';

export function validateConfiguration(
  config: AutomationConfiguration,
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  if (config.dataConnectionId === null) {
    issues.push({
      id: 'data-connection-required',
      ruleId: 'workflow-requires-data-connection',
      field: 'dataConnection',
      severity: 'error',
    });
  }

  return issues;
}
