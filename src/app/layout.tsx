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
      <head>
        <meta
          name="description"
          content="Votre style , c'est notre préocupation. Achetez et recevez une livraison à domicile gratuite."
        />

        <meta property="og:url" content="https://tacitefashion.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Fashion - Ecommerce App" />
        <meta
          property="og:description"
          content="Votre style , c'est notre préocupation. Achetez et recevez une livraison à domicile gratuite."
        />
        <meta
          property="og:image"
          content="https://peacockplume.fr/sites/default/files/styles/photo_story/public/clarke-sanders-ybPJ47PMT_M-unsplash-min.jpg?itok=35A7ffKo"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tacitefashion.vercel.app" />
        <meta
          property="twitter:url"
          content="https://tacitefashion.vercel.app/"
        />
        <meta name="twitter:title" content="Fashion - Ecommerce App" />
        <meta
          name="twitter:description"
          content="Votre style , c'est notre préocupation. Achetez et recevez une livraison à domicile gratuite."
        />
        <meta
          name="twitter:image"
          content="https://peacockplume.fr/sites/default/files/styles/photo_story/public/clarke-sanders-ybPJ47PMT_M-unsplash-min.jpg?itok=35A7ffKo"
        />
      </head>
      <Providers>
        <body className={`${inter.className}`}>{children}</body>
      </Providers>
    </html>
  );
}
