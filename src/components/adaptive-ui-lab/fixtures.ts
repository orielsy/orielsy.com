import type {
  AutomationConfiguration,
  RuntimeContext,
  UIState,
  WorkerGroup,
} from './types';

export const WORKER_GROUPS = {
  eastCoastProduction: {
    id: 'east-coast-production',
    name: 'East Coast Production',
    environment: 'production',
  },
  westCoastProduction: {
    id: 'west-coast-production',
    name: 'West Coast Production',
    environment: 'production',
  },
  centralProduction: {
    id: 'central-production',
    name: 'Central Production',
    environment: 'production',
  },
} satisfies Record<string, WorkerGroup>;

export const ONE_WORKER_GROUP: WorkerGroup[] = [WORKER_GROUPS.eastCoastProduction];

export const THREE_WORKER_GROUPS: WorkerGroup[] = [
  WORKER_GROUPS.eastCoastProduction,
  WORKER_GROUPS.westCoastProduction,
  WORKER_GROUPS.centralProduction,
];

export const DEFAULT_CONFIG: AutomationConfiguration = {
  executionMode: 'distributed',
  workerGroupId: null,
  targetEnvironment: 'production',
};

export const DEFAULT_RUNTIME: RuntimeContext = {
  productVersion: '4.2',
  userFamiliarity: 'new',
  availableWorkerGroups: THREE_WORKER_GROUPS,
};

export const DEFAULT_UI_STATE: UIState = {
  expandedHelp: [],
  highlightedField: null,
  dismissedGuidance: [],
};
