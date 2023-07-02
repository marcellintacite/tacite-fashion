import { Inter } from "next/font/google";

export const metadata = {
  title: "Connexion - TFashion",
  description: "Connectez-vous chez TFashion pour rester clean",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
