import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://joss.my/", // replace this with your deployed domain
  author: "Jose K James",
  profile: "https://x.com/joseK_James",
  desc: "Personal Blog of Jose K James",
  title: "Jose K James",
  ogImage: "me-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/cyberianzed/blog/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 30,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://joss.my",
    linkTitle: ` ${SITE.title} on Github`,
    active: false,
  },
  {
    name: "Facebook",
    href: "https://joss.my",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/josekjames",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },

  {
    name: "X",
    href: "https://x.com/joseK_James",
    linkTitle: `${SITE.title} on X`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/the.josekjames",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@decoding20swithjose",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "Mail",
    href: "josekjames5@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "bmc",
    href: "https://buymeacoffee.com/josekjames",
    linkTitle: `buy a coffee for ${SITE.title.split(" ")[0]}`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://joss.my",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },

  {
    name: "WhatsApp",
    href: "https://joss.my",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://joss.my",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://joss.my",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://joss.my",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://joss.my",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://joss.my",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://joss.my",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://joss.my",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://joss.my",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://joss.my",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://joss.my",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://joss.my",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
