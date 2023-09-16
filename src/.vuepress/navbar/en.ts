import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/show/",
  "/about/",
  {
    text: "链接",
    icon: "sitemap",
    children: [
      {
        text: "高木站点导航",
        link: "https://takagi3.cn", 
      },
      {
        text: "站长博客",
        link: "https://mufeng086.com",
      },
    ]
  },
]);
