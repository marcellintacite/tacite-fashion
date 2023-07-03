import Footer from "@/components/Footer";
import Reduction from "@/components/Reducton";

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
