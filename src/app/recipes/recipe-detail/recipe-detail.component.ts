import {Component, OnDestroy, OnInit} from '@angular/core';

import { Recipe } from '../recipe.model';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RecipesService} from "../recipes.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  recipe: Recipe;
  id: number;
  routeParamsSubscription: Subscription;

  constructor(private route: ActivatedRoute, private recipesService: RecipesService, private router: Router) { }

  ngOnInit() {
    this.routeParamsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipesService.getRecipe(this.id);
      }
    );
  }

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe();
  }

  onAddToShoppingList(){
    this.recipesService.addIngredients(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe(){
    this.recipesService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
