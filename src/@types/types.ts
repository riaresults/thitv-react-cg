import { ReactNode } from "react";

export enum Theme {
  DARK_MODE = "dark-mode",
  LIGHT_MODE = "light-mode",
}

export enum View {
  LIST = "list",
  CARD = "card",
}

export enum Storage {
  THEME = "book-store-theme",
}

export enum BookActions {
  BOOKS_REQUEST = "books-request",
  BOOKS_SUCCESS = "books-success",
  BOOKS_FAIL = "books-fail",
  BOOKS_FILTER = "books-filter",
}

export type BookActionsType =
  | BookActions.BOOKS_FILTER
  | BookActions.BOOKS_FAIL
  | BookActions.BOOKS_REQUEST
  | BookActions.BOOKS_SUCCESS;

export interface IBook {
  title: string;
  isbn: string;
  thumbnailURL: string;
  shortDescription: string;
  longDescription: string;
  authors: string[];
  categories: string[];
}

export interface IBookResponseItem {
  title: string;
  isbn: string;
  thumbnailURL: string;
  shortDescription: string;
  longDescription: string;
  status: string;
  authors: string[];
  categories: string[];
  pageCount: number;
  publishDate: string;
}

export interface IBookStore {
  loading: boolean;
  error: Error | null;
  data: IBook[] | null;
  filteredData: IBook[] | null;
}

export interface IBookPayload {
  error?: Error | null;
  data?: IBookResponseItem[] | null;
  searchValue?: string;
}

export interface IBookActions {
  type: BookActionsType;
  payload?: IBookPayload;
}

export interface IBookResponse {
  books: IBookResponseItem[];
  count: number;
}

export interface IDropdownItem {
  label: string | ReactNode;
  value: string;
}
