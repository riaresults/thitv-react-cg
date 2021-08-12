import { ReactNode } from "react";
import styled from "styled-components";

export interface IProps {
  children: ReactNode;
  className?: string;
}

const StyledSubtitle = styled.h5`
  font-size: ${(props) => props.theme.sizes.small};
  color: ${(props) => props.theme.colors.subtitle.text};
`;

export function Subtitle({ children, className }: IProps) {
  return <StyledSubtitle className={className}>{children}</StyledSubtitle>;
}
