import { EdgeStoreProvider } from "@/lib/edgestore";
import type { Metadata } from "next";
import { Barlow_Condensed, Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
  variable: "--font-bebasneue",
});

const ethnocentric = localFont({
  src: "./fonts/ethnocentric/ethnocentric-rg.otf",
  style: "normal",
  display: "swap",
  variable: "--font-ethnocentric",
});

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
      <Script
        src="https://widget.gleamjs.io/e.js"
        type="text/javascript"
        async
      />
      <body
        className={`${barlowCondensed.className} ${ethnocentric.variable} ${bebasNeue.variable} bg-zinc-900 text-zinc-50 min-h-screen`}
      >
        <EdgeStoreProvider>
          <Toaster
            position="top-center"
            reverseOrder={true}
            gutter={16}
            toastOptions={{
              duration: 5000,
              style: {
                fontWeight: "500",
                background: "#27272a",
                color: "#fafafa",
              },
            }}
          />
          {children}
        </EdgeStoreProvider>
      </body>
    </html>
  );
}
