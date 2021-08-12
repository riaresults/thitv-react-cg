import { useMemo, MouseEvent } from "react";
import { IBook } from "../../@types/types";
import { Image } from "../atoms/Image";
import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.colors.card.background};
  height: 100%;
  border-radius: 4px;
  cursor: pointer;
`;

interface IProps extends IBook {
  onClick?(ev: MouseEvent<HTMLDivElement>): void;
}

export function BookCard({
  title,
  thumbnailURL,
  authors,
  categories,
  onClick,
}: IProps) {
  const bookAuthors = useMemo<string | null>(() => {
    return authors ? authors.join(", ") : null;
  }, [authors]);
  const bookCategories = useMemo<string | null>(() => {
    return categories ? categories.join(", ") : null;
  }, [categories]);

  return (
    <div className="col-12 col-md-3 col-lg-2 mb-3">
      <StyledCard className="p-3" onClick={onClick}>
        <Image
          url={thumbnailURL}
          alt={`Book cover for ${title}`}
          width="100%"
          height="100px"
          className="mb-3"
        />
        <Title>{title}</Title>
        {bookAuthors && <Subtitle>{bookAuthors}</Subtitle>}
        {bookCategories && <Subtitle>{bookCategories}</Subtitle>}
      </StyledCard>
    </div>
  );
}
