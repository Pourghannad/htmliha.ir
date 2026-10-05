import { Head } from "./head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-dvh">
      <Head />
      <Header />
      <main className="flex-grow w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
