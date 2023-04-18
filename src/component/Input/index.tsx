import { InputHTMLAttributes } from "react";
import * as S from "./style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ className, label, ...props }: Props) => (
  <S.Wrapper className={className}>
    {label && <S.Label>{label}</S.Label>}
    <S.Input type="text" {...props} />
  </S.Wrapper>
);

export default Input;
