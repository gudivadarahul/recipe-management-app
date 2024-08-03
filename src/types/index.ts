export interface Recipe {
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
