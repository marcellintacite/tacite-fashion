import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/provider";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fashion - Ecommerce App",
  description: "A fashion ecommerce app built with Next.js and Redux Toolkit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <Providers>
        <body className={`${inter.className}`}>{children}</body>
      </Providers>
    </html>
  );
}
