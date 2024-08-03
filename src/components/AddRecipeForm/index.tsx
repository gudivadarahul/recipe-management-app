//src/components/AddRecipeForm/index.tsx
"use client";

import React from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addRecipe } from "../../redux/slices/recipeSlice";

export interface IFormInput {
  id: string;
  name: string;
  description: string;
  category: string;
  origin: string;
  cookingTime: number;
  servings: number;
  ingredients: { item: string }[];
  instructions: { step: string }[];
}

const AddRecipeForm: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      ingredients: [{ item: "" }],
      instructions: [{ step: "" }],
    },
  });

  const {
    fields: ingredientFields,
    append: appendIngredient,
    remove: removeIngredient,
  } = useFieldArray({
    control,
    name: "ingredients",
  });

  const {
    fields: instructionFields,
    append: appendInstruction,
    remove: removeInstruction,
  } = useFieldArray({
    control,
    name: "instructions",
  });

  const onSubmit: SubmitHandler<Omit<IFormInput, "id">> = (data) => {
    console.log(data);
    dispatch(addRecipe(data));
    router.push("/recipes");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Recipe Name
        </label>
        <input
          id="name"
          {...register("name", { required: "Recipe name is required" })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.name && (
          <span className="text-red-500 text-xs">{errors.name.message}</span>
        )}
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          {...register("description", { required: "Description is required" })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          rows={3}
        />
        {errors.description && (
          <span className="text-red-500 text-xs">
            {errors.description.message}
          </span>
        )}
      </div>

      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category
        </label>
        <input
          id="category"
          {...register("category", { required: "Category is required" })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.category && (
          <span className="text-red-500 text-xs">
            {errors.category.message}
          </span>
        )}
      </div>

      <div>
        <label
          htmlFor="origin"
          className="block text-sm font-medium text-gray-700"
        >
          Origin
        </label>
        <input
          id="origin"
          {...register("origin", { required: "Origin is required" })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.origin && (
          <span className="text-red-500 text-xs">{errors.origin.message}</span>
        )}
      </div>

      <div>
        <label
          htmlFor="cookingTime"
          className="block text-sm font-medium text-gray-700"
        >
          Cooking Time (minutes)
        </label>
        <input
          id="cookingTime"
          type="number"
          {...register("cookingTime", {
            required: "Cooking time is required",
            min: 1,
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.cookingTime && (
          <span className="text-red-500 text-xs">
            {errors.cookingTime.message}
          </span>
        )}
      </div>

      <div>
        <label
          htmlFor="servings"
          className="block text-sm font-medium text-gray-700"
        >
          Servings
        </label>
        <input
          id="servings"
          type="number"
          {...register("servings", {
            required: "Number of servings is required",
            min: 1,
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.servings && (
          <span className="text-red-500 text-xs">
            {errors.servings.message}
          </span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Ingredients
        </label>
        {ingredientFields.map((field, index) => (
          <div key={field.id} className="flex items-center space-x-2 mt-1">
            <input
              {...register(`ingredients.${index}.item` as const, {
                required: "Ingredient is required",
              })}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter ingredient"
            />
            <button
              type="button"
              onClick={() => removeIngredient(index)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendIngredient({ item: "" })}
          className="mt-2 inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Ingredient
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Instructions
        </label>
        {instructionFields.map((field, index) => (
          <div key={field.id} className="flex items-center space-x-2 mt-1">
            <textarea
              {...register(`instructions.${index}.step` as const, {
                required: "Instruction step is required",
              })}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter instruction step"
            />
            <button
              type="button"
              onClick={() => removeInstruction(index)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendInstruction({ step: "" })}
          className="mt-2 inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Instruction
        </button>
      </div>

      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
