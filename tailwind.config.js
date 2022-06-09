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
      pot: "0px 20px 20px 0",
      pot2: "20px 0px 0px 20px",
      large: "53px",
      full: "9999px",
      rounded: "0.25rem",
      sm: "10px",
    },
    colors: {
      whiteCustom: "rgba(255, 255, 255, 0)",
      user: "rgba(244, 116, 225, 1)",
      pot: "#FFAB2D",
      pot4: "#FFD700",
      pot3: "rgb(234 179 8)",
      userTwo: " rgba(244, 116, 225, 0)",
      userThree: "rgba(0, 168, 168, 1)",
      userFour: "rgba(0, 168, 168, 0)",
      userFive: "rgba(177, 255, 247, 1)",
      userSix: "rgba(177, 255, 247, 0)",
      userSeven: "rgba(27, 0, 28, 1)",
      userEight: "rgba(143, 255, 241, 1)",
      userPoker: "#BDBDBD",
      userPoker2: "#8FFFF1",
      buttom:
        "linear-gradient(92.65deg, rgba(255, 255, 255, 0) -1.6%, #FFFFFF 57.12%, rgba(255, 255, 255, 0) 104.04%)",
      black: "#000",
      primary: "#0B1E3E",
      ultimate: "rgba(51, 233, 198, 0.132)",
      borders: "#33E9E9",
      secondary: "rgba(51, 233, 198, 0.15)",
      white: "#fff",
      pinkPoker: "#FE17FF80",
      pinkPokerBorder: "#FE17FF",
      borderUser: "#F474E1",
      borderUser2: "#00A8A8",
      borderUser3: "rgba(177, 255, 247, 1)",
      bgUser: "#DBD1FC",
    },

    extend: {
      padding: {
        0.2: "1px",
      },
      width: {
        1024: "70vw",
        1025: "83vw",
      },
      height: {
        1024: "calc( 70vw / 16 * 9 )",
        1025: "calc( 78vw / 16 * 9)",
      },
      boxShadow: {
        "3xl": "0 0 50px  rgba(51, 233, 198, 0.3)",
        "4xl": "1px 2px 4px rgba(0, 0, 0, 0.91)",
        "8xl": "1px 2px 4px rgba(0, 0, 0, 0.91)",
        "7xl": "2px 0px 5px #000000",
      },
      dropShadow: {
        "1xl": "0 2px 2px rgba(0,0,0,0.55)",
        "4xl": "2px 0px 2px rgba(0, 0, 0, 0.25)",
        "5xl": "0 4px 4px rgba(0,0,0,0.25)",
        "6xl": "2px  3px rgba(0,0,0,0.81)",
      },
    },
  },
  plugins: [],
};
