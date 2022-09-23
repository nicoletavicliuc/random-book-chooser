import { getBooksFromSupabase } from "./RandomBookChooser";
import { supabase } from "./supabaseClient";
import { Book } from "./type";

const AddBookButton = () => {
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
      getBooksFromSupabase();
    });
  };
  return (
    <>
      <button
        class="box-content h-auto w-auto p-2 text-sm text-white bg-purple-400"
        onclick={addBook}
        type="submit"
      >
        Add Book
      </button>
    </>
  );
};

export default AddBookButton;
