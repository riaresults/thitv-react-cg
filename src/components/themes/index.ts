import { Theme } from "../../@types/types";
import { darkMode } from "./darkMode";
import { lightMode } from "./lightMode";

export const themes = {
  [Theme.DARK_MODE]: darkMode,
  [Theme.LIGHT_MODE]: lightMode,
};
