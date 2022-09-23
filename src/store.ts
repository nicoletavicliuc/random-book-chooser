import { createStore } from 'solid-js/store';
import { Book } from './type';

export const [bookList, setBookList] = createStore([] as Book[]);
