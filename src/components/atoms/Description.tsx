import { ReactNode } from "react";
import styled from "styled-components";

export interface IProps {
  children: ReactNode;
  className?: string;
}

const StyledDescription = styled.h5`
  font-size: ${(props) => props.theme.sizes.normal};
  color: ${(props) => props.theme.colors.description.text};
`;

export function Description({ children, className }: IProps) {
  return (
    <StyledDescription className={className}>{children}</StyledDescription>
  );
}
