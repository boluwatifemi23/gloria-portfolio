/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./data/**/*.js"],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        navy: "rgb(var(--navy) / <alpha-value>)",
        teal: "rgb(var(--teal) / <alpha-value>)",
        amber: "rgb(var(--amber) / <alpha-value>)",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "ui-sans-serif", "system-ui", "sans-serif"],
        body: ['"Public Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: { prose: "68ch" },
    },
  },
  plugins: [],
};
