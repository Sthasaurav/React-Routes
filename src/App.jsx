import React, { useState } from 'react';
import Header from "./components/Header/Header"

function App() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const addItem = () => {
    const newItems = [...items, `Item ${items.length + 1}`];
    setItems(newItems);
  };

  return (
    <>
    </>
  );
}

export default App;
