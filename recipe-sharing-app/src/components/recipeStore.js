import { create } from 'zustand';


export const useRecipeStores = create((set) =>({
    recipes: [],
    addRecipe: (recipe) => set((state) =>({recipes: [...state.recipes, recipe]})),
    setRecipes: (recipes) => set({ recipes })
}))