import { Icon } from "@iconify/react";

const navLinks = {
  admin: [
    {
      title: "Overview",
      link: "/admin/overview",
      icons: <Icon icon="charm:home" />,
    },
    {
      title: "Users",
      icons: <Icon icon="mdi:user" />,
    },
    {
      title: "Orders",
      icons: <Icon icon="lets-icons:order" />,
    },
    {
      title: "Restaurants",
      link: "/admin/restaurants/manage",
      icons: <Icon icon="material-symbols:restaurant" />,
    },
    {
      title: "Menu",
      link: "/admin/menu/manage",
      icons: <Icon icon="bx:food-menu" />,
    },

    {
      title: "Reports",
      link: "/admin/reports",
      icons: <Icon icon="iconoir:reports" />,
    },

    {
      title: "Support Inbox",
      link: "/admin/support",
      icons: <Icon icon="ic:outline-contact-support" />,
    },
  ],
};
export default navLinks;
