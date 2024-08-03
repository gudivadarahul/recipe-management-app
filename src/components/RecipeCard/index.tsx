"use client";

import React from "react";
import { Recipe } from "../../types";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold">{recipe.name}</h2>
      <p className="text-gray-700">{recipe.description}</p>
      <p className="text-sm text-gray-500">Category: {recipe.category}</p>
      <p className="text-sm text-gray-500">Origin: {recipe.origin}</p>
    </div>
  );
};

export default RecipeCard;
