/* @refresh reload */
import { render } from 'solid-js/web';
import 'tailwindcss/tailwind.css';
import './index.css';
import RandomBookChooser from './RandomBookChooser';

render(
  () => <RandomBookChooser />,
  document.getElementById('root') as HTMLElement
);
