import { For } from 'solid-js';
import { setBookList, bookList } from './store';

const BookList = () => {
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
    </>
  );
};
export default BookList;
