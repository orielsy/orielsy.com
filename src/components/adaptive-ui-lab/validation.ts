import type { AutomationConfiguration, ValidationIssue } from './types.ts';

export function validateConfiguration(
  config: AutomationConfiguration,
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  if (config.executionMode === 'distributed' && config.workerGroupId === null) {
    issues.push({
      id: 'worker-group-required',
      ruleId: 'distributed-requires-worker-group',
      field: 'workerGroup',
      severity: 'error',
    });
  }

  return issues;
}
