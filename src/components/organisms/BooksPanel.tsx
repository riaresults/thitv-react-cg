import { useContext, useState, ReactNode } from "react";
import { BooksContext } from "../../context/BooksContext";
import { BookCard } from "../molecules/BookCard";
import { BookItem } from "../molecules/BookItem";
import { BookDetails } from "../molecules/BookDetails";
import { LoadingMessage } from "./LoadingMessage";
import { Modal } from "../atoms/Modal";
import { IBook, View } from "../../@types/types";

interface IProps {
  className?: string;
}

export function BooksPanel({ className }: IProps) {
  const [selectedBook, setSelectedBook] = useState<IBook | null>(null);
  const { books, view } = useContext(BooksContext);
  const isListView = view === View.LIST;

  function renderBook(book: IBook, index: number) {
    if (isListView) {
      return (
        <BookItem
          key={`${index}-${book.isbn}`}
          {...book}
          onClick={() => setSelectedBook(book)}
        />
      );
    }
    return (
      <BookCard
        key={`${index}-${book.isbn}`}
        {...book}
        onClick={() => setSelectedBook(book)}
      />
    );
  }

  return books ? (
    <>
      <Modal
        title="Book Details"
        isVisible={!!selectedBook}
        onCancel={() => setSelectedBook(null)}
      >
        {selectedBook && <BookDetails {...selectedBook} />}
      </Modal>
      <div className={`row ${className}`}>
        {books.map(
          (book: IBook, index: number): ReactNode => renderBook(book, index)
        )}
      </div>
    </>
  ) : (
    <LoadingMessage message="There are no books available" />
  );
}
