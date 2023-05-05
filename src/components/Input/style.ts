"use client";

import styled from "@emotion/styled";

export const Label = styled.label`
  display: block;
  margin-bottom: ${(p) => p.theme.spacer.xxs};
  margin-left: calc(${(p) => p.theme.spacer.xs} + 1px);
  font-size: 1.4rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: ${(p) => `${p.theme.spacer.xxs} ${p.theme.spacer.xs}`};

  font-size: 1.4rem;
  color: ${(p) => p.theme.text.muted};

  border: 1px solid ${(p) => p.theme.colors.primary.main};
  border-radius: 0.5rem;
  outline-color: ${(p) => p.theme.colors.primary.light};
`;

export const Wrapper = styled.div`
  cursor: pointer;

  display: block;

  width: 100%;

  font-weight: 600;
  color: ${(p) => p.theme.text.muted};
`;
