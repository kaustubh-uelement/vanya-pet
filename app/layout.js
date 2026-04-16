import { Poppins, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RevealObserver from "@/components/ui/RevealObserver";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Vanya Pet — Your Pet's World. Just a Tap Away.",
    template: "%s — Vanya Pet",
  },
  description:
    "India's most complete pet technology ecosystem. From vet visits to grooming, boarding, adoption, and more — discover trusted pet care services near you, anytime, anywhere.",
  keywords: [
    "pet care",
    "pet services",
    "pet app",
    "India",
    "dog grooming",
    "pet boarding",
    "vanya pet",
  ],
  authors: [{ name: "UElement Studios", url: "https://uelement.studio" }],
  openGraph: {
    title: "Vanya Pet — Your Pet's World. Just a Tap Away.",
    description: "India's most complete pet technology ecosystem.",
    url: "https://vanya.org.in",
    siteName: "Vanya Pet",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanya Pet — Your Pet's World. Just a Tap Away.",
    description: "India's most complete pet technology ecosystem.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${ibmPlexSans.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
