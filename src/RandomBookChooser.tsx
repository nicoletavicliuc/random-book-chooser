import { Component, For } from 'solid-js';
import AddBookButton from './AddBookForm';
import BookList from './BookList';
import { setBookList, bookList, setValue } from './store';
import { supabase } from './api/supabaseClient';
import { AddBook, Book } from './type';
import AddBookForm from './AddBookForm';

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
  const chooseRandomBook = () => {
    const randomBook = bookList[Math.floor(Math.random() * bookList.length)];
    setBookList(() => randomBook);
    console.log(randomBook);
  };

  const addBook: AddBook = (newBook) => {
    newBook.trim() !== '' && setBookList([...bookList, { name: newBook }]);

    const insertBooks = async (): Promise<Book[]> => {
      const { data, error } = await supabase
        .from('books')
        .insert([{ name: newBook }]);
      if (error) {
        throw error;
      }
      return data;
    };

    insertBooks().then(() => {
      getBooksFromSupabase();
    });
  };

  return (
    <div class="flex-box items-center mt-64 text-center">
      <h1 class="mb-4 font-bold text-lg">Random Book Chooser</h1>
      <AddBookForm addBook={addBook} />
      <div>
        <button
          class="mb-4 p-2  bg-white outline outline-purple-200 hover:bg-purple-200"
          onClick={chooseRandomBook}
        >
          Choose
        </button>
        <BookList
          randomBook={bookList[Math.floor(Math.random() * bookList.length)]}
        />
      </div>
    </div>
  );
};
export default RandomBookChooser;
