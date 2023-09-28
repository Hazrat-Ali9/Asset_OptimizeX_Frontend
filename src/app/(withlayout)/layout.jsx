import Navbar from "@/components/ui/Navbar";


export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
