const colors = {
  light: {
    yellow: '#F3CF77',
    lightYellow: '#F6E8CA',
    purple: '#B692C0',  // #3C2959
    blue: '#C1DEDC',
    brown: '#64463A',
    lightBrown: '#512919',
    white: '#EFEFEF',
  },
  dark: {
    yellow: '#FFD879',
    purple: '#BB7BAE',
    blue: '#21A4B5',
    brown: '#7F5045',
    green: '#98BA52',
  }
}
export default {
  mainUi: {
    background: {
      light: {
        primary: colors.light.white,
        secondary: colors.dark.yellow,
      },
      dark: {
        primary: colors.light.purple,
        secondary: ""
      }
    },
    text: {
      light: {
        primary: colors.light.lightBrown,
        secondary: colors.light.purple,
      },
      dark: {
        primary: "",
        secondary: ""
      }
    }
  },
  actions: {
    error: "",
    warning: "",
    success: "",
    info: "",
    disabled: "",
  },
  spacing: [8, 16, 32, 45],
  border: [6, 8, 12, 16],
  weight: {
    light: 300,
    semiLight: 400,
    regular: 600,
    bold: 700,
  },
  typography: {
    h1: {
      fontFamily: "",
      weight: "",
      lineHeight: 0,
      size: [90, 64, 48, 32, 28, 24],
    },
    h2: {
      fontFamily: "",
      weight: "",
      lineHeight: 0,
      size: [48, 32, 28, 24],
    },
    h3: {
      fontFamily: "",
      weight: "",
      lineHeight: 0,
      size: [20, 18],
    },
    paragraph: {
      fontFamily: "",
      lineHeight: 0,
      size: [16, 14],
    },
    link: {
      fontFamily: "",
      lineHeight: 0,
      size: [16, 14],
    }
  }
}