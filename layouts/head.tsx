import React from "react";
import NextHead from "next/head";

import { siteConfig } from "@/config/site";

export const Head = () => {
  return (
    <NextHead>
      <title>{siteConfig.name}</title>
      <meta key="title" content={siteConfig.name} property="og:title" />
      <meta content={siteConfig.description} property="og:description" />
      <meta content={siteConfig.description} name="description" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <link
        href="/favicon-96x96.png"
        rel="icon"
        sizes="96x96"
        type="image/png"
      />
      <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <link
        href="/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <meta content="Htmliha" name="apple-mobile-web-app-title" />
      <link href="/site.webmanifest" rel="manifest" />
    </NextHead>
  );
};
