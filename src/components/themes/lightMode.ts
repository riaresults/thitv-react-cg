import { colors, sizes, zIndex } from "./base";

export const lightMode = {
  colors: {
    button: {
      background: colors.green50,
      text: colors.white100,
      shadow: colors.green75,
      disabled: colors.green25,
      hoverBackground: colors.green75,
    },
    card: {
      background: colors.gray15,
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
      background: colors.white100,
    },
    title: {
      text: colors.black75,
    },
    subtitle: {
      text: colors.black75,
    },
    description: {
      text: colors.black75,
    },
    modal: {
      background: colors.gray15,
      headerBackground: colors.gray25,
      headerText: colors.white100,
    },
    input: {
      border: colors.gray15,
      text: colors.gray50,
      background: colors.white100,
      focusBorder: colors.gray25,
      focusText: colors.gray50,
      placeholder: colors.gray15,
    },
  },
  sizes,
  zIndex,
};
