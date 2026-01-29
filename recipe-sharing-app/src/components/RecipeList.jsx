import React from 'react';
import { useRecipeStores } from '../../stores/recipeStores';

  const RecipeList = () => {
    const recipes = useRecipeStores(state => state.recipes);

    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    );
  };

  export default RecipeList;