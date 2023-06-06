import React, { ReactNode } from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import BackToTop from "@/components/back-to-top";
import { Icons } from "@/components/icons";

const config: DocsThemeConfig = {
  logo: (
    <span className="flex items-center justify-center gap-x-2">
      <Icons.logo className="h-10 w-10 shrink-0" />
      SecureSECO DAO Docs
    </span>
  ),
  project: {
    link: "https://github.com/orgs/SecureSECODAO/repositories",
  },
  chat: {
    link: "https://discord.com",
  },
  main: ({ children }) => {
    return (
      <div className="my-8">
        {children}
        <BackToTop />
      </div>
    );
  },
  docsRepositoryBase:
    "https://github.com/SecureSECODAO/dao-documentation/blob/main/",
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <Icons.logoFull className="w-32 h-fit shrink-0" />
        <p className="mt-6 text-xs">© {new Date().getFullYear()} SecureSECO.</p>
      </div>
    ),
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  useNextSeoProps() {
    return {
      twitter: {
        cardType: "summary_large_image",
      },
      titleTemplate: "%s – SecureSECO DAO Docs",
      defaultTitle: "SecureSECO DAO Docs",
    };
  },
  head: () => {
    const { frontMatter } = useConfig();
    return (
      <>
        <meta property="og:site_name" content="Secure SECO DAO documentation" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />

        <meta
          property="og:description"
          content={
            frontMatter.description || "Documentation for the SecureSECO DAO"
          }
        />
        <meta
          property="description"
          content={
            frontMatter.description || "Documentation for the SecureSECO DAO"
          }
        />
        <meta property="og:image" content={"/og-image.png"} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="mask-icon" href="/favicon.svg" color="#000000" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <meta name="theme-color" content="#274E85" />
      </>
    );
  },
};

export default config;
