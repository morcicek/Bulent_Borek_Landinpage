export const businessConfig = {
  businessName: "Bülent Börekçilik",
  branchName: "Ataşehir • Ferhatpaşa",
  phone: "+90XXXXXXXXXX",
  whatsappUrl: "WHATSAPP_LINK",
  googleMapsUrl: "GOOGLE_MAPS_LINK",
  address: { street: "AÇIK_ADRES_BURAYA", neighborhood: "Ferhatpaşa", district: "Ataşehir", city: "İstanbul" },
  openingHours: [
    { days: "Pazartesi – Cumartesi", hours: "06:00 – 17:00", schema: "Mo-Sa 06:00-17:00" },
    { days: "Pazar", hours: "ÇALIŞMA_SAATİ", schema: "" },
  ],
  googleRating: "4.6",
  googleReviewCount: 141,
  googleTagManagerId: "",
  googleAnalyticsId: "",
} as const;

export const products = [
  { slug: "kiymali", name: "Kıymalı Kol Böreği", description: "Çıtır katların arasında bol ve dengeli kıymalı iç harç.", image: "/images/kiymali-kol-boregi.png", alt: "Kıymalı kol böreği dilimleri" },
  { slug: "peynirli", name: "Peynirli Bülent Börek", description: "Yumuşak peynir dolgusu ve ince, çıtır hamur katları.", image: "/images/peynirli-borek.png", alt: "Peynirli Bülent Börek dilimleri" },
  { slug: "ispanakli", name: "Ispanaklı Börek", description: "Taze ıspanaklı iç harç ve ustalıkla kızarmış hamur.", image: "/images/ispanakli-borek.png", alt: "Ispanaklı börek dilimleri" },
] as const;

export const reviews = ["Google yorumu buraya eklenecek.", "Google yorumu buraya eklenecek.", "Google yorumu buraya eklenecek."] as const;
