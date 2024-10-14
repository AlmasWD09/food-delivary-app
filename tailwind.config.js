/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "slow-spin": "spin 10s linear infinite",
        "slow-bounce": "bounce-x 4s  infinite",
      },

      keyframes: {
        "bounce-x": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
        },
      },
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        primaryLight: "#fd8802",
        // secondary: "#fde68a", // amber-200
        redish: "#ff0055", // dashboard
        globalText: "#9B9B93", // textcolor

        primary: "#FF9100", //orange
        primaryGray: "#f9ac7d",

        secondary: "#4681F4", // blue
        secondaryGray: "#bbebff", //

        secondaryBg: "#FFFBE6", //snehashisroy
        third: "#D5ED9F", //snehashisroy
        fourth: "#00712D", //snehashisroy
      },
    },
    fontFamily: {
      urbanist: ["Inter"],
      kanit: ["Kanit"],
      poppins: ["Poppins"],
      Inter: ["Inter"],
    },
  },
};
