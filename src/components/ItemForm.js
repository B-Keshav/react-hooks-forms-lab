import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  // { onItemFormSubmit }

  const [formData, setFormData] = useState({
    id: uuid(),
    name: "",
    category: "Produce"
  })

  function onInputChange(e) {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    onItemFormSubmit(formData)
    setFormData({
      id: uuid(),
      name: "",
      category: "Produce"
    })

  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={onInputChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={onInputChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
