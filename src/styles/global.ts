import { css } from "@emotion/react";

export const style = css`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    font-size: 10px;
  }

  body {
    color: #000;
    background: linear-gradient(to bottom, transparent, #fff) #d6dbdc;
  }
`;
