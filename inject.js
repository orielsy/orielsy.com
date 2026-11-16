
const P={"ol": "<ol data-lab-try-this class=\"mt-4 mb-0 grid max-w-3xl list-none gap-2 p-0 text-xs leading-5 text-[var(--text-secondary)] sm:grid-cols-3\">\n      <li class=\"m-0 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3 py-2\"><span class=\"font-mono text-[10px] text-[var(--accent)]\">1</span> Press <strong class=\"font-medium text-[var(--text-primary)]\">Continue</strong> on both forms without choosing anything.</li>\n      <li class=\"m-0 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3 py-2\"><span class=\"font-mono text-[10px] text-[var(--accent)]\">2</span> Load <strong class=\"font-medium text-[var(--text-primary)]\">Only one valid option</strong> and accept the offer.</li>\n      <li class=\"m-0 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3 py-2\"><span class=\"font-mono text-[10px] text-[var(--accent)]\">3</span> Load <strong class=\"font-medium text-[var(--text-primary)]\">Experienced user on 4.1</strong> and watch the help shrink.</li>\n    </ol>", "notice": "<p data-scenario-notice class=\"mt-4 mb-0 flex items-start gap-2 text-xs leading-5 text-[var(--text-secondary)]\">\n        <span aria-hidden=\"true\" class=\"font-mono text-[var(--accent)]\">\u2192</span>\n        <span data-scenario-notice-text>Change any condition and watch the adaptive form and its lab note update. The conventional form stays the same.</span>\n      </p>", "presets": "<div data-scenario-presets class=\"mt-5\"><p class=\"m-0 text-xs\">Start with an example scenario</p><div class=\"mt-2 grid gap-1.5 sm:grid-cols-3\" role=\"group\" aria-label=\"Example scenarios\">\n<button type=\"button\" data-preset=\"new-several\" aria-pressed=\"true\">New user, several options</button>\n<button type=\"button\" data-preset=\"one-option\" aria-pressed=\"false\">Only one valid option</button>\n<button type=\"button\" data-preset=\"expert\" aria-pressed=\"false\">Experienced user on 4.1</button></div><p class=\"mt-4 mb-0 text-xs\">Or set each condition yourself</p></div>", "adaptive_inner": "<p data-adaptive-guidance class=\"mt-2 mb-0 text-xs leading-5 text-[var(--text-secondary)]\">3 compatible connections are available. Choose the one for the system this workflow needs to access.</p>\n                <p data-adaptive-beginner class=\"mt-2 mb-0 hidden text-xs leading-5 text-[var(--text-secondary)]\"></p>\n                <ul data-adaptive-options class=\"mt-2 mb-0 hidden list-none space-y-1 p-0 text-xs leading-5 text-[var(--text-secondary)]\"></ul>\n                <p data-adaptive-version class=\"mt-3 mb-0 hidden items-start gap-2 text-xs leading-5 text-[var(--text-secondary)]\">\n                  <span class=\"shrink-0 rounded border border-[var(--accent-border)] px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--accent)]\">New in 4.2</span>\n                  <span data-adaptive-version-text></span>\n                </p>\n                ", "std_note": "<div data-lab-note class=\"mt-5 rounded-md border border-dashed border-[var(--border-subtle)] px-3 py-2.5\">\n            <p class=\"m-0 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]\">Lab note \u00b7 baseline behavior</p>\n            <ul class=\"mt-1.5 mb-0 list-none space-y-1 p-0 text-xs leading-5 text-[var(--text-secondary)]\">\n              <li class=\"m-0\">Same field and options in every scenario.</li>\n              <li class=\"m-0\">Doesn't explain what the options are for or mention the 4.2 rule.</li>\n              <li class=\"m-0\">Only reacts after you press Continue.</li>\n            </ul>\n          </div>\n\n          <div data-standard-success class=\"mt-5 hidden rounded-md border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3 py-2.5 text-xs leading-5\">\n            <p class=\"m-0 font-medium text-[var(--text-primary)]\"><span aria-hidden=\"true\">\u2713 </span><span data-standard-success-label>Configured</span></p>\n            <p class=\"mt-1 mb-0 text-[var(--text-muted)]\">Step complete. In a real product, Continue would open the next step.</p>\n          </div>", "ad_note": "<div data-lab-note class=\"mt-5 rounded-md border border-dashed border-[var(--border-subtle)] px-3 py-2.5\">\n            <p class=\"m-0 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]\">Lab note \u00b7 why it looks like this</p>\n            <ul data-adaptive-lab-note-list class=\"mt-1.5 mb-0 list-none space-y-1 p-0 text-xs leading-5 text-[var(--text-secondary)]\"></ul>\n          </div>\n\n          <div data-adaptive-success class=\"mt-5 hidden rounded-md border border-[var(--accent-border)] bg-[var(--bg-primary)] px-3 py-2.5 text-xs leading-5\">\n            <p class=\"m-0 font-medium text-[var(--text-primary)]\"><span aria-hidden=\"true\">\u2713 </span><span data-adaptive-success-label>Configured</span></p>\n            <p class=\"mt-1 mb-0 text-[var(--text-muted)]\">Step complete. In a real product, Continue would open the next step.</p>\n          </div>"};
const old=document.querySelector('[data-adaptive-enterprise-ui-lab]');
const lab=old.cloneNode(true); old.replaceWith(lab); lab.removeAttribute('data-bound');
lab.querySelector('header').insertAdjacentHTML('beforeend',P.ol);
lab.querySelector('[data-scenario-grid]').insertAdjacentHTML('beforebegin',P.presets);
lab.querySelector('[data-scenario-grid]').insertAdjacentHTML('afterend',P.notice);
const g=lab.querySelector('[data-adaptive-guidance]'); const det=lab.querySelector('[data-guidance-details]'); det.remove(); g.insertAdjacentHTML('beforebegin',P.adaptive_inner); g.remove();
lab.querySelector('[data-standard-error]').parentElement.insertAdjacentHTML('afterend',P.std_note);
lab.querySelector('[data-adaptive-error]').parentElement.insertAdjacentHTML('afterend',P.ad_note);
(()=>{
             
                          
                 
                 
          
                    

const DATA_CONNECTIONS = {
  salesforceProduction: {
    id: 'salesforce-production',
    name: 'Salesforce Production',
    system: 'Salesforce',
    purpose: 'Customer and opportunity records in the production CRM.',
  },
  snowflakeAnalytics: {
    id: 'snowflake-analytics',
    name: 'Snowflake Analytics',
    system: 'Snowflake',
    purpose: 'Warehouse tables used for reporting and analytics.',
  },
  erpProduction: {
    id: 'erp-production',
    name: 'ERP Production',
    system: 'ERP',
    purpose: 'Orders, inventory, and finance records in the production ERP.',
  },
}                                         ;

const ONE_DATA_CONNECTION                   = [DATA_CONNECTIONS.salesforceProduction];

const THREE_DATA_CONNECTIONS                   = [
  DATA_CONNECTIONS.salesforceProduction,
  DATA_CONNECTIONS.snowflakeAnalytics,
  DATA_CONNECTIONS.erpProduction,
];

const DEFAULT_CONFIG                          = {
  dataConnectionId: null,
};

const DEFAULT_RUNTIME                 = {
  productVersion: '4.2',
  userFamiliarity: 'new',
  availableDataConnections: THREE_DATA_CONNECTIONS,
};

const DEFAULT_UI_STATE          = {
  expandedHelp: [],
  highlightedField: null,
  dismissedGuidance: [],
};

                                                                           

function validateConfiguration(
  config                         ,
)                    {
  const issues                    = [];

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

             
               
                
                 
               
                    

const KNOWLEDGE                  = [
  {
    id: 'data-connection-summary',
    concept: 'data-connection',
    kind: 'summary',
    text: 'Selects the external system this workflow reads from or writes to.',
    audience: 'all',
    source: { type: 'documentation', label: 'Data Connections' },
  },
  {
    id: 'data-connection-required-help',
    concept: 'data-connection',
    kind: 'field-help',
    text: 'This workflow requires a Data Connection before it can run.',
    audience: 'all',
    conditions: { dataConnectionMissing: true },
    source: { type: 'documentation', label: 'Configuring Data Connections' },
  },
  {
    id: 'data-connection-beginner',
    concept: 'data-connection',
    kind: 'concept',
    text: 'A Data Connection identifies the external system and credentials the workflow will use.',
    audience: 'new',
    conditions: { dataConnectionMissing: true },
    source: { type: 'documentation', label: 'Data Connections' },
  },
  {
    id: 'data-connection-required-v42',
    concept: 'data-connection',
    kind: 'version-guidance',
    text: 'Starting with version 4.2, workflows must explicitly select a Data Connection.',
    audience: 'all',
    versions: { min: '4.2' },
    conditions: { dataConnectionMissing: true },
    source: { type: 'release-note', label: 'Version 4.2 connection changes' },
  },
  {
    id: 'data-connection-option-overview',
    concept: 'data-connection',
    kind: 'configuration-guidance',
    text: 'Each compatible connection points to a different system. Pick the one whose data this workflow needs.',
    audience: 'new',
    conditions: { dataConnectionMissing: true },
    source: { type: 'documentation', label: 'Choosing a Data Connection' },
  },
  {
    id: 'data-connection-selection-guidance',
    concept: 'data-connection',
    kind: 'configuration-guidance',
    text: 'Choose the connection for the system this workflow needs to access.',
    audience: 'all',
    conditions: { dataConnectionMissing: true },
    source: { type: 'documentation', label: 'Choosing a Data Connection' },
  },
];

const VERSION_ORDER                                 = {
  '4.1': 41,
  '4.2': 42,
};

function matchesVersion(item               , version                )          {
  if (!item.versions) return true;
  const current = VERSION_ORDER[version];
  const min = item.versions.min ? VERSION_ORDER[item.versions.min] : undefined;
  const max = item.versions.max ? VERSION_ORDER[item.versions.max] : undefined;
  if (min !== undefined && current < min) return false;
  if (max !== undefined && current > max) return false;
  return true;
}

function matchesConditions(item               , facts              )          {
  const conditions = item.conditions;
  if (!conditions) return true;
  if (conditions.dataConnectionMissing !== undefined && conditions.dataConnectionMissing !== facts.dataConnectionMissing) return false;
  if (
    conditions.availableDataConnectionCount !== undefined &&
    conditions.availableDataConnectionCount !== facts.availableDataConnectionCount
  ) return false;
  return true;
}

function resolveApplicableKnowledge(input              , facts              )                  {
  return input.knowledge.filter((item) => {
    const audienceMatches = item.audience === 'all' || item.audience === input.runtime.userFamiliarity;
    return audienceMatches && matchesVersion(item, input.runtime.productVersion) && matchesConditions(item, facts);
  });
}

             
               
                
               
             
                  
                    

                                                      
                      
                                
                                       
 

function hasKnowledge(items                 , id        )          {
  return items.some((item) => item.id === id);
}

function hasValidation(items                   , id        )          {
  return items.some((item) => item.id === id);
}

function resolveResponses(input                       )               {
  const responses               = [];
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




function deriveFacts(
  config                         ,
  runtime                ,
)               {
  const dataConnectionMissing = config.dataConnectionId === null;

  return {
    dataConnectionMissing,
    availableDataConnectionCount: runtime.availableDataConnections.length,
    hasSingleDataConnectionCandidate:
      dataConnectionMissing && runtime.availableDataConnections.length === 1,
  };
}

function resolveInterface(input              )                {
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


  import { trackPortfolioEvent } from '../../lib/analytics';
  import { ONE_DATA_CONNECTION, THREE_DATA_CONNECTIONS } from './fixtures.ts';
  import { KNOWLEDGE } from './knowledge.ts';
  import { resolveInterface } from './resolver.ts';
                                                                                                                                   

                               
                                                               

                      
                                 
                                   
                                     
   

                          
                             
                       
                       
   

  const PRESETS                                                        = {
    'new-several': { label: 'New user, several options', scenario: { familiarity: 'new', productVersion: '4.2', connectionCount: 3 } },
    'one-option': { label: 'Only one valid option', scenario: { familiarity: 'new', productVersion: '4.2', connectionCount: 1 } },
    expert: { label: 'Experienced user on 4.1', scenario: { familiarity: 'experienced', productVersion: '4.1', connectionCount: 3 } },
  };

  let labInteractionTracked = false;

  const prefersReducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

  document.querySelectorAll             ('[data-adaptive-enterprise-ui-lab]').forEach((lab) => {
    if (lab.dataset.bound === 'true') return;
    lab.dataset.bound = 'true';

    const $ =                                  (selector        ) => lab.querySelector   (selector);

    const standardDataConnection = $                   ('[data-standard-data-connection]');
    const adaptiveDataConnection = $                   ('[data-adaptive-data-connection]');
    const standardError = $('[data-standard-error]');
    const adaptiveError = $('[data-adaptive-error]');
    const standardContinue = $                   ('[data-standard-continue]');
    const adaptiveContinue = $                   ('[data-adaptive-continue]');
    const standardOutcome = $('[data-standard-outcome]');
    const adaptiveOutcome = $('[data-adaptive-outcome]');
    const standardSuccess = $('[data-standard-success]');
    const adaptiveSuccess = $('[data-adaptive-success]');
    const standardSuccessLabel = $('[data-standard-success-label]');
    const adaptiveSuccessLabel = $('[data-adaptive-success-label]');
    const adaptiveIntervention = $('[data-adaptive-intervention]');
    const adaptiveHeadline = $('[data-adaptive-headline]');
    const adaptiveAuthority = $('[data-adaptive-authority]');
    const adaptiveGuidance = $('[data-adaptive-guidance]');
    const adaptiveBeginner = $('[data-adaptive-beginner]');
    const adaptiveOptions = $                  ('[data-adaptive-options]');
    const adaptiveVersion = $('[data-adaptive-version]');
    const adaptiveVersionText = $('[data-adaptive-version-text]');
    const adaptiveSource = $('[data-adaptive-source]');
    const adaptiveLabNoteList = $                  ('[data-adaptive-lab-note-list]');
    const useSoleConnection = $                   ('[data-use-sole-connection]');
    const truthSummary = $('[data-truth-summary]');
    const scenarioFamiliarity = $('[data-scenario-familiarity]');
    const scenarioVersion = $('[data-scenario-version]');
    const scenarioConnections = $('[data-scenario-connections]');
    const scenarioNoticeText = $('[data-scenario-notice-text]');
    const traceState = $('[data-trace-state]');
    const traceValidation = $('[data-trace-validation]');
    const traceKnowledge = $('[data-trace-knowledge]');
    const tracePolicy = $('[data-trace-policy]');
    const decisionTrace = $                    ('[data-decision-trace]');
    const traceToggleLabel = $('[data-trace-toggle-label]');
    const labStatus = $('[data-lab-status]');

    if (!standardDataConnection || !adaptiveDataConnection) return;

    const trackFirstMeaningfulInteraction = () => {
      if (labInteractionTracked) return;
      labInteractionTracked = true;
      (()=>{})('lab_interaction', { lab: 'adaptive-enterprise-ui' });
    };

    lab.addEventListener('click', (event) => {
      if (!(event.target instanceof Element)) return;
      if (event.target.closest('[data-preset], [data-familiarity], [data-version], [data-connection-count], [data-standard-continue], [data-adaptive-continue], [data-use-sole-connection]')) {
        trackFirstMeaningfulInteraction();
      }
    });

    lab.addEventListener('change', (event) => {
      if (!(event.target instanceof Element)) return;
      if (event.target.matches('[data-standard-data-connection], [data-adaptive-data-connection]')) {
        trackFirstMeaningfulInteraction();
      }
    });

    const scenario           = { familiarity: 'new', productVersion: '4.2', connectionCount: 3 };
    const standard               = { dataConnectionId: '', attempted: false, completed: false };
    const adaptive               = { dataConnectionId: '', attempted: false, completed: false };
    let changedKeys                = [];
    let flashTimer                    ;
    const uiState = { expandedHelp: [], highlightedField: null, dismissedGuidance: [] };

    const currentConnections = () => scenario.connectionCount === 1 ? ONE_DATA_CONNECTION : THREE_DATA_CONNECTIONS;
    const plural = (count        , one        , many        ) => `${count} ${count === 1 ? one : many}`;
    const scenarioSummary = () => `${scenario.familiarity} user · ${scenario.productVersion} · ${plural(currentConnections().length, 'match', 'matches')}`;

    const announce = (message        ) => {
      if (!labStatus) return;
      labStatus.textContent = '';
      window.requestAnimationFrame(() => {
        labStatus.textContent = message;
      });
    };

    const setPressed = (button                   , active         ) => {
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('border-[var(--accent-border)]', active);
      button.classList.toggle('bg-[var(--accent-subtle)]', active);
      button.classList.toggle('font-medium', active);
      button.classList.toggle('text-[var(--accent)]', active);
      button.classList.toggle('border-[var(--border-subtle)]', !active);
      button.classList.toggle('bg-[var(--bg-primary)]', !active);
      button.classList.toggle('text-[var(--text-secondary)]', !active);
    };

    const syncScenarioButtons = () => {
      lab.querySelectorAll                   ('[data-familiarity]').forEach((button) => setPressed(button, button.dataset.familiarity === scenario.familiarity));
      lab.querySelectorAll                   ('[data-version]').forEach((button) => setPressed(button, button.dataset.version === scenario.productVersion));
      lab.querySelectorAll                   ('[data-connection-count]').forEach((button) => setPressed(button, button.dataset.connectionCount === String(scenario.connectionCount)));
      lab.querySelectorAll                   ('[data-preset]').forEach((button) => {
        const preset = PRESETS[button.dataset.preset ?? ''];
        const active = Boolean(preset)
          && preset.scenario.familiarity === scenario.familiarity
          && preset.scenario.productVersion === scenario.productVersion
          && preset.scenario.connectionCount === scenario.connectionCount;
        setPressed(button, active);
      });
    };

    const resetSurface = (surface              ) => {
      surface.dataConnectionId = '';
      surface.attempted = false;
      surface.completed = false;
    };

    const rebuildOptions = () => {
      const connections = currentConnections();
      [standardDataConnection, adaptiveDataConnection].forEach((select) => {
        select.replaceChildren();
        select.add(new Option('Select a Data Connection', ''));
        connections.forEach((connection) => select.add(new Option(`${connection.name} · ${connection.system}`, connection.id)));
      });
    };

    const connectionName = (id        ) => currentConnections().find((connection) => connection.id === id)?.name ?? 'the selected connection';

    const authorityLabel = (response             ) => {
      if (!response) return 'no action';
      switch (response.type) {
        case 'preconfiguration': return 'offer';
        case 'suggestion': return 'guide';
        case 'highlight': return 'highlight';
        case 'explanation': return 'explain';
        case 'help': return 'help';
        case 'warning': return 'warn';
      }
      return 'no action';
    };

    const interventionHeadline = (response             ) => {
      if (!response) return 'Configuration ready';
      switch (response.type) {
        case 'preconfiguration': return 'One compatible connection found';
        case 'suggestion': return 'Choose among compatible connections';
        case 'highlight': return 'Data Connection required';
        case 'explanation': return 'Why this field is required';
        case 'help': return 'Data Connection guidance';
        case 'warning': return 'Review this configuration';
      }
      return 'Configuration guidance';
    };

    const policySummary = (response             ) => {
      if (!response) return 'No intervention required; the selected value satisfies deterministic requirements.';
      switch (response.type) {
        case 'preconfiguration': return 'Offer the sole compatible value; require user confirmation before changing the field.';
        case 'suggestion': return 'Guide the user without choosing among multiple valid values.';
        case 'highlight': return 'Highlight the required field without changing its value.';
        case 'explanation': return 'Explain the deterministic requirement without taking action.';
        case 'help': return 'Surface contextual help while leaving application state unchanged.';
        case 'warning': return 'Warn about the current state without taking action.';
      }
      return 'Keep the current interface state unchanged.';
    };

    const outcomeText = (surface              ) => {
      if (surface.completed) return '✓ Step complete';
      if (surface.dataConnectionId) return 'Ready to continue';
      if (surface.attempted) return 'Blocked · selection required';
      return 'Awaiting selection';
    };

    const setOutcome = (element                    , surface              ) => {
      if (!element) return;
      element.textContent = outcomeText(surface);
      element.classList.toggle('text-red-600', surface.attempted && !surface.dataConnectionId);
      element.classList.toggle('dark:text-red-400', surface.attempted && !surface.dataConnectionId);
      element.classList.toggle('text-[var(--accent)]', surface.completed);
      element.classList.toggle('text-[var(--text-muted)]', !surface.completed && !(surface.attempted && !surface.dataConnectionId));
    };

    const flashIntervention = () => {
      if (!adaptiveIntervention || prefersReducedMotion()) return;
      adaptiveIntervention.removeAttribute('data-flash');
      void adaptiveIntervention.offsetWidth;
      adaptiveIntervention.setAttribute('data-flash', 'true');
      window.clearTimeout(flashTimer);
      flashTimer = window.setTimeout(() => adaptiveIntervention.removeAttribute('data-flash'), 1200);
    };

    let pendingSetValueAction                      ;

    const render = () => {
      const connections = currentConnections();
      const config                          = { dataConnectionId: adaptive.dataConnectionId || null };
      const runtime                 = { productVersion: scenario.productVersion, userFamiliarity: scenario.familiarity, availableDataConnections: connections };
      const result = resolveInterface({ config, runtime, ui: uiState, knowledge: KNOWLEDGE });
      const primaryResponse = result.responses.reduce                        (
        (selected, response) => !selected || response.authority > selected.authority ? response : selected,
        undefined,
      );
      const byId = (id        ) => result.responses.find((response) => response.id === id);
      const beginnerResponse = byId('data-connection-beginner-help');
      const optionsResponse = byId('data-connection-option-overview');
      const versionResponse = byId('data-connection-version-guidance');
      pendingSetValueAction = primaryResponse?.actions?.find((action) => action.type === 'set-value');

      if (scenarioFamiliarity) scenarioFamiliarity.textContent = scenario.familiarity;
      if (scenarioVersion) scenarioVersion.textContent = `v${scenario.productVersion}`;
      if (scenarioConnections) scenarioConnections.textContent = plural(connections.length, 'match', 'matches');
      if (truthSummary) truthSummary.textContent = `${plural(connections.length, 'compatible connection', 'compatible connections')} · product ${scenario.productVersion} · ${scenario.familiarity} user`;

      // Surfaces: validation, outcomes, completion.
      const standardInvalid = standard.attempted && !standard.dataConnectionId;
      const adaptiveInvalid = adaptive.attempted && !adaptive.dataConnectionId;

      standardError?.classList.toggle('hidden', !standardInvalid);
      adaptiveError?.classList.toggle('hidden', !adaptiveInvalid);
      if (adaptiveError) {
        adaptiveError.textContent = pendingSetValueAction
          ? `Select a Data Connection to continue, or use the suggested ${connections[0]?.name ?? 'connection'}.`
          : `Pick one of the ${connections.length} compatible connections${optionsResponse ? ' described above' : ''} to continue.`;
      }
      standardDataConnection.setAttribute('aria-invalid', String(standardInvalid));
      adaptiveDataConnection.setAttribute('aria-invalid', String(adaptiveInvalid));
      setOutcome(standardOutcome, standard);
      setOutcome(adaptiveOutcome, adaptive);

      standardSuccess?.classList.toggle('hidden', !standard.completed);
      adaptiveSuccess?.classList.toggle('hidden', !adaptive.completed);
      if (standardSuccessLabel) standardSuccessLabel.textContent = `Configured with ${connectionName(standard.dataConnectionId)}`;
      if (adaptiveSuccessLabel) adaptiveSuccessLabel.textContent = `Configured with ${connectionName(adaptive.dataConnectionId)}`;

      // Adaptive intervention panel.
      if (adaptiveHeadline) adaptiveHeadline.textContent = interventionHeadline(primaryResponse);
      if (adaptiveAuthority) adaptiveAuthority.textContent = authorityLabel(primaryResponse);
      if (adaptiveGuidance) {
        adaptiveGuidance.textContent = primaryResponse?.message
          ?? 'The selected Data Connection satisfies the current requirement, so the guidance steps aside.';
      }

      if (adaptiveBeginner) {
        adaptiveBeginner.textContent = beginnerResponse?.message ?? '';
        adaptiveBeginner.classList.toggle('hidden', !beginnerResponse);
      }

      if (adaptiveOptions) {
        adaptiveOptions.replaceChildren();
        (optionsResponse?.items ?? []).forEach((line) => {
          const [name, ...rest] = line.split(': ');
          const item = document.createElement('li');
          item.className = 'm-0';
          const strong = document.createElement('strong');
          strong.className = 'font-medium text-[var(--text-primary)]';
          strong.textContent = name;
          item.append(strong, rest.length ? ` — ${rest.join(': ')}` : '');
          adaptiveOptions.append(item);
        });
        adaptiveOptions.classList.toggle('hidden', !optionsResponse);
      }

      if (adaptiveVersion) {
        if (adaptiveVersionText) adaptiveVersionText.textContent = versionResponse?.message ?? '';
        adaptiveVersion.classList.toggle('hidden', !versionResponse);
        adaptiveVersion.classList.toggle('flex', Boolean(versionResponse));
      }

      if (adaptiveSource) {
        const shown = [primaryResponse, beginnerResponse, optionsResponse, versionResponse].filter((response)                         => Boolean(response));
        const knowledgeLabels = shown
          .flatMap((response) => response.knowledgeIds ?? [])
          .map((knowledgeId) => result.applicableKnowledge.find((item) => item.id === knowledgeId)?.source.label)
          .filter((label)                  => Boolean(label));
        const labels = [...new Set(knowledgeLabels)];
        if (primaryResponse?.type === 'preconfiguration') labels.unshift('Application state');
        adaptiveSource.textContent = labels.length > 0
          ? `Sources (authored fixtures) · ${labels.join(' · ')}`
          : 'Source · Application state';
      }

      if (useSoleConnection) {
        const show = Boolean(pendingSetValueAction?.value && !adaptive.dataConnectionId);
        useSoleConnection.classList.toggle('hidden', !show);
        if (pendingSetValueAction) useSoleConnection.textContent = `✓ ${pendingSetValueAction.label}`;
      }

      // Plain-language lab note explaining the adaptive decision.
      if (adaptiveLabNoteList) {
        const notes                                                     = [];
        if (adaptive.dataConnectionId) {
          notes.push({ key: 'selection', text: 'A valid connection is selected, so the guidance steps aside.' });
        } else {
          notes.push(scenario.familiarity === 'new'
            ? { key: 'familiarity', text: optionsResponse ? 'New user: adds a plain-language explanation and what each option is for.' : 'New user: adds a plain-language explanation.' }
            : { key: 'familiarity', text: 'Experienced user: skips the beginner explanation and option descriptions.' });
          notes.push(scenario.productVersion === '4.2'
            ? { key: 'version', text: 'Version 4.2: shows the new explicit-selection rule.' }
            : { key: 'version', text: 'Version 4.1: no version notice, because the 4.2 rule does not apply.' });
          notes.push(connections.length === 1
            ? { key: 'connections', text: 'One compatible option: offers it as a button, but only you can apply it.' }
            : { key: 'connections', text: `${connections.length} valid options: guides you, but will not choose one for you.` });
        }
        adaptiveLabNoteList.replaceChildren();
        notes.forEach((note) => {
          const item = document.createElement('li');
          item.className = 'm-0';
          const changed = note.key !== 'selection' && changedKeys.includes(note.key);
          item.dataset.changed = String(changed);
          item.textContent = changed ? `Changed · ${note.text}` : note.text;
          adaptiveLabNoteList.append(item);
        });
      }

      // Decision trace.
      if (traceState) traceState.textContent = `${scenario.productVersion} · ${scenario.familiarity} · ${plural(connections.length, 'match', 'matches')}`;
      if (traceValidation) {
        traceValidation.textContent = result.validation.length > 0
          ? 'Data Connection is required.'
          : 'No blocking validation issues.';
      }
      if (traceKnowledge) {
        const labels = [...new Set(result.applicableKnowledge.map((item) => item.source.label))];
        traceKnowledge.textContent = labels.length > 0 ? labels.join(' · ') : 'No authored knowledge applies.';
      }
      if (tracePolicy) tracePolicy.textContent = policySummary(primaryResponse);
    };

    const applyScenario = (next          , notice        ) => {
      const previous = { ...scenario };
      Object.assign(scenario, next);
      changedKeys = [];
      if (previous.familiarity !== scenario.familiarity) changedKeys.push('familiarity');
      if (previous.productVersion !== scenario.productVersion) changedKeys.push('version');
      if (previous.connectionCount !== scenario.connectionCount) changedKeys.push('connections');

      resetSurface(standard);
      resetSurface(adaptive);
      syncScenarioButtons();
      rebuildOptions();
      render();
      if (changedKeys.length > 0) flashIntervention();

      const fullNotice = changedKeys.length > 0
        ? `${notice} Both forms were reset.`
        : `${notice} Nothing changed in the scenario; both forms were reset.`;
      if (scenarioNoticeText) scenarioNoticeText.textContent = fullNotice;
      announce(`${fullNotice} Scenario: ${scenarioSummary()}.`);
    };

    standardDataConnection.addEventListener('change', () => {
      standard.dataConnectionId = standardDataConnection.value;
      standard.attempted = false;
      standard.completed = false;
      render();
      announce(standard.dataConnectionId
        ? 'Conventional form: Data Connection selected. Ready to continue.'
        : 'Conventional form: Data Connection cleared.');
    });

    adaptiveDataConnection.addEventListener('change', () => {
      adaptive.dataConnectionId = adaptiveDataConnection.value;
      adaptive.attempted = false;
      adaptive.completed = false;
      render();
      announce(adaptive.dataConnectionId
        ? 'Adaptive form: Data Connection selected. Guidance removed. Ready to continue.'
        : 'Adaptive form: Data Connection cleared.');
    });

    standardContinue?.addEventListener('click', () => {
      standard.attempted = true;
      standard.completed = Boolean(standard.dataConnectionId);
      render();
      announce(standard.completed
        ? `Conventional form: step complete with ${connectionName(standard.dataConnectionId)}.`
        : 'Conventional form: blocked. Select a Data Connection to continue.');
    });

    adaptiveContinue?.addEventListener('click', () => {
      adaptive.attempted = true;
      adaptive.completed = Boolean(adaptive.dataConnectionId);
      render();
      announce(adaptive.completed
        ? `Adaptive form: step complete with ${connectionName(adaptive.dataConnectionId)}.`
        : 'Adaptive form: blocked. Select a Data Connection to continue.');
    });

    useSoleConnection?.addEventListener('click', () => {
      if (!pendingSetValueAction?.value) return;
      adaptive.dataConnectionId = pendingSetValueAction.value;
      adaptiveDataConnection.value = pendingSetValueAction.value;
      adaptive.attempted = false;
      adaptive.completed = false;
      const selectedLabel = adaptiveDataConnection.selectedOptions[0]?.textContent?.trim();
      render();
      adaptiveContinue?.focus();
      announce(`Adaptive form: ${selectedLabel || 'compatible Data Connection'} selected. Ready to continue.`);
    });

    decisionTrace?.addEventListener('toggle', () => {
      if (!traceToggleLabel) return;
      traceToggleLabel.innerHTML = decisionTrace.open ? 'Hide trace <span aria-hidden="true">⌃</span>' : 'Show trace <span aria-hidden="true">⌄</span>';
    });

    lab.querySelectorAll                   ('[data-preset]').forEach((button) => button.addEventListener('click', () => {
      const preset = PRESETS[button.dataset.preset ?? ''];
      if (!preset) return;
      applyScenario({ ...preset.scenario }, `Loaded “${preset.label}” (${preset.scenario.familiarity} user · ${preset.scenario.productVersion} · ${plural(preset.scenario.connectionCount, 'match', 'matches')}).`);
    }));

    lab.querySelectorAll                   ('[data-familiarity]').forEach((button) => button.addEventListener('click', () => {
      const familiarity = button.dataset.familiarity                   ;
      applyScenario({ ...scenario, familiarity }, `Changed user familiarity to ${familiarity === 'new' ? 'New' : 'Experienced'}.`);
    }));

    lab.querySelectorAll                   ('[data-version]').forEach((button) => button.addEventListener('click', () => {
      const productVersion = button.dataset.version                  ;
      applyScenario({ ...scenario, productVersion }, `Changed product version to ${productVersion}.`);
    }));

    lab.querySelectorAll                   ('[data-connection-count]').forEach((button) => button.addEventListener('click', () => {
      const connectionCount                  = button.dataset.connectionCount === '1' ? 1 : 3;
      applyScenario({ ...scenario, connectionCount }, `Changed compatible connections to ${connectionCount === 1 ? 'One' : 'Several'}.`);
    }));

    syncScenarioButtons();
    rebuildOptions();
    render();
  });

})();
"injected"