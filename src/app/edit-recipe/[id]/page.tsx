import React from "react";
import EditRecipeForm from "../../../components/EditRecipeForm";

const EditRecipePage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Edit Recipe</h1>
      <EditRecipeForm recipeId={params.id} />
    </div>
  );
};

export default EditRecipePage;
