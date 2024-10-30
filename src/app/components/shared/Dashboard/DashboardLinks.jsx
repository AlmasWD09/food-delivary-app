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
      title: "Dashboard",
      link: "dashboard",
      icons: <Icon icon="material-symbols:dashboard" />,
    },
    {
      title: "Current Deliveries",
      link: "current-deliveries",
      icons: <Icon icon="material-symbols:delivery-dining" />,
    },
    {
      title: "Order History",
      link: "order-history",
      icons: <Icon icon="material-symbols:history" />,
    },
    {
      title: "Profile",
      link: "profile",
      icons: <Icon icon="material-symbols:person" />,
    },
    {
      title: "Notifications",
      link: "notifications",
      icons: <Icon icon="material-symbols:notifications" />,
    },
    {
      title: "Earnings",
      link: "earnings",
      icons: <Icon icon="material-symbols:monetization-on" />,
    },
    {
      title: "Help & Support",
      link: "help",
      icons: <Icon icon="material-symbols:help" />,
    },
    {
      title: "Logout",
      link: "logout",
      icons: <Icon icon="material-symbols:logout" />,
    },
  ],
};
export default navLinks;
