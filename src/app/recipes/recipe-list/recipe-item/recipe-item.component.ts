import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from "../../recipes.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipesService) { }

  onRecipeSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
