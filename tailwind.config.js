/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        primary:'#d97706', // amber-600
        primaryGray:'#fffbeb', // amber-50
        secondary:'#fde68a', // amber-200
        secondaryGray:'#fef3c7' // amber-100
      },
    },
  },
  plugins: [],
};
