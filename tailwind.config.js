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
      user: "rgba(244, 116, 225, 1)",
      userTwo: " rgba(244, 116, 225, 0)",
      buttom:
        "linear-gradient(92.65deg, rgba(255, 255, 255, 0) -1.6%, #FFFFFF 57.12%, rgba(255, 255, 255, 0) 104.04%)",
      black: "#000",
      primary: "#0B1E3E",
      borders: "#33E9E9",
      secondary: "rgba(51, 233, 198, 0.15)",
      white: "#fff",
      pinkPoker: "#FE17FF80",
      pinkPokerBorder: "#FE17FF",
      borderUser: "#F474E1",
      bgUser: "#DBD1FC",
    },

    extend: {
      boxShadow: {
        "3xl": "0 0 50px  rgba(51, 233, 198, 0.3)",
        "4xl": "1px 2px 4px rgba(0, 0, 0, 0.91)",
      },
      dropShadow: {
        "4xl": "2px 0px 2px rgba(0, 0, 0, 0.25)",
        "5xl": "0 4px 4px rgba(0,0,0,0.25)",
        "6xl": "2px  3px rgba(0,0,0,0.81)",
      },
    },
  },
  plugins: [],
};
