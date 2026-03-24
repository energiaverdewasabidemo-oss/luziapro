export const trackEvent = (event: string, params?: object) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', event, params);
  }
};
