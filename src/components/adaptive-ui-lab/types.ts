export type ProductVersion = '4.1' | '4.2';
export type UserFamiliarity = 'new' | 'experienced';

export type FieldId = 'dataConnection';

export interface DataConnection {
  id: string;
  name: string;
  system: string;
}

export interface AutomationConfiguration {
  dataConnectionId: string | null;
}

export interface RuntimeContext {
  productVersion: ProductVersion;
  userFamiliarity: UserFamiliarity;
  availableDataConnections: DataConnection[];
}

export interface UIState {
  expandedHelp: string[];
  highlightedField: FieldId | null;
  dismissedGuidance: string[];
}

export type ValidationSeverity = 'error' | 'warning';

export interface ValidationIssue {
  id: string;
  field: FieldId;
  severity: ValidationSeverity;
  ruleId: string;
}

export type KnowledgeKind =
  | 'summary'
  | 'concept'
  | 'field-help'
  | 'version-guidance'
  | 'configuration-guidance';

export type KnowledgeAudience = 'all' | UserFamiliarity;

export interface VersionRange {
  min?: ProductVersion;
  max?: ProductVersion;
}

export interface KnowledgeCondition {
  dataConnectionMissing?: boolean;
  availableDataConnectionCount?: number;
}

export interface KnowledgeSource {
  type: 'documentation' | 'release-note' | 'authored-demo';
  label: string;
  href?: string;
}

export interface KnowledgeItem {
  id: string;
  concept: string;
  kind: KnowledgeKind;
  text: string;
  audience: KnowledgeAudience;
  versions?: VersionRange;
  conditions?: KnowledgeCondition;
  source: KnowledgeSource;
}

export interface DerivedFacts {
  dataConnectionMissing: boolean;
  availableDataConnectionCount: number;
  hasSingleDataConnectionCandidate: boolean;
}

export type AuthorityLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type ResponseType =
  | 'help'
  | 'explanation'
  | 'warning'
  | 'highlight'
  | 'suggestion'
  | 'preconfiguration';

export interface UIAction {
  id: string;
  label: string;
  type: 'expand-help' | 'focus-field' | 'set-value';
  field?: FieldId;
  value?: string;
}

export interface UIResponse {
  id: string;
  type: ResponseType;
  authority: AuthorityLevel;
  field?: FieldId;
  message: string;
  knowledgeIds?: string[];
  validationIds?: string[];
  actions?: UIAction[];
}

export interface ResolveInput {
  config: AutomationConfiguration;
  runtime: RuntimeContext;
  ui: UIState;
  knowledge: KnowledgeItem[];
}

export interface ResolveResult {
  validation: ValidationIssue[];
  applicableKnowledge: KnowledgeItem[];
  responses: UIResponse[];
}
