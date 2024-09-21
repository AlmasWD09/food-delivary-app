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
      colors: {

        // background: "var(--background)",
        // foreground: "var(--foreground)",
        primary:'#d97706', // amber-600
        primaryGray:'#fffbeb', // amber-50
        secondary:'#fde68a', // amber-200
        secondaryGray:'#fef3c7' // amber-100
      },
    },
    fontFamily: {
      urbanist: ["Urbanist"],
      kanit: ["Kanit"],
    },
  },
  plugins: [require('daisyui'),],
};
