import { Component, For } from 'solid-js';
import AddBookButton from './AddBookButton';
import BookList from './BookList';
import { setBookList, bookList } from './store';
import { supabase } from './supabaseClient';
import { Book } from './type';

const getBooks = async (): Promise<Book[]> => {
  const { data: books, error } = await supabase.from('books').select('*');

  if (error) {
    throw error;
  }
  return books;
};

export const getBooksFromSupabase = () => {
  getBooks().then((data) => {
    setBookList(() => data);
    console.log('Books fetched from Supabase.');
  });
};
const RandomBookChooser: Component = () => {
  const handleClick = () => {
    const randomBook = bookList[Math.floor(Math.random() * bookList.length)];
    setBookList(() => randomBook);
  };

  return (
    <div class="flex-box items-center mt-64 text-center">
      <h1 class="mb-4 font-bold text-lg">Random Book Chooser</h1>
      <form class="mb-5 flex flex-row-2 flex-col-2 justify-center">
        <input
          type="text"
          class="p-2 w-auto"
          placeholder="Add book here..."
          id="bookInput"
          required
        />
        <AddBookButton />
      </form>
      <div>
        <button class="mb-4" onClick={handleClick}>
          Choose
        </button>
        <BookList />
      </div>
    </div>
  );
};
export default RandomBookChooser;
