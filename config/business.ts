export const businessConfig = {
  businessName: "Bülent Börekçilik",
  branchName: "Ataşehir • Ferhatpaşa",
  phone: "+905412883878",
  whatsappUrl: "https://wa.me/902166600028",
  googleMapsUrl: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x14cacfb154587175:0x8f80d1a4013ba0d3?sa=X&ved=1t:8290&ictx=111",
  address: { street: "Mareşal Fevzi Çakmak Cd. no:12/A", neighborhood: "Ferhatpaşa", district: "Ataşehir", city: "İstanbul" },
  openingHours: [
    { days: "Pazartesi – Cumartesi", hours: "06:00 – 16:00", schema: "Mo-Sa 06:00-17:00" },
    { days: "Pazar", hours: "07:00 - 15:00", schema: "" },
  ],
  googleRating: "4.6",
  googleReviewCount: 140,
  googleTagManagerId: "",
  googleAnalyticsId: "",
} as const;

export const products = [
  { slug: "kiymali", name: "Kıymalı Kol Böreği", description: "Çıtır katların arasında bol ve dengeli kıymalı iç harç.", image: "/images/kiymali-kol-boregi.png", alt: "Kıymalı kol böreği dilimleri" },
  { slug: "peynirli", name: "Peynirli Bülent Börek", description: "Yumuşak peynir dolgusu ve ince, çıtır hamur katları.", image: "/images/peynirli-borek.png", alt: "Peynirli Bülent Börek dilimleri" },
  { slug: "ispanakli", name: "Ispanaklı Börek", description: "Taze ıspanaklı iç harç ve ustalıkla kızarmış hamur.", image: "/images/ispanakli-borek.png", alt: "Ispanaklı börek dilimleri" },
] as const;

export const reviews = ["Google yorumu buraya eklenecek.", "Google yorumu buraya eklenecek.", "Google yorumu buraya eklenecek."] as const;
