export type Author = {
  name: string;
  display_name: string;
  avatar: string;
  email: string;
  gravatar?: string;
  web?: string;
  twitter?: string;
  description?: string;
};

export const AUTHORS: Record<string, Author> = {
  pkadu: {
    name: "Parag Kadu",
    display_name: "Parag Kadu",
    avatar: "/blogging/assets/images/avatar/pkadu-avatar.png",
    email: "pkadu@omnissa.com",
  },
  samarp: {
    name: "Samar Prakash",
    display_name: "Samar Prakash",
    avatar: "/blogging/assets/images/avatar/samarp-avatar.png",
    email: "samarp@omnissa.com",
  },
  ashroti: {
    name: "Aditya Shrotri",
    display_name: "Aditya Shrotri",
    avatar: "/blogging/assets/images/avatar/ashroti-avatar.png",
    email: "ashrotri@omnissa.com",
  },
  jbedient: {
    name: "Jason Bedient",
    display_name: "Jason Bedient",
    avatar: "/blogging/assets/images/avatar/jbedient-avatar.png",
    email: "jbedient@omnissa.com",
  },
  parrellad: {
    name: "Dan Parrella",
    display_name: "Dan Parrella",
    avatar: "/blogging/assets/images/avatar/parrellad-avatar.png",
    email: "parrellad@omnissa.com",
  },
  john: {
    name: "John",
    display_name: "John",
    avatar: "/blogging/assets/images/avatar.png",
    gravatar: "b1cc14991db7a456fcd761680bbc8f81",
    email: "wowthemesnet@gmail.com",
    web: "https://www.wowthemes.net",
    twitter: "https://twitter.com/wowthemesnet",
    description:
      "This is the author box. Write a short description of the author here. You are currently previewing Mediumish demo, a Jekyll template compatible with Github pages.",
  },
};
