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
  ],
  restaurant: [
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
      title: "Payments",
      link: "payments",
      icons: <Icon icon="la:money-bill-wave" />,
    },
  ],
  rider: [
    {
      title: "Overview",
      link: "overview",
      icons: <Icon icon="material-symbols:dashboard" />,
    },
    {
      title: "Active Deliveries",
      link: "active-deliveries",
      icons: <Icon icon="solar:delivery-bold" />,
    },
    {
      title: "Order History",
      link: "order-history",
      icons: <Icon icon="material-symbols:history" />,
    },

    {
      title: "Earnings",
      link: "earnings",
      icons: <Icon icon="healthicons:money-bag-outline" />,
    },
  ],
};
export default navLinks;
