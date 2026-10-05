import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nelly Santiesteban | Miami Mortgage Loan Officer | Work With Nelly",
  description: "Work with Nelly Santiesteban, a Miami mortgage loan officer helping homebuyers, homeowners and investors across Florida with conventional, FHA, VA, jumbo, DSCR, bank statement, ITIN, foreign national and other mortgage options.",
  verification: {
    google: "xVqP_jxmaqmZ-jng2pq1FNcJt7pzwnSB04yBAzkgg-Y"
  },
  icons: {
    icon: "/assets/nelly_mark.png"
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      <GoogleAnalytics gaId="G-XDDS4T5GZM" />
    </html>
  );
}
