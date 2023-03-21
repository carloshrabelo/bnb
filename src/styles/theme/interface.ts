interface Color {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}

export interface Colors {
  primary: Color;
  secondary: Color;
  error: Color;
  warning: Color;
  info: Color;
  success: Color;
}

export interface Theme {
  colors: Colors;
  text: {
    main: string;
    muted: string;
    disabled: string;
  };
  divider: string;
  background: { paper: string; default: string };
  transition: string;
  spacer: {
    xxs: string;
    xs: string;
    sm: string;
    m: string;
    md: string;
    lg: string;
    xlg: string;
  };
}

export default Theme;
