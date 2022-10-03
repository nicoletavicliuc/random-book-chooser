import { Component, For } from 'solid-js';
import { setBookList, bookList, randomBook } from './store';
import { Book } from './type';

interface Props {
  randomBook: Book;
}

const BookList: Component = () => {
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

  return (
    <>
      <For each={bookList}>
        {(book) => {
          return (
            <div class="flex flex-row flex-cols-3 mb-3 justify-center">
              <button
                class="btn btn-danger w-auto mr-2 text-purple-700"
                onclick={() => deleteBook(book.id)}
              >
                X
              </button>
              <div
                class={`bg-white p-2 ${
                  randomBook()?.id === book.id && 'bg-green-200'
                } mx-2 ${book.read && 'bg-purple-100'}`}
              >
                {book.name}
              </div>

              <input
                type="checkbox"
                checked={book.read}
                role="button"
                class="h-auto accent-purple-700 px-6 mx-2"
                onClick={() => {
                  toggleStatus(book.id);
                }}
              />
            </div>
          );
        }}
      </For>
    </>
  );
};
export default BookList;
