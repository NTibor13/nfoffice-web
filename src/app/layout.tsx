import "./globals.css";
import type { Metadata } from "next";
import { Fraunces, Poppins } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "600"], // light, regular, semi-bold
  variable: "--font-fraunces",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"], // light -> semi-bold
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "NF Office Kft.",
  description: "NF OFFICE  hivatalos weboldala.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${fraunces.variable} ${poppins.variable}`}>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
