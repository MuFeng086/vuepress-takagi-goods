import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  head: [
    // ...
  
    ['script', { async: true, src: 'https://analytics.takagi3.top/script.js', 'data-website-id': 'b2291971-225e-4ccf-80a9-e8372d19b145' }],
    ].
  
  locales: {
    "/": {
      lang: "zh-CN",
      title: "高木同学同人周边Go",
      description: "展示由民间制作的高木同学谷子",
    },
    "/en/": {
      lang: "en-US",
      title: "Takagi Fan-Merch Showcase",
      description: "Show the goods created by Takagi fans",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
