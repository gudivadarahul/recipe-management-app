// src/redux/slices/recipeSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFormInput } from "../../components/AddRecipeForm";
import { v4 as uuidv4 } from "uuid";

interface RecipeState {
  recipes: IFormInput[];
}

const initialState: RecipeState = {
  recipes: [],
};

export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addRecipe: (state, action: PayloadAction<Omit<IFormInput, "id">>) => {
      state.recipes.push({ ...action.payload, id: uuidv4() });
    },
    updateRecipe: (state, action: PayloadAction<IFormInput>) => {
      const index = state.recipes.findIndex(
        (recipe) => recipe.id === action.payload.id,
      );
      if (index !== -1) {
        state.recipes[index] = action.payload;
      }
    },
    deleteRecipe: (state, action: PayloadAction<number>) => {
      state.recipes = state.recipes.filter(
        (_, index) => index !== action.payload,
      );
    },
  },
});

export const { addRecipe, updateRecipe, deleteRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
