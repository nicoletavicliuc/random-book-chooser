import { Component, For } from 'solid-js';

const BooksList = () => {
  const booksList = [
    'Mere Christianity',
    'Severe Mercy',
    'Three Philosophies of life',
    'Jane Eyre',
    '1945',
  ];

  return (
    <For each={booksList} fallback={<div>Loading...</div>}>
      {(item) => <div>{item}</div>}
    </For>
  );
};
export default BooksList;
