import { Container } from "../atoms/Container";
import { Title } from "../atoms/Title";

export default function NotFound() {
  return (
    <Container>
      <div className="row p-5">
        <div className="offset-3 col-6 d-flex align-items-center justify-content-center">
          <Title>404 - Page Not Found</Title>
        </div>
      </div>
    </Container>
  );
}
