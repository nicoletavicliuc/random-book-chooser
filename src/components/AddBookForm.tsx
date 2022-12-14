import { AddBook } from '../type';
import { Component, createSignal } from 'solid-js';

interface Props {
  addBook: AddBook;
}

const AddBookForm: Component<Props> = ({ addBook }) => {
  const [newBook, setNewBook] = createSignal<string>('');

  const handleChange = (e) => {
    setNewBook(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(newBook());
    setNewBook('');
  };
  return (
    <>
      <form class="mb-5 flex flex-row-2 flex-col-2 justify-center">
        <input
          type="text"
          class="p-2 w-auto mx-1 outline-purple-400"
          placeholder="Add book here..."
          id="bookInput"
          required
          value={newBook()}
          onChange={handleChange}
        />
        <button
          class="box-content h-auto w-auto p-2 text-sm text-white bg-purple-400 hover:bg-purple-500"
          type="submit"
          onClick={handleSubmit}
        >
          Add Book
        </button>
      </form>
    </>
  );
};

export default AddBookForm;
