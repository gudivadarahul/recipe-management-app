//src/components/RecipeListPage/index.tsx
"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import RecipeCard from "../RecipeCard";

const RecipeListPage: React.FC = () => {
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeListPage;
