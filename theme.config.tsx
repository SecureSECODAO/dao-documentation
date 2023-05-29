import React, { ReactNode } from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "@/components/Logo";
import LogoFull from "@/components/LogoFull";

const config: DocsThemeConfig = {
  logo: (
    <span className="flex items-center justify-center gap-x-2">
      <Logo className="h-10 w-10 shrink-0" />
      SecureSECO DAO Docs
    </span>
  ),
  project: {
    link: "https://github.com/orgs/SecureSECODAO/repositories",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/SecureSECODAO/dao-documentation",
  footer: {
    text: <LogoFull className="w-32 h-fit shrink-0" />,
  },
  sidebar: {
    toggleButton: true,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="mask-icon" href="/favicon.svg" color="#000000" />
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <meta name="theme-color" content="#274E85" />
    </>
  ),
};

export default config;
