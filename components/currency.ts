export const supportedCurrencies = ["EUR", "GBP", "USD", "CAD", "AUD", "CHF"] as const;
export type Currency = (typeof supportedCurrencies)[number];

const rates: Record<Currency, number> = { EUR: 1, GBP: 0.86, USD: 1.09, CAD: 1.49, AUD: 1.67, CHF: 0.96 };

export function detectCurrency(): Currency {
  if (typeof navigator === "undefined") return "EUR";
  const locale = navigator.language.toLowerCase();
  if (locale.includes("gb")) return "GBP";
  if (locale.includes("us")) return "USD";
  if (locale.includes("ca")) return "CAD";
  if (locale.includes("au")) return "AUD";
  if (locale.includes("ch")) return "CHF";
  return "EUR";
}

export function formatPrice(eur: number, currency: Currency) {
  return new Intl.NumberFormat(undefined, { style: "currency", currency, maximumFractionDigits: 0 }).format(eur * rates[currency]);
}

export const currencyLabels: Record<Currency, string> = {
  EUR: "Euro (€)", GBP: "British pound (£)", USD: "US dollar ($)", CAD: "Canadian dollar (C$)", AUD: "Australian dollar (A$)", CHF: "Swiss franc (CHF)",
};

export { rates };
export const currencyDisclaimer = "Approximate conversion for browsing; your provider may charge in their local currency.";
export function getCurrencySymbol(currency: Currency) {
  return new Intl.NumberFormat(undefined, { style: "currency", currency }).formatToParts(0).find((part) => part.type === "currency")?.value ?? currency;
}
