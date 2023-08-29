/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        dropShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
        dropShadowHover: "0px 4px 4px rgba(0, 0, 0, 0.5)",
        innerShadow: "inset 4px 4px 4px rgba(0, 0, 0, 0.25)",
        innerShadowHover: "inset 0px 4px 4px rgba(0, 0, 0, 0.5)",
      },
      colors: {
        primary: "#6001d3",
        secondary: "#fd346e",
        tertiary: "#fcdc00",
        heading: "#081420",
        description: "#70798b",
      },
      width: {
        "90%": "90%",
      },
    },
  },
  plugins: [],
};
