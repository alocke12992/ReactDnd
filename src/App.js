import React, { useState, useEffect } from 'react';
const ReactDnd = ({ items }) => {
  console.log(items)
  const [selectedItem, setSelectedItem] = useState(null)
  const [itemList, setItemList] = useState([])

  useEffect(() => {
    setItemList(items);
  }, [])

  const handleDragStart = (e, i) => {
    setSelectedItem(itemList[i])
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target);
    e.dataTransfer.setDragImage(e.target, 20, 20);
  }

  const handleDragOver = (i) => {
    const draggedOver = itemList[i];

    if (draggedOver === selectedItem) return;

    let newItems = itemList.filter(item => item !== selectedItem);
    newItems.splice(i, 0, selectedItem);

    setItemList(newItems);
  }
  if (itemList.length) {
    return itemList.map((item, i) => (
      <div
        key={i}
        className="item-container"
        draggable
        onDragStart={(e) => handleDragStart(e, i)}
        onDragOver={() => handleDragOver(i)}
        onDragEnd={() => setSelectedItem(null)}
      >
        <div className="item">
          {item}
        </div>
      </div>
    ))
  }
  return null
};

const items = [
  "😀 Smile",
  "🙁 Frown",
  "😇 Angel",
  "😈 Devil",
]

const App = () => <ReactDnd items={items} />


export default App;