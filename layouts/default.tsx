import { Head } from "./head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative max-w-[780px] m-auto flex flex-col h-screen">
      <Head />
      <Header />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
