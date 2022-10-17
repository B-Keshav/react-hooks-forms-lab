import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(e) {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return (item.category === selectedCategory);
  });

  const searchItemsToDisplay = itemsToDisplay.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="ShoppingList">
      {/* onItemFormSubmit={onItemFormSubmit} */}
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={search} />
      <ul className="Items">
        {searchItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
