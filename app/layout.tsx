import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { businessConfig } from "@/config/business";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://SITE_ADRESINIZ.com"),
  title: "Bülent Börekçilik Ataşehir Ferhatpaşa | Börek Siparişi",
  description: "Ataşehir Ferhatpaşa'da sıcak ve taze börek siparişi. Kıymalı kol böreği, peynirli Bülent Börek ve diğer çeşitler için telefon veya WhatsApp üzerinden sipariş verin.",
  openGraph: { type: "website", locale: "tr_TR", title: "Bülent Börekçilik Ataşehir Ferhatpaşa | Börek Siparişi", description: "Ataşehir Ferhatpaşa'da sıcak ve taze börek siparişi. Telefon veya WhatsApp üzerinden sipariş verin.", siteName: businessConfig.businessName },
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#181714" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gtmId = businessConfig.googleTagManagerId;
  const gaId = businessConfig.googleAnalyticsId;
  return <html lang="tr"><body>
    {gtmId && <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}</Script>}
    {gaId && <><Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" /><Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');`}</Script></>}
    {children}
  </body></html>;
}
