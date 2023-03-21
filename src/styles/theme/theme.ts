import colors from "./colors";
import { Theme } from "./interface";

export const theme: Theme = {
  colors,
  text: {
    main: "rgba(0, 0, 0, 0.87)",
    muted: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)",
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: { paper: "#fff", default: "#fff" },
  transition: "0.3s ease-in-out",
  spacer: {
    xxs: "0.4rem",
    xs: "0.8rem",
    sm: "1.6rem",
    m: "2.4rem",
    md: "3.2rem",
    lg: "4.8rem",
    xlg: "6.4rem",
  },
};

export default theme;
