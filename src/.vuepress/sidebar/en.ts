import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "商品展示",
      icon: "box",
      prefix: "show/",
      link: "show/",
      children: [
        "abba-1",
        "abba-2",
        "abba-3",
      ],
    },
    {
      text: "关于",
      icon: "info",
      prefix: "about/",
      link: "about/",
      children: "structure",
    },
  ],
});
