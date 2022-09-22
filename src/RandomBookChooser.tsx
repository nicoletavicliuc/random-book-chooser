import { Component, For } from 'solid-js';
import { createStore } from 'solid-js/store';
import { supabase } from './supabaseClient';

const RandomBookChooser: Component = () => {
  type Book = {
    id: string;
    name: string;
    read: boolean;
  };
  const [bookList, setBookList] = createStore([] as Book[]);

  const addBook = (e: Event) => {
    e.preventDefault();
    // TODO: use controlled component for input instead of accessing the actual HTML element
    const bookInput = document.querySelector('#bookInput') as HTMLInputElement;

    const newBookName = bookInput.value;

    bookInput.value = '';

    const insertBooks = async (): Promise<Book[]> => {
      const { data, error } = await supabase
        .from('books')
        .insert([{ name: newBookName }]);
      if (error) {
        throw error;
      }
      return data;
    };

    insertBooks().then(() => {
      getBooks().then((data) => {
        setBookList(() => data);
        console.log('Books fetched from Supabase.');
      });
    });
  };

  const toggleStatus = (bookId: string) => {
    setBookList(
      (book) => book.id === bookId,
      'read',
      (read) => !read
    );
  };

  const deleteBook = (bookId: string) => {
    const newBookList = bookList.filter((book) => book.id !== bookId);
    setBookList(newBookList);
  };

  const handleClick = () => {
    const randomBook = bookList[Math.floor(Math.random() * bookList.length)];
    setBookList(() => randomBook);
  };

  const getBooks = async (): Promise<Book[]> => {
    const { data: books, error } = await supabase.from('books').select('*');

    if (error) {
      throw error;
    }
    return books;
  };

  getBooks().then((data) => {
    setBookList(() => data);
    console.log('Books fetched from Supabase.');
  });

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
        <button
          class="box-content h-auto w-auto p-2 text-sm text-white bg-purple-400"
          onclick={addBook}
          type="submit"
        >
          Add Book
        </button>
      </form>
      <div>
        <button class="mb-4" onClick={handleClick}>
          Choose
        </button>
        <For each={bookList}>
          {(book) => {
            return (
              <div class=" flex flex-row flex-cols-3 mb-3 justify-center">
                <button
                  class="btn btn-danger w-auto"
                  onclick={() => deleteBook(book.id)}
                >
                  X
                </button>
                <div class={`bg-white p-2 mx-2 ${book.read && 'line-through'}`}>
                  {book.name}
                </div>
                <input
                  type="checkbox"
                  checked={book.read}
                  role="button"
                  class="h-auto px-3"
                  onClick={() => {
                    toggleStatus(book.id);
                  }}
                />
              </div>
            );
          }}
        </For>
      </div>
    </div>
  );
};
export default RandomBookChooser;
