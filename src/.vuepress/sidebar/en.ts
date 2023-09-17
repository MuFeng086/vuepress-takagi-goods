import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Showcase",
      icon: "box",
      prefix: "show/",
      link: "show/",
      children: [
        "abba-1",
        "abba-2",
        "abba-3",
        "Manga-End-commemoration-Cards",
      ],
    },
    {
      text: "Info/Contract",
      icon: "info",
      prefix: "about/",
      link: "about/",
      children: "structure",
    },
  ],
});
