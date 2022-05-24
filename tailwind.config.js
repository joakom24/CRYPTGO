module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderWidth: {
      1: "1px",
      2: "2px",
    },
    borderRadius: {
      large: "53px",
      full: "9999px",
      rounded: "0.25rem",
      sm: "10px",
    },
    colors: {
      buttom:
        "linear-gradient(92.65deg, rgba(255, 255, 255, 0) -1.6%, rgba(255, 255, 255, 1) 57.12%, rgba(255, 255, 255, 0) 104.04%)",
      black: "#000",
      primary: "#0B1E3E",
      secondary: "rgba(51, 233, 198, 0.15)",
      white: "#fff",
      backgroundPoker: "rgba(51, 233, 198, 0.132);",
      pinkPoker: "#FE17FF80",
      pinkPokerBorder: "#FE17FF",
    },

    extend: {
      boxShadow: {
        "3xl": "0 0 50px  rgba(51, 233, 198, 0.132)",
        "4xl": "1px 2px 4px rgba(0, 0, 0, 0.91)",
      },
      dropShadow: {
        "5xl": "0 4px 4px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};
