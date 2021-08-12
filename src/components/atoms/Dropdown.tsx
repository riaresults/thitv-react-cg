import { useState, useRef, useEffect } from "react";

import { ChevronDown16, ChevronUp16 } from "@carbon/icons-react";
import styled from "styled-components";
import { IDropdownItem } from "../../@types/types";

export interface IProps {
  value?: string;
  items: IDropdownItem[];
  onChange(value: string): void;
}

interface IDropdownList {
  visible: boolean;
}

const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const DropdownLabel = styled.div`
  user-select: none;
  background-color: ${(props) => props.theme.colors.dropdown.background};
  color: ${(props) => props.theme.colors.dropdown.text};
  font-size: ${(props) => props.theme.sizes.small};
  cursor: pointer;
  border-radius: 4px;

  svg {
    pointer-events: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.dropdown.hoverBackground};
    color: ${(props) => props.theme.colors.dropdown.text};
  }
`;

const DropdownList = styled.ul<IDropdownList>`
  display: ${(props) => (props.visible ? "block" : "none")};
  border: 1px solid ${(props) => props.theme.colors.dropdown.listItemBorder};
  position: absolute;
  top: 35px;
  left: 0;
  z-index: 100;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
`;

const DropdownItem = styled.li`
  border-bottom: 1px solid ${(props) => props.theme.colors.dropdown.itemBorder};
  width: 100%;
  background-color: ${(props) => props.theme.colors.dropdown.itemBackground};
  color: ${(props) => props.theme.colors.dropdown.itemColor};
  cursor: pointer;
  font-size: ${(props) => props.theme.sizes.small};

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.dropdown.itemHoverBackground};
  }
`;

export function Dropdown({ value, items, onChange }: IProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  function bindClickEvent(ev: MouseEvent): any {
    const target = ev.target;
    if (
      target !== dropdownRef.current &&
      !dropdownRef.current?.contains(target as Node)
    ) {
      setShowDropdown(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", bindClickEvent);
    return () => {
      document.removeEventListener("click", bindClickEvent);
    };
  }, []);

  const currentItem = !!value
    ? items.find((item: IDropdownItem) => item.value === value)
    : null;

  return (
    <DropdownWrapper ref={dropdownRef}>
      <DropdownLabel
        className="py-2 px-3 d-flex align-items-center justify-content-between"
        onClick={toggleDropdown}
      >
        <span>{currentItem ? currentItem.label : "Not selected"}</span>
        {showDropdown ? <ChevronUp16 /> : <ChevronDown16 />}
      </DropdownLabel>
      <DropdownList visible={showDropdown}>
        {items.map((item: IDropdownItem, index: number) => (
          <DropdownItem
            key={`${item.value}-${index}`}
            onClick={() => {
              setShowDropdown(false);
              onChange(item.value);
            }}
            className="py-2 px-3"
          >
            {item.label}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownWrapper>
  );
}
