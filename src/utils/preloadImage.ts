// We need to keep referencing the preloaded image elements,
// in order for them not to be garbage collected.
// Otherwise, the browser might refetch images.
const preloadedImages: HTMLImageElement[] = [];

export const preloadImage = (imageUrl: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = document.createElement("img");

    image.onload = () => {
      // Save the reference of the preloaded image in a global array.
      if (preloadedImages.indexOf(image) === -1) {
        preloadedImages.push(image);
      }
      resolve(image);
    };
    image.onerror = () => reject(imageUrl);
    image.src = imageUrl;
  });
