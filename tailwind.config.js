module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3465A4",
          blue: "#3465A4",
          green: "#4E9A06",
          dark: "#0F172A",
        },
        gray: "#1F2937",
        font: {
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          DEFAULT: "#F1F5F9",
        },
      },
    },
  },
  plugins: [],
};
