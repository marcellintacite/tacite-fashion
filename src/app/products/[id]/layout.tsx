import Footer from "@/components/Footer";
import Reduction from "@/components/Reducton";

export const metadata = {
  title: "Produit - TFashion",
  description: "Connectez-vous chez TFashion pour rester clean",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Reduction />
      <Footer />
    </>
  );
}
