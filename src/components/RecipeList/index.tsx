// src/components/RecipeList/index.tsx
"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { deleteRecipe } from "@/redux/slices/recipeSlice";
import { useRouter } from "next/navigation";

const RecipeList: React.FC = () => {
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleDelete = (index: number) => {
    dispatch(deleteRecipe(index));
  };

  const handleEdit = (id: string) => {
    router.push(`/edit-recipe/${id}`);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        <ul className="space-y-8">
          {recipes.map((recipe, index) => (
            <li key={index} className="border p-4 rounded-md relative">
              <div className="absolute top-2 right-2 space-x-2">
                <button
                  onClick={() => handleEdit(recipe.id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
              <h3 className="text-xl font-semibold">{recipe.name}</h3>
              <p className="text-gray-600">{recipe.description}</p>
              <p>Category: {recipe.category}</p>
              <p>Origin: {recipe.origin}</p>
              <p>Cooking Time: {recipe.cookingTime} minutes</p>
              <p>Servings: {recipe.servings}</p>

              <h4 className="font-semibold mt-2">Ingredients:</h4>
              <ul className="list-disc list-inside">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i}>{ing.item}</li>
                ))}
              </ul>

              <h4 className="font-semibold mt-2">Instructions:</h4>
              <ol className="list-decimal list-inside">
                {recipe.instructions.map((inst, i) => (
                  <li key={i}>{inst.step}</li>
                ))}
              </ol>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
