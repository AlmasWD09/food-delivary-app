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
        primary: "#d97706", // amber-600
        primaryLight: "#fd8802",
        primaryGray: "#fffbeb", // amber-50
        secondary: "#fde68a", // amber-200
        secondaryGray: "#ffffff", // amber-100
        redish: "#ff0055", // redandpink
        text: "#9B9B93", // lightgray

        secondary: "#f4d321", //snehashisroy
        third: "#fefbe9", //snehashisroy
        fourth: "#1a1a1a", //snehashisroy
      },
    },
    fontFamily: {
      urbanist: ["Urbanist"],
      kanit: ["Kanit"],
      poppins: ["Poppins"],
      Manrope: ["Manrope"],
    },
  },
  plugins: [require("daisyui")],
};
