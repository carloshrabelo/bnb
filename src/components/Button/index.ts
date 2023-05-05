"use client";

import { Theme } from "@emotion/react";
import styled from "@emotion/styled";

export type Colors = keyof Theme["colors"];

export const Button = styled.button<{ color?: Colors }>`
  cursor: pointer;

  height: 32px;
  padding: 4px 15px;

  color: #fff;
  text-align: center;

  background-color: ${(p) => p.theme.colors[p.color || "primary"].main};
  background-image: none;
  border: 1px solid transparent;
  border-radius: 6px;
  outline: none;

  transition: background-color ${(p) => p.theme.transition};

  &:hover {
    color: #fff;
    background-color: ${(p) => p.theme.colors[p.color || "primary"].dark};
  }
`;

export default Button;
