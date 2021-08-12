import { Title } from "../atoms/Title";

interface IProps {
  message: string;
}

export function LoadingMessage({ message }: IProps) {
  return (
    <div className="row p-5">
      <div className="offset-3 col-6 d-flex align-items-center justify-content-center">
        <Title>{message}</Title>
      </div>
    </div>
  );
}
