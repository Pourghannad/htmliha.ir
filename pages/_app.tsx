import type { AppProps } from "next/app";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import { vazirFont } from "@/config/fonts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <Component {...pageProps} />
    </NextThemesProvider>
  );
}

export const fonts = {
  vazir: vazirFont.style.fontFamily,
};
