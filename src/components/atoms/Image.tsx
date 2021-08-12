import { useEffect, useState } from "react";
import styled from "styled-components";
import { preloadImage } from "../../utils/preloadImage";

export interface IProps {
  url: string;
  alt: string;
  width: string;
  height: string;
  className?: string;
}

interface IStyledImage {
  width: string;
  height: string;
}

const StyledImage = styled.img<IStyledImage>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: contain;
`;

export function Image({ url, alt, width, height, className }: IProps) {
  const defaultImage = "/images/default-cover.jpg";
  const [imageSource, setImageSource] = useState<string>(defaultImage);

  useEffect(() => {
    let skipPreload = false;
    async function preload() {
      try {
        await preloadImage(url);
        if (!skipPreload) {
          setImageSource(url);
        }
      } catch (imageUrl) {
        console.error(`Error loading the image: ${imageUrl}`);
      }
    }
    if (url) {
      preload();
    }
    return () => {
      skipPreload = true;
    };
  }, [url]);

  return (
    <StyledImage
      className={className}
      src={imageSource}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
