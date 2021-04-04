const colors = {
  light: {
    yellow: '#F3CF77',
    lightYellow: '#F6E8CA',
    purple: '#B692C0', // #3C2959
    blue: '#C1DEDC',
    brown: '#512919',
    lightBrown: '#64463A',
    white: '#F9F9F9',
    red: '#ff7675',
  },
  dark: {
    yellow: '#FFD879',
    purple: '#BB7BAE',
    blue: '#21A4B5',
    brown: '#7F5045',
    green: '#98BA52',
    white: '#EFEFEF',
    red: '#d63031',
  },
};

const light = {
  background: {
    primary: colors.light.white,
    secondary: colors.dark.yellow,
    tertiary: colors.light.brown,
  },
  text: {
    primary: colors.light.brown,
    secondary: colors.light.purple,
    tertiary: colors.light.yellow,
  },
};

const dark = {
  background: {
    primary: colors.light.purple,
    secondary: colors.dark.blue,
    tertiary: colors.light.brown,
  },
  text: {
    primary: colors.dark.white,
    secondary: colors.light.lightYellow,
    tertiary: colors.light.yellow,
  },
};

export const defaultTheme = {
  spacing: [8, 16, 32, 45, 64],
  border: [6, 8, 12, 16],
  weight: {
    light: 300,
    semiLight: 400,
    regular: 600,
    bold: 700,
    extraBold: 900,
  },
  actions: {
    error: colors.dark.red,
    warning: colors.dark.purple,
    success: colors.dark.green,
    info: colors.dark.blue,
    disabled: '',
  },
  breakpoints: {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1200,
  },
};

const typography = {
  h1: {
    fontFamily: '',
    fontWeight: '',
    lineHeight: 'normal',
    size: [90, 64, 48, 32, 28, 24],
  },
  h2: {
    fontFamily: '',
    fontWeight: '',
    lineHeight: 'normal',
    size: [48, 32, 28, 24],
  },
  h3: {
    fontFamily: '',
    fontWeight: '',
    lineHeight: 'normal',
    size: [20, 18],
  },
  paragraph: {
    fontFamily: '',
    fontWeight: defaultTheme.weight.light,
    lineHeight: 1.8,
    size: [16, 14],
  },
  link: {
    fontFamily: '',
    fontWeight: defaultTheme.weight.bold,
    lineHeight: 'normal',
    size: [16, 14],
  },
  inputText: {
    fontFamily: '',
    fontWeight: defaultTheme.weight.regular,
    lineHeight: 'normal',
    size: [16, 14],
  },
  label: {
    fontFamily: '',
    fontWeight: defaultTheme.weight.regular,
    lineHeight: 'normal',
    size: [18],
  },
  buttonText: {
    fontFamily: '',
    fontWeight: defaultTheme.weight.extraBold,
    lineHeight: 'normal',
    size: [16, 14],
  },
  errorFormText: {
    fontFamily: '',
    fontWeight: defaultTheme.weight.regular,
    lineHeight: 'normal',
    size: [11],
  },
};

export const lightTheme = {
  ...defaultTheme,
  typography,
  ...light,
};

export const darkTheme = {
  ...defaultTheme,
  typography,
  ...dark,
};
