import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Takagi Fan-Merch Showcase",
      description: "Show the goods created by Takagi fans",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "高木同学同人周边Go",
      description: "展示由民间制作的高木同学谷子",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
