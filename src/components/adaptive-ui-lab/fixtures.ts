import type {
  AutomationConfiguration,
  DataConnection,
  RuntimeContext,
  UIState,
} from './types.ts';

export const DATA_CONNECTIONS = {
  salesforceProduction: {
    id: 'salesforce-production',
    name: 'Salesforce Production',
    system: 'Salesforce',
  },
  snowflakeAnalytics: {
    id: 'snowflake-analytics',
    name: 'Snowflake Analytics',
    system: 'Snowflake',
  },
  erpProduction: {
    id: 'erp-production',
    name: 'ERP Production',
    system: 'ERP',
  },
} satisfies Record<string, DataConnection>;

export const ONE_DATA_CONNECTION: DataConnection[] = [DATA_CONNECTIONS.salesforceProduction];

export const THREE_DATA_CONNECTIONS: DataConnection[] = [
  DATA_CONNECTIONS.salesforceProduction,
  DATA_CONNECTIONS.snowflakeAnalytics,
  DATA_CONNECTIONS.erpProduction,
];

export const DEFAULT_CONFIG: AutomationConfiguration = {
  dataConnectionId: null,
};

export const DEFAULT_RUNTIME: RuntimeContext = {
  productVersion: '4.2',
  userFamiliarity: 'new',
  availableDataConnections: THREE_DATA_CONNECTIONS,
};

export const DEFAULT_UI_STATE: UIState = {
  expandedHelp: [],
  highlightedField: null,
  dismissedGuidance: [],
};
