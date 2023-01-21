import React from "react";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./components/Logo";

const config: DocsThemeConfig = {
  logo: <Logo />,
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s – Learning Documentation of Charan Quartz",
      };
    }
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta name="robots" content="follow, index" />
        <link href="/c16.ico" rel="shortcut icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/c180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/c32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/c16.png"
        />

        <link rel="mask-icon" href="/safari-pinned-tab.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <meta property="og:url" content={`https://docs.charanquartz.vercel.app${asPath}`} /> 
        <meta
          property="og:title"
          content={frontMatter.title || "Learning Documentation of Charan Quartz"}
        />
        <meta
          property="og:description"
          content={frontMatter.description || "Learning Documentation of Charan Quartz"}
        />
      </>
    );
  },
  project: {
    link: "https://github.com/charanquartz",
  },
  chat: {
    link: "https://discord.gg/",
  },
  docsRepositoryBase: "https://github.com/charanquartz/docs/tree/main",
  footer: {
    text: "Learning Documentation of Charan Quartz",
  },
  i18n: [],
};

export default config;

/** credit: https://github.com/nabilfatih/nakafa-docs/blob/main/theme.config.tsx **/
import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Charan Quartz's Docs</span>,
  project: {
    link: 'https://github.com/charanquartz',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/charanquartz/docs/tree/main',
  footer: {
    text: 'Learning Documentation of Charan Quartz',
  },
}

export default config