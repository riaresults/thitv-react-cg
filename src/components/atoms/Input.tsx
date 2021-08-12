import { ChangeEvent } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 1px solid ${(props) => props.theme.colors.input.border};
  color: ${(props) => props.theme.colors.input.text};
  background-color: ${(props) => props.theme.colors.input.background};
  width: 100%;
  border-radius: 4px;
  &:focus {
    border-color: ${(props) => props.theme.colors.input.focusBorder};
    color: ${(props) => props.theme.colors.input.focusText};
    outline: none;
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.input.placeholder};
  }
`;

export interface IProps {
  name: string;
  value: string;
  placeholder?: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
  className?: string;
}

export function Input({
  name,
  value,
  onChange,
  placeholder,
  className,
}: IProps) {
  return (
    <StyledInput
      className={`px-3 py-2 ${className}`}
      name={name}
      value={value}
      type="text"
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
