const color = {
  light: {
    yellow: '#FFF2BD',
    purple: '#3C2959',
    blue: ''
  },
  dark: {
    yellow: '#FFF7CC',
    purple: '',
    blue: ''
  }
}
export default {
  mainUi: {
    background: {
      light: {
        primary: color.light.yellow,
        secondary: color.dark.yellow,
      },
      dark: {
        primary: color.light.purple,
        secondary: ""
      }
    },
    text: {
      light: {
        primary: color.light.purple,
        secondary: ""
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
  spacing: [],
  border: [],
  typography: {
    h1: {
      fontFace: "",
      weight: "",
      lineHeight: 0,
      size: [],
    },
    h2: {
      fontFace: "",
      weight: "",
      lineHeight: 0,
      size: [],
    },
    h3: {
      fontFace: "",
      weight: "",
      lineHeight: 0,
      size: [],
    },
    paragraph: {
      fontFace: "",
      lineHeight: 0,
      variant: [
        {
          weight: "",
          size: [],
        },
        {
          weight: "",
          size: [],
        },
      ],
    },
    link: {
      fontFace: "",
      lineHeight: 0,
      variant: [
        {
          weight: "",
          size: [],
        },
        {
          weight: "",
          size: [],
        },
      ],
    }
  }
}