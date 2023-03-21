"use client";

import { Global, ThemeProvider } from "@emotion/react";
import Cache from "./Cache";
import { style } from "@/styles/global";
import theme from "@/styles/theme";

const EmotionProvider = ({ children }: { children: JSX.Element }) => (
  <Cache>
    <Global styles={style} />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Cache>
);

export default EmotionProvider;
