import React, { useState } from 'react';
import Menu from './Menu';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [items, setItems] = useState([
    "😀 Smile",
    "🙁 Frown",
    "😇 Angel",
    "😈 Devil",
  ])

  const handleDragStart = (e, i) => {
    setSelectedItem(items[i])
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target);
    e.dataTransfer.setDragImage(e.target, 20, 20);
  }

  const handleDragOver = (i) => {
    const draggedOver = items[i];

    if (draggedOver === selectedItem) return;

    let newItems = items.filter(item => item !== selectedItem);
    newItems.splice(i, 0, selectedItem);

    setItems(newItems);
  }

  return (
    <div className="App">
      { items.map( (item, i) => (
        <div
          key={i}
          className="item"
          draggable
          onDragStart={(e) => handleDragStart(e, i)}
          onDragOver={() => handleDragOver(i)}
          onDragEnd={() => setSelectedItem(null)}
        >
          <Menu />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};


export default App;
