# Bülent Börekçilik Landing Page

Google Ads ziyaretçilerini telefon ve WhatsApp siparişine yönlendiren, mobil öncelikli tek sayfalık site.

## Bilgileri değiştirme

Tüm işletme bilgileri `config/business.ts` dosyasındadır.

- Telefon: `phone`
- WhatsApp: `whatsappUrl`
- Google Maps: `googleMapsUrl`
- Adres ve çalışma saatleri: `address` ve `openingHours`
- Google puanı ve yorum sayısı: `googleRating` ve `googleReviewCount`
- Analytics/GTM: `googleAnalyticsId` ve `googleTagManagerId`

## Fotoğrafları değiştirme

Yeni fotoğrafları `public/images` klasörüne koyun. Aynı dosya adlarını kullanırsanız başka bir ayar yapmanız gerekmez:

- `kiymali-kol-boregi.png`
- `peynirli-borek.png`
- `ispanakli-borek.png`

## Bilgisayarda çalıştırma

```bash
pnpm install
pnpm dev
```

Tarayıcıdan `http://localhost:3000` adresini açın.

## Vercel'e yayınlama

1. Proje klasörünü GitHub'a yükleyin.
2. Vercel'de **Add New > Project** seçin.
3. GitHub projesini seçip **Deploy** düğmesine basın.
4. Vercel, Next.js ayarlarını otomatik algılar.

Yayınlamadan önce `config/business.ts` içindeki placeholder bilgileri ve `app/layout.tsx` içindeki `SITE_ADRESINIZ.com` alanını mutlaka değiştirin.
