import { ReactNode } from "react";
import { Close20 } from "@carbon/icons-react";
import styled from "styled-components";

export interface IProps {
  title: string | undefined;
  submitText?: string | ReactNode;
  cancelText?: string | ReactNode;
  onSubmit?(): void;
  onCancel?(): void;
  children: ReactNode;
  isVisible: boolean;
}

interface IModalWapper {
  visible: boolean;
}

const ModalWrapper = styled.div<IModalWapper>`
  display: ${(props) => (props.visible ? "flex" : "none")};
  position: fixed;
  width: 100%;
  min-height: 100%;
  overflow-y: auto;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${(props) => props.theme.zIndex.modal};
`;

const ModalContainer = styled.div`
  background-color: ${(props) => props.theme.colors.modal.background};
  width: 60%;
`;

const ModalHeader = styled.div`
  background-color: ${(props) => props.theme.colors.modal.headerBackground};
  color: ${(props) => props.theme.colors.modal.headerText};
  font-size: ${(props) => props.theme.sizes.normal};
`;

const CloseButton = styled.div`
  display: inline-block;
  cursor: pointer;
`;

export function Modal({ title, isVisible, onCancel, children }: IProps) {
  return (
    <ModalWrapper
      role="dialog"
      className="align-items-center justify-content-center"
      visible={isVisible}
    >
      <ModalContainer>
        <ModalHeader className="p-3 d-flex align-items-center justify-content-between">
          {title}
          <CloseButton onClick={onCancel}>
            <Close20 />
          </CloseButton>
        </ModalHeader>
        <div className="p-3">{children}</div>
      </ModalContainer>
    </ModalWrapper>
  );
}
