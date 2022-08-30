import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <div class="flex items-center justify-center">
      <header class="bg-black text-center text-white">
        Random book chooser
      </header>
      <button class="box-border border-solid border-2 border-indigo-600  bg-green-900 ">Choose</button>
    </div>
  );
};

export default App;
