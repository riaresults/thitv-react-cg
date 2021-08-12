import { ReactNode } from "react";
import styled from "styled-components";

export interface IProps {
  children: ReactNode;
  className?: string;
}

const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.colors.container.background};
  min-height: 100%;
`;

export function Container({ children, className }: IProps) {
  return (
    <StyledContainer className={`container-fluid ${className}`}>
      {children}
    </StyledContainer>
  );
}
