import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/show/",
  "/about/",
  {
    text: "Links",
    icon: "sitemap",
    children: [
      {
        text: "Takagi-Sitemap",
        link: "https://takagi3.cn", 
      },
      {
        text: "Blog",
        link: "https://mufeng086.com",
      },
    ]
  },
]);
