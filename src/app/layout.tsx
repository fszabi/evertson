import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://evertsontrade.com/"),
  keywords: [
    "evertson",
    "cs2 kereskedés",
    "cs2 skin eladás",
    "cs2 skin bérlés",
    "cs2 fogadás",
    "cs2 tanfolyam",
    "scam megelőzés cs2",
    "cs2 nyereményjáték",
    "biztonságos cs2 kereskedés",
    "cs2 kereskedési alapok",
  ],
  icons: {
    icon: "/assets/favicon/favicon.ico",
  },
  title:
    "Magyarország legnagyobb Counter Strike 2 trading platformja - evertsontrade.com",
  description:
    "Fedezd fel Magyarország legnagyobb Counter Strike 2 trading platformját. Akár vásárolni, eladni vagy cserélni szeretnél, szolgáltatásaim zökkenőmentesek és biztonságosak.",
  openGraph: {
    images: ["/assets/images/services/skin_trading/skin_trading.webp"],
    title:
      "Magyarország legnagyobb Counter Strike 2 trading platformja - evertsontrade.com",
    description:
      "Fedezd fel Magyarország legnagyobb Counter Strike 2 trading platformját. Akár vásárolni, eladni vagy cserélni szeretnél, szolgáltatásaim zökkenőmentesek és biztonságosak.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="hu">
      <Script
        defer
        src="https://app.tinyanalytics.io/pixel/TvmNcuQ8pnw3GQE3"
        strategy="afterInteractive"
      />
      <body className={`${inter.className} bg-zinc-900 text-zinc-50`}>
        {children}
      </body>
    </html>
  );
}
