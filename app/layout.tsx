import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Footer from "./components/Footer";
import { MoarNavbar } from "./components/Navbar";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MOAR",
  description: "Meme coin on BNB chain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <MoarNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
