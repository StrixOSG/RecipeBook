import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Strawberry Jello Pie',
      'The best dessert hands down',
      'https://cdn.craftymorning.com/wp-content/uploads/2019/01/strawberry-jello-pie-recipe.png',
      [
        new Ingredient('8 oz. package cream cheese, softened', 1),
        new Ingredient('8 oz. container Cool Whip (or other non-dairy whipped topping), thawed', 1),
        new Ingredient('package strawberry jello', 1),
        new Ingredient('graham cracker crust', 1)
      ]),
    new Recipe(
      'Baked Mac and Cheese',
      'The best gourmet mac and cheese',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/8/22/0/YW0509_Baked-Mac-n-Cheese_s4x3.jpg.rend.hgtvcom.406.305.suffix/1558101744328.jpeg',
      [
        new Ingredient('1/2 pound elbow macaroni', 1),
        new Ingredient('tablespoons butter', 3),
        new Ingredient('tablespoons flour', 3),
        new Ingredient('tablespoon powdered mustard', 1),
        new Ingredient('cups milk', 3),
        new Ingredient('1/2 cup yellow onion, finely diced', 1),
        new Ingredient('bay leaf', 1),
        new Ingredient('1/2 teaspoon paprika', 1),
        new Ingredient('large egg', 1),
        new Ingredient('12 ounces sharp cheddar, shredded', 1),
        new Ingredient('teaspoon kosher salt', 1),
        new Ingredient('Fresh black pepper', 1),
        new Ingredient('Topping: tablespoons butter', 3),
        new Ingredient('Topping: cup panko bread crumbs', 1),
      ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

}
