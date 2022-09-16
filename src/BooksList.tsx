import { Component, createSignal, For, JSX } from 'solid-js';

const BooksList = () => {
  //   const booksList = [
  //     'Mere Christianity',
  //     'Severe Mercy',
  //     'Three Philosophies of life',
  //     'Jane Eyre',
  //     '1945',
  //   ];

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

  return (
    // <div class="box-content box border grid grid-rows-3">
    //   {' '}
    //   <For each={booksList} fallback={<div>Loading...</div>}>
    //     {(item) => <div>{item}</div>}
    //   </For>
    // </div>

    <div class="mx-auto max-w-4xl">
      <div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
        <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
          {' '}
          <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
            Mere Christianity
          </dt>
        </dl>
      </div>
      <div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
        <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
          {' '}
          <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
            Severe Mercy
          </dt>
        </dl>
      </div>
      <div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
        <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
          {' '}
          <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
            Four Loves
          </dt>
        </dl>
      </div>
    </div>
  );
};
export default BooksList;
