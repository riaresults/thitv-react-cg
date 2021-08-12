import { ReactNode } from "react";
import styled from "styled-components";

export interface IProps {
  children: ReactNode;
  className?: string;
}

const StyledTitle = styled.h3`
  font-size: ${(props) => props.theme.sizes.normal};
  color: ${(props) => props.theme.colors.title.text};
`;

export function Title({ children, className }: IProps) {
  return <StyledTitle className={className}>{children}</StyledTitle>;
}
