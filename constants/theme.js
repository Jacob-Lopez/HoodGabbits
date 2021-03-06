const colors = {
    accent: "#FF5286",
    primary: "#FFB342",
    secondary: "#2BDA8E",
    tertiary: "#FFE358",
    black: "#212121",
    white: "#FFFFFF",
    gray: "#757575",
    gray2: "#F9F9F9",
  };
  
  const sizes = {
    // global sizes
    base: 16,
    font: 14,
    radius: 6,
    padding: 25,
    statusBarHeight: 24,
    titleBarHeight: 56,
  
    // font sizes
    h1: 26,
    h2: 20,
    h3: 18,
    title: 18,
    header: 16,
    body: 14,
    caption: 12,
  };
  
  const fonts = {
    h1: {
      fontSize: sizes.h1
    },
    h2: {
      fontSize: sizes.h2
    },
    h3: {
      fontSize: sizes.h3
    },
    header: {
      fontSize: sizes.header
    },
    title: {
      fontSize: sizes.title
    },
    body: {
      fontSize: sizes.body
    },
    caption: {
      fontSize: sizes.caption
    },
  };

  const effects = {
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,

      elevation: 10,
    },
  }
  
  export { colors, sizes, fonts, effects };