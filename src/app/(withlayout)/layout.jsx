import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
