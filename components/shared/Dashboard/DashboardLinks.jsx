import { Icon } from "@iconify/react";

const navLinks = {
  admin: [
    {
      title: "Overview",
      link: "overview",
      icons: <Icon icon="charm:home" />,
    },
    {
      title: "Users",
      link: "users",
      icons: <Icon icon="mdi:user" />,
    },
    {
      title: "Reports",
      link: "reports",
      icons: <Icon icon="iconoir:reports" />,
    },
    {
      title: "Manage Restaurants",
      link: "manage-restaurants",
      icons: <Icon icon="mdi:shop-outline" />,
    },
    {
      title: "Manage Riders",
      link: "manage-riders",
      icons: <Icon icon="mdi:bike" />,
    },

    {
      title: "New Listing",
      link: "new-listings",
      icons: <Icon icon="mdi:shop-plus" />,
    },

    {
      title: "Listing Requests",
      link: "listing-requests",
      icons: <Icon icon="hugeicons:message-user-01" />,
    },

    {
      title: "Support Inbox",
      link: "support-inbox",
      icons: <Icon icon="ic:outline-contact-support" />,
    },
  ],
  restaurants: [
    {
      title: "Overview",
      link: "overview",
      icons: <Icon icon="material-symbols:dashboard" />,
    },
    {
      title: "Orders",
      link: "orders",
      icons: <Icon icon="material-symbols:orders" />,
    },
    {
      title: "Menu",
      link: "menu",
      icons: <Icon icon="hugeicons:menu-restaurant" />,
    },
    {
      title: "Reviews",
      link: "reviews",
      icons: <Icon icon="carbon:review" />,
    },
    {
      title: "Payments",
      link: "payments",
      icons: <Icon icon="la:money-bill-wave" />,
    },
  ],
};
export default navLinks;
