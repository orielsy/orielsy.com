export type PortfolioAnalyticsData = Record<string, string | number | boolean>;

type UmamiTracker = {
  track: (eventName: string, data?: PortfolioAnalyticsData) => void;
};

type AnalyticsWindow = Window & {
  umami?: UmamiTracker;
};

export function trackPortfolioEvent(
  eventName: string,
  data?: PortfolioAnalyticsData,
): void {
  if (typeof window === 'undefined') return;

  try {
    const tracker = (window as AnalyticsWindow).umami;
    tracker?.track(eventName, data);
  } catch {
    // Analytics must never interfere with the portfolio interaction itself.
  }
}
