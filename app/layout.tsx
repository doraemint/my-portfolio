import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/ui/custom/header";
// import PageTransition from "@/components/ui/custom/transition/pageTransition";
// import StairTransition from "@/components/ui/custom/transition/stairTransition";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetBrainsMono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anthika Jirattananon",
  description: "My Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.className}`}>
        <Header />
        {children}
        {/* <StairTransition /> */}
        {/* <PageTransition>{children}</PageTransition> */}
      </body>
    </html>
  );
}
