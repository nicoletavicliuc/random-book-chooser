import { createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';
import { Book } from './type';

export const [bookList, setBookList] = createStore([] as Book[]);
export const [value, setValue] = createSignal('');
