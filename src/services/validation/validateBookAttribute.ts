export function validateBookAttribute(
  target: string | string[] | null,
  search: string
) {
  const searchValue = search.toLowerCase();
  if (Array.isArray(target)) {
    return target.some((item: string) => {
      const itemValue = item.toLowerCase();
      return itemValue.indexOf(searchValue) !== -1;
    });
  } else if (typeof target === "string") {
    const targetValue = target.toLowerCase();
    return targetValue.indexOf(searchValue) !== -1;
  }
  return false;
}
