/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        primaryBlue: "#52B8B4",
        primaryBlack: "#3D3A3A",
        secondaryBlack: "#6C6C6C",
        secondaryBlue: "#67C0B3",
        purleShamu: "#828EC0",
        orkun: "#F9A829",
        icow: "#3CB0B0",
        umpay: "#F3C033",
        flash: "#36559C",
      },
      backgroundSize: {
        "size-200": "210% 210%",
      },
      width: {
        512: "32rem",
      },
      height: {
        352: "22rem",
      },
    },
  },
  plugins: [],
};
