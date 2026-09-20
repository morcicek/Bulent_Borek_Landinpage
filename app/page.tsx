import Image from "next/image";
import { ArrowRight, Clock3, MapPin, MessageCircle, PackageCheck, Phone, Sparkles, Star, Wheat } from "lucide-react";
import { businessConfig, products, reviews } from "@/config/business";
import { ConversionLink } from "@/components/conversion-link";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { SocialProof } from "@/components/social-proof";

const reasons = [
  { icon: Sparkles, title: "Taze Üretim", text: "Gün içinde taze hazırlanan, çıtır çıtır börekler." },
  { icon: Wheat, title: "Bol İç Harç", text: "Her lokmada dengeli hamur, doyurucu iç harç." },
  { icon: PackageCheck, title: "Hızlı Sipariş", text: "Telefon veya WhatsApp ile kolayca sipariş verin." },
  { icon: MapPin, title: "Ataşehir Ferhatpaşa", text: "Mahallenize yakın, sıcak ve tanıdık lezzet." },
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org", "@type": "Bakery", name: businessConfig.businessName, telephone: businessConfig.phone,
    address: { "@type": "PostalAddress", streetAddress: businessConfig.address.street, addressLocality: businessConfig.address.district, addressRegion: businessConfig.address.city, addressCountry: "TR" },
    openingHours: businessConfig.openingHours.map((item) => item.schema).filter(Boolean),
    aggregateRating: { "@type": "AggregateRating", ratingValue: businessConfig.googleRating, reviewCount: businessConfig.googleReviewCount },
    servesCuisine: "Türk Mutfağı, Börek", priceRange: "₺₺",
  };

  return (
    <main className="overflow-hidden bg-cream pb-24 text-ink md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="absolute inset-x-0 top-0 z-30 border-b border-white/10">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#top" className="leading-none text-white focus-ring" aria-label="Sayfanın başına dön">
            <span className="block font-serif text-xl font-semibold tracking-tight">{businessConfig.businessName}</span>
            <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">{businessConfig.branchName}</span>
          </a>
          <ConversionLink href={`tel:${businessConfig.phone}`} event="phone_click" placement="header" className="hidden min-h-11 items-center gap-2 rounded-full bg-orange px-5 text-sm font-bold text-white transition hover:bg-orange-dark focus-ring sm:inline-flex">
            <Phone size={17} aria-hidden="true" /> Telefonla Sipariş
          </ConversionLink>
        </div>
      </header>

      <section id="top" className="relative isolate bg-charcoal text-white lg:min-h-[700px]">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <Image src="/images/kiymali-kol-boregi.png" alt="Taze pişmiş kıymalı kol böreği" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-[62%_center] lg:object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/35 to-transparent" />
        </div>
        <div className="relative mx-auto grid max-w-7xl px-5 pb-12 pt-28 sm:px-8 lg:min-h-[700px] lg:grid-cols-2 lg:items-center lg:px-10 lg:py-24">
          <div className="max-w-2xl lg:pr-12">
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-light sm:text-sm"><span className="h-px w-8 bg-orange" /> ATAŞEHİR'DE SICAK BÖREK</p>
            <h1 className="font-serif text-[clamp(2.75rem,7vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.04em]">Sıcacık Börek,<br /><span className="text-orange-light">Kapınıza Gelsin.</span></h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg">Kıymalı kol böreği, peynirli Bülent Börek ve diğer çeşitlerimiz için hemen sipariş verin.</p>
            <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 sm:aspect-[16/8] lg:hidden">
              <Image src="/images/kiymali-kol-boregi.png" alt="Taze pişmiş kıymalı kol böreği" fill priority sizes="100vw" className="object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 to-transparent" />
              <span className="absolute bottom-3 right-3 rounded-full border border-white/15 bg-charcoal/75 px-4 py-2 text-xs font-bold backdrop-blur">Her Gün Taze</span>
            </div>
            <div id="hero-conversion-actions" className="mt-6 flex flex-col gap-3 lg:mt-7 lg:flex-row">
              <ConversionLink href={`tel:${businessConfig.phone}`} event="phone_click" placement="hero" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-orange px-6 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-dark focus-ring"><Phone size={20} /> Telefonla Sipariş Ver</ConversionLink>
              <ConversionLink href={businessConfig.whatsappUrl} event="whatsapp_click" placement="hero" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/10 px-6 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/15 focus-ring"><MessageCircle size={20} /> WhatsApp’tan Sipariş Ver</ConversionLink>
            </div>
            <SocialProof className="mt-5" />
          </div>
        </div>
        <div className="absolute bottom-6 right-8 hidden rounded-full border border-white/15 bg-charcoal/75 px-5 py-3 text-sm font-bold backdrop-blur lg:block">Her Gün Taze</div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28" aria-labelledby="products-title">
        <div className="mb-10 flex items-end justify-between"><div><p className="eyebrow">Tezgâhın favorileri</p><h2 id="products-title" className="section-title">En Sevilenler</h2></div><p className="hidden max-w-xs text-right text-sm leading-6 text-muted sm:block">Taze pişen çeşitlerimizden dilediğinizi seçin, siparişinizi hemen oluşturun.</p></div>
        <div className="grid gap-5 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="group overflow-hidden rounded-2xl border border-black/8 bg-white shadow-soft">
              <div className="relative aspect-[4/3] overflow-hidden"><Image src={product.image} alt={product.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" /></div>
              <div className="p-6"><h3 className="font-serif text-2xl font-semibold">{product.name}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-muted">{product.description}</p><ConversionLink href={`tel:${businessConfig.phone}`} event="phone_click" placement={`product_${product.slug}`} className="mt-5 inline-flex min-h-11 items-center gap-2 font-bold text-orange-dark focus-ring">Sipariş Ver <ArrowRight size={17} /></ConversionLink></div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24" aria-labelledby="why-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><p className="eyebrow">Bizi farklı kılan</p><h2 id="why-title" className="section-title max-w-xl">Neden Bizi Tercih Ediyorlar?</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-black/8 bg-black/8 sm:grid-cols-2 lg:grid-cols-4">{reasons.map(({ icon: Icon, title, text }) => <div key={title} className="bg-white p-7 lg:p-8"><span className="mb-6 flex size-11 items-center justify-center rounded-full bg-orange/10 text-orange-dark"><Icon size={21} /></span><h3 className="font-serif text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-charcoal px-5 py-16 text-white sm:px-8 lg:px-10"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-light">Sıcak, taze, size yakın</p><h2 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">Böreğiniz Hazır, Siparişiniz Bir Tık Uzakta.</h2></div><div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col"><ConversionLink href={`tel:${businessConfig.phone}`} event="phone_click" placement="mid_cta" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-orange px-6 font-bold focus-ring"><Phone size={19} /> Telefonla Sipariş Ver</ConversionLink><ConversionLink href={businessConfig.whatsappUrl} event="whatsapp_click" placement="mid_cta" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/20 px-6 font-bold focus-ring"><MessageCircle size={19} /> WhatsApp Sipariş</ConversionLink></div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28" aria-labelledby="reviews-title"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><p className="eyebrow">Google değerlendirmeleri</p><h2 id="reviews-title" className="section-title">Müşterilerimiz Ne Diyor?</h2><div className="mt-8 flex items-center gap-4"><span className="font-serif text-6xl font-semibold">{businessConfig.googleRating}</span><div><div className="flex text-orange" aria-label={`${businessConfig.googleRating} yıldız`}>★★★★★</div><p className="mt-1 text-sm text-muted">{businessConfig.googleReviewCount}+ Google değerlendirmesi</p></div></div></div><div className="grid gap-4 sm:grid-cols-3">{reviews.map((review, index) => <article key={index} className="rounded-2xl border border-black/8 bg-white p-6 shadow-soft"><Star className="fill-orange text-orange" size={20} /><p className="mt-8 text-base leading-7 text-muted">“{review}”</p><p className="mt-8 text-xs font-bold uppercase tracking-[.15em] text-ink/60">Google Yorumu</p></article>)}</div></div></section>

      <section className="border-t border-black/8 bg-white" aria-labelledby="location-title"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-24"><div><p className="eyebrow">Ferhatpaşa şubesi</p><h2 id="location-title" className="section-title">Bizi Bulun</h2><div className="mt-8 text-lg leading-8"><strong>{businessConfig.businessName}</strong><br /><span className="text-muted">{businessConfig.address.district} / {businessConfig.address.neighborhood}<br />{businessConfig.address.city}</span></div><ConversionLink href={businessConfig.googleMapsUrl} event="directions_click" placement="location" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-ink px-5 font-bold text-white focus-ring"><MapPin size={19} /> Google Maps’te Yol Tarifi Al</ConversionLink></div><div className="rounded-2xl bg-cream-dark p-7 sm:p-9"><div className="flex items-center gap-3"><Clock3 className="text-orange-dark" /><h3 className="font-serif text-2xl font-semibold">Çalışma Saatleri</h3></div><dl className="mt-7 divide-y divide-black/8">{businessConfig.openingHours.map((item) => <div key={item.days} className="flex justify-between gap-6 py-4 text-sm"><dt className="text-muted">{item.days}</dt><dd className="font-bold">{item.hours}</dd></div>)}</dl><p className="mt-5 text-xs leading-5 text-muted">Resmî tatillerde saatler değişebilir. Sipariş vermeden önce arayabilirsiniz.</p></div></div></section>

      <footer className="bg-black px-5 py-10 text-white/55 sm:px-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between"><p className="font-serif text-lg font-semibold text-white">{businessConfig.businessName}</p><p>{businessConfig.branchName} • İstanbul</p></div></footer>
      <MobileStickyCta />
    </main>
  );
}
