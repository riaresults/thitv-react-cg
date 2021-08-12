import {
  IBookStore,
  IBookActions,
  BookActions,
  IBook,
  IBookResponseItem,
} from "../@types/types";
import { validateBookAttribute } from "../services/validation/validateBookAttribute";

export function bookReducer(state: IBookStore, action: IBookActions) {
  switch (action.type) {
    case BookActions.BOOKS_REQUEST:
      return {
        loading: true,
        error: null,
        data: null,
        filteredData: null,
      };
    case BookActions.BOOKS_SUCCESS:
      const data = action?.payload?.data?.map(
        (item: IBookResponseItem): IBook => ({
          isbn: item.isbn,
          title: item.title,
          thumbnailURL: item.thumbnailURL,
          authors: item.authors,
          categories: item.categories,
          longDescription: item.longDescription,
          shortDescription: item.shortDescription,
        })
      );
      return {
        loading: false,
        error: null,
        data: data || null,
        filteredData: data || null,
      };
    case BookActions.BOOKS_FAIL:
      return {
        loading: false,
        error: action?.payload?.error || null,
        data: null,
        filteredData: null,
      };
    case BookActions.BOOKS_FILTER:
      const value = action?.payload?.searchValue || "";
      const filteredData = state.data?.filter((item: IBook) => {
        return (
          validateBookAttribute(item.title, value) ||
          validateBookAttribute(item.isbn, value) ||
          validateBookAttribute(item.shortDescription, value) ||
          validateBookAttribute(item.longDescription, value) ||
          validateBookAttribute(item.authors, value) ||
          validateBookAttribute(item.categories, value)
        );
      });
      return {
        ...state,
        filteredData: filteredData || null,
      };
    default:
      return state;
  }
}
