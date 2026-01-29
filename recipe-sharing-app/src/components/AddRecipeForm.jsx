import React, { useState } from 'react'
import { useRecipeStores } from './recipeStore';

function AddRecipeForm() {

    const addRecipe =  useRecipeStores(state => state.addRecipe);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        addRecipe({id: Date.now(), title, description});
        setTitle("");
        setDescription("");
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  )
}

export default AddRecipeForm
