import React from "react";
import AddRecipeForm from "../../components/AddRecipeForm";

const AddRecipePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Add New Recipe</h1>
      <AddRecipeForm />
    </div>
  );
};

export default AddRecipePage;
