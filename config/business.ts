export const businessConfig = {
  businessName: "Bülent Börekçilik",
  branchName: "Ataşehir • Ferhatpaşa",
  phone: "+905412883878",
  whatsappUrl: "https://wa.me/902166600028",
  googleMapsUrl: "https://maps.app.goo.gl/A7TsfJ5nsMAGk1c46?g_st=com.openai.chat.ShareExtension&utm_source=chatgpt.com",
  address: { street: "Mareşal Fevzi Çakmak Cd. No:12/A", neighborhood: "Ferhatpaşa", district: "Ataşehir", city: "İstanbul" },
  openingHours: [
    { days: "Pazartesi – Cumartesi", hours: "06:00 – 17:00", schema: "Mo-Sa 06:00-17:00" },
    { days: "Pazar", hours: "07:30-15:00", schema: "" },
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

export const reviews = ["Hem lezzet hem kalite olarak çok üst seviye ki bunların yanında hizmet servis çok iyiydi sipariş verdik çok hızlı bir şekilde geldi ve çok özenli bir şekilde hazırlanmıştı yanında extra çatal bıçak biberleri gönderilmişti yetmez demişler kahve ve kek hediyesi de göndermişler yani memnuniyet için hersey yapılmış valla hem lezzetinden hem kalitesinden hem servisinden çok memnun kaldık",
                        "Bugün ilk defa gittim gerçekten ilgi alaka güler yüzlülük samimiyet çok sıcak insanlar ailece gidebilirsiniz ikraminiz için ayrıca teşekkür ederim.", 
                        "Sabah 7 de sipariş verdim 7 dakikada teslim edildi sıcaktı kaşarli ve kıymalı söyledim ben daha çok kıymalı sevdim."] as const;
