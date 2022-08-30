import { Component, For } from 'solid-js';
import BooksList from './BooksList';
const App: Component = () => {
  return (
    <>
      <div class="w-screen h-screen flex flex-col items-center justify-center">
        <header class="text-center text-2xl text-black mt-16">
          Random Book Chooser
        </header>
        <button class="box-content h-6 w-16 p-4 border-4 m-6 text-lg">
          Choose
        </button>
        <div class="grid grid-rows-3">
          <BooksList />
        </div>
      </div>
    </>
  );
};

export default App;
