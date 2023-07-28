"use client";

import { ThemeProvider } from "@emotion/react";
import Cache from "./Cache";
import theme from "@/styles/theme";

const EmotionProvider = ({ children }: { children: JSX.Element }) => (
  <Cache>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Cache>
);

export default EmotionProvider;
