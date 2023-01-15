/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      lx: "1440px",
    },
    extend: {
      colors: {
        brand: "#6366F1",
        dark: "#1E293B",
        mid: "#929AAB",
        light: "#FFFFFF",
        brandHover: "#4d4fef",
        searchHover: "#3d40f0",
        overlay: "#999999",
        cardColor: "#121212",
        darkBlue: "hsl(228, 39%, 23%)",
        // background: "#e1e1e1",
        background: "#F7FBFC",
        background2: "#DFDFDE",
        cc: "#6366f1",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      backgroundImage: {
        "desktop-pattern": "url('/images/desk-pattern.svg')",
      },
    },
  },
  plugins: [],
};
