import React from "react";
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
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: <LogoFull className="w-32 h-fit shrink-0" />,
  },
};

export default config;
