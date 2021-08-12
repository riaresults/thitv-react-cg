import { useMemo } from "react";
import { IBook } from "../../@types/types";
import { Image } from "../atoms/Image";
import { Title } from "../atoms/Title";
import { Description } from "../atoms/Description";
import { Subtitle } from "../atoms/Subtitle";

export function BookDetails({
  title,
  longDescription,
  thumbnailURL,
  authors,
}: IBook) {
  const bookAuthors = useMemo<string | null>(() => {
    return authors ? authors.join(", ") : null;
  }, [authors]);

  return (
    <>
      <div className="d-flex justify-content-start align-items-center">
        <Image
          url={thumbnailURL}
          alt={`Book cover for ${title}`}
          width="100px"
          height="100px"
          className="mb-3"
        />
        {title && <Title>{title}</Title>}
      </div>
      {longDescription && <Description>{longDescription}</Description>}
      {bookAuthors && <Subtitle>{bookAuthors}</Subtitle>}
    </>
  );
}
