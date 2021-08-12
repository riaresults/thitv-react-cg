import { Container } from "../atoms/Container";
import { LoadingMessage } from "../organisms/LoadingMessage";

export default function Loading() {
  return (
    <Container>
      <LoadingMessage message="Loading page" />
    </Container>
  );
}
