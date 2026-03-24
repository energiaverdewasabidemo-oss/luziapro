export const trackEvent = (eventName: string, userData?: object) => {
  // Pixel del navegador
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName);
  }

  // API de Conversiones (servidor)
  fetch('/.netlify/functions/meta-conversions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ eventName, userData: userData || {} }),
  }).catch(() => {});
};
