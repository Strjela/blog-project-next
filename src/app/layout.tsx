import type { Metadata } from "next";
import { Inter, Jost, Sedgwick_Ave_Display } from "next/font/google";

import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Providers from "./Providers";
import { ViewTransitions } from "next-view-transitions";
import SplashScreenManager from "./components/splashScreen/SplashScreenManager";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sedgwick = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sedgwick",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "SkyAdventure",
  description: "SkyAdventure blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${inter.className} ${sedgwick.variable} ${jost.variable}  `}
        >
          <SplashScreenManager>
            <Providers>
              <Header />
              {children}
              <Footer />
            </Providers>
          </SplashScreenManager>
        </body>
      </html>
    </ViewTransitions>
  );
}
