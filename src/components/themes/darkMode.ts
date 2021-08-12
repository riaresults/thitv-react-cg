import { colors, sizes, zIndex } from "./base";

export const darkMode = {
  colors: {
    button: {
      background: colors.green50,
      text: colors.white100,
      shadow: colors.green75,
      disabled: colors.green25,
      hoverBackground: colors.green75,
    },
    card: {
      background: colors.gray50,
    },
    dropdown: {
      text: colors.white100,
      background: colors.green50,
      hoverBackground: colors.green75,
      itemColor: colors.gray50,
      itemBackground: colors.gray15,
      itemBorder: colors.gray25,
      itemHoverBackground: colors.gray25,
      listItemBorder: colors.gray25,
    },
    container: {
      background: colors.black75,
    },
    title: {
      text: colors.white100,
    },
    subtitle: {
      text: colors.white100,
    },
    description: {
      text: colors.white100,
    },
    modal: {
      background: colors.gray50,
      headerBackground: colors.gray25,
      headerText: colors.white100,
    },
    input: {
      border: colors.gray25,
      text: colors.white100,
      background: colors.black75,
      focusBorder: colors.gray15,
      focusText: colors.white100,
      placeholder: colors.gray15,
    },
  },
  sizes,
  zIndex,
};
