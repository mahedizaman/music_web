import NextContentTab from './components/global compo/NextContentTap'
import SmoothScroll from './components/global compo/SmoothScroll'
import { AudioProvider } from "./context/AudioContext";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700", "900"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Nord Deutscher Figural Chor",
  description: "The benchmark since 1981",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable} font-sans`}>
        <NextContentTab />
        <AudioProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </AudioProvider>
      </body>
    </html>
  );
}
