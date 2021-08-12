import { IBookResponse } from "../../@types/types";
import { GET_BOOKS } from "./endpoints";

export async function getBooks(): Promise<IBookResponse> {
  const response = await fetch(GET_BOOKS);
  return response.json();
}
