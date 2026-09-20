export type ConversionEvent = "phone_click" | "whatsapp_click" | "directions_click";

export function trackConversion(event: ConversionEvent, placement: string) {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const payload = {
    event, placement,
    utm_source: params.get("utm_source") || undefined,
    utm_medium: params.get("utm_medium") || undefined,
    utm_campaign: params.get("utm_campaign") || undefined,
    gclid: params.get("gclid") || undefined,
  };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
  window.gtag?.("event", event, payload);
}

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag?: (command: string, event: string, params: Record<string, unknown>) => void;
  }
}
