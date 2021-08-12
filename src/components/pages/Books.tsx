import { BooksContextProvider } from "../../context/BooksContext";
import { BooksPanel } from "../organisms/BooksPanel";
import { BooksMenu } from "../organisms/BooksMenu";
import { Container } from "../atoms/Container";
import { Title } from "../atoms/Title";

export default function Books() {
  return (
    <BooksContextProvider>
      <Container className="p-5">
        <Title className="mb-3">Book Tracking</Title>
        <BooksMenu />
        <BooksPanel />
      </Container>
    </BooksContextProvider>
  );
}
