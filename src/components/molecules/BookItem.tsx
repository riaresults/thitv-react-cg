import { useMemo, MouseEvent } from "react";
import { IBook } from "../../@types/types";
import { Image } from "../atoms/Image";
import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import styled from "styled-components";

const StyledItem = styled.div`
  background-color: ${(props) => props.theme.colors.card.background};
  height: 100%;
  border-radius: 4px;
  cursor: pointer;
`;

interface IProps extends IBook {
  onClick?(ev: MouseEvent<HTMLDivElement>): void;
}

export function BookItem({
  title,
  thumbnailURL,
  categories,
  authors,
  onClick,
}: IProps) {
  const bookAuthors = useMemo<string | null>(() => {
    return authors ? authors.join(", ") : null;
  }, [authors]);
  const bookCategories = useMemo<string | null>(() => {
    return categories ? categories.join(", ") : null;
  }, [categories]);

  return (
    <div className="col-12 mb-3">
      <StyledItem className="p-3" onClick={onClick}>
        <div className="row">
          <div className="col-6 col-md-3 col-lg-2">
            <Image
              url={thumbnailURL}
              alt={`Book cover for ${title}`}
              width="100%"
              height="100%"
            />
          </div>
          <div className="col-6 col-md-9 col-lg-10">
            <Title>{title}</Title>
            {bookAuthors && <Subtitle>{bookAuthors}</Subtitle>}
            {bookCategories && <Subtitle>{bookCategories}</Subtitle>}
          </div>
        </div>
      </StyledItem>
    </div>
  );
}
