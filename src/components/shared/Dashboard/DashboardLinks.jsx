import { Icon } from "@iconify/react";

const navLinks = {
  admin: [
    {
      title: "Overview",
      link: "admin-overview",
      icons: <Icon icon="charm:home" />,
    },
    {
      title: "Users",
      link: "users",
      icons: <Icon icon="mdi:user" />,
    },
    {
      title: "Reports",
      link: "admin/reports",
      icons: <Icon icon="iconoir:reports" />,
    },
    {
      title: "All Restaurants",
      link: "restaurants",
      icons: <Icon icon="solar:shop-linear" />,
    },

    {
      title: "New Listing",
      link: "orders",
      icons: <Icon icon="mdi:shop-plus" />,
    },

    {
      title: "Listing Requests",
      link: "admin/reports",
      icons: <Icon icon="hugeicons:message-user-01" />,
    },

    {
      title: "Support Inbox",
      link: "admin/support",
      icons: <Icon icon="ic:outline-contact-support" />,
    },
  ],
  restaurants: [
    {
      title: "Overview",
      link: "overview",
      icons: <Icon icon="charm:home" />,
    },
    {
      title: "Orders",
      link: "orders",
      icons: <Icon icon="material-symbols:orders" />,
    },
    {
      title: "Menu",
      link: "admin-overview",
      icons: <Icon icon="hugeicons:menu-restaurant" />,
    },
    {
      title: "Reviews",
      link: "admin-overview",
      icons: <Icon icon="carbon:review" />,
    },
    {
      title: "Payments",
      link: "admin-overview",
      icons: <Icon icon="la:money-bill-wave" />,
    },
  ],
};
export default navLinks;
