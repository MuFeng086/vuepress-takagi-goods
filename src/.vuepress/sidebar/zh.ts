import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "商品展示",
      icon: "box",
      prefix: "show/",
      link: "show/",
      children: "structure",
    },
    {
      text: "关于/联络",
      icon: "info",
      prefix: "about/",
      children: "structure",
    },
  ],
});
