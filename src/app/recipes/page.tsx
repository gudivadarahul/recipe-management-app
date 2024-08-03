import React from "react";
import RecipeList from "../../components/RecipeList";
import Link from "next/link";

const RecipeListPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Recipes</h1>
      <Link
        href="/add-recipe"
        className="mb-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add New Recipe
      </Link>
      <RecipeList />
    </div>
  );
};

export default RecipeListPage;
