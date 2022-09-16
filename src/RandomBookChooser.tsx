import { Component, For } from 'solid-js';
import { createStore } from 'solid-js/store';

const RandomBookChooser: Component = () => {
  type Book = {
    id: string;
    text: string;
    read: boolean;
  };
  const [bookList, setBookList] = createStore([] as Book[]);
  const addBook = (e: Event) => {
    e.preventDefault();

    const bookInput = document.querySelector('#bookInput') as HTMLInputElement;

    const newBook: Book = {
      id: Math.random().toString(36).substring(2),
      text: bookInput.value,
      read: false,
    };

    setBookList([newBook, ...bookList]);
    bookInput.value = '';
  };

  const toggleStatus = (bookId: string) => {
    setBookList(
      (book) => book.id === bookId,
      'read',
      (read) => !read
    );
  };

  const deleteBook = (bookId: string) => {
    const newTaskList = bookList.filter((book) => book.id !== bookId);
    setBookList(newTaskList);
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
        <button
          class="box-content h-auto w-auto p-2 text-sm text-white bg-purple-400"
          onclick={addBook}
          type="submit"
        >
          Add Book
        </button>
      </form>
      <div>
        <h4 class="mb-4">Books</h4>
        <For each={bookList}>
          {(book: Book) => (
            <div class=" flex flex-row flex-cols-3 mb-3 justify-center">
              <button
                class="btn btn-danger w-auto"
                onclick={() => deleteBook(book.id)}
              >
                X
              </button>
              <div class={`bg-white p-2 mx-2 ${book.read && 'line-through'}`}>
                {book.text}
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
          )}
        </For>
      </div>
    </div>
  );
};
export default RandomBookChooser;

// import { stringify } from 'postcss';
// import { Component, createSignal, For } from 'solid-js';
// import BooksList from './BooksList';

// const RandomBookChooser: Component = () => {
//   const [bookList, setBookList] = createSignal([
//     { id: 0, title: 'Mere Christianity', author: 'C.S. Lewis', read: true },
//     { id: 1, title: 'Severe Mercy', author: 'C.S. Lewis', read: false },
//     {
//       id: 2,
//       title: 'Three Philosophies of life',
//       author: 'Peter Kreeft',
//       read: true,
//     },
//   ]);
//   const chooseRandomBook = Math.floor(
//     Math.random() * bookList.length
//   ).toString();

//   return (
//     <>
//       <div class="w-screen h-screen flex flex-col items-center justify-center">
//         <header class="text-center text-2xl text-black mt-16">
//           Random Book Chooser
//         </header>
//         <button
//           class="box-content h-6 w-16 p-4 m-6 text-lg text-white bg-purple-400"
//           onClick={() => chooseRandomBook}
//         >
//           Choose
//         </button>
//         <div>
//           {' '}
//           <For each={bookList()} fallback={<div>Loading...</div>}>
//             {(book) => <div>{book.title}</div>}
//           </For>
//         </div>
//       </div>
//     </>
//   );
// };

// export default RandomBookChooser;
