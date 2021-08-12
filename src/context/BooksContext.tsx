import { useReducer, useState, useEffect, Reducer } from "react";
import { createContext } from "react";
import {
  IBookStore,
  IBookActions,
  BookActions,
  IBook,
  View,
} from "../@types/types";
import { bookReducer } from "../reducers/bookReducer";
import { getBooks } from "../services/api/getBooks";

interface IBooksContext {
  view: View;
  books: IBook[] | null;
  setView(view: View): void;
  filterBooks(value: string): void;
}

interface IBooksContextProvider {
  children: React.ReactNode;
}

const initialState: IBookStore = {
  loading: false,
  error: null,
  data: null,
  filteredData: null,
};

export const BooksContext = createContext<IBooksContext>({
  view: View.LIST,
  books: null,
  setView: () => {},
  filterBooks: () => {},
});

export function BooksContextProvider({ children }: IBooksContextProvider) {
  const [view, setView] = useState<View>(View.LIST);
  const [state, dispatch] = useReducer<Reducer<IBookStore, IBookActions>>(
    bookReducer,
    initialState
  );

  function filterBooks(value: string): void {
    dispatch({
      type: BookActions.BOOKS_FILTER,
      payload: { searchValue: value },
    });
  }

  useEffect(() => {
    let skipRequest = false;
    async function fetchBooks() {
      dispatch({ type: BookActions.BOOKS_REQUEST });
      try {
        const response = await getBooks();
        if (!skipRequest) {
          dispatch({
            type: BookActions.BOOKS_SUCCESS,
            payload: { data: response.books },
          });
        }
      } catch (error) {
        if (!skipRequest) {
          dispatch({
            type: BookActions.BOOKS_FAIL,
            payload: { error },
          });
        }
      }
    }
    fetchBooks();

    return () => {
      skipRequest = true;
    };
  }, []);

  return (
    <BooksContext.Provider
      value={{
        view,
        books: state.filteredData,
        setView,
        filterBooks,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}
