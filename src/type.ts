export type Book = {
  id: string;
  name: string;
  read: boolean;
};
export type AddBook = (newBook: string) => void;

