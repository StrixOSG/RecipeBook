import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  onAddIngredient(){
    let ingredientName = this.nameInputRef.nativeElement.value;
    let ingredientAmount = this.amountInputRef.nativeElement.value;
    let ingredient = new Ingredient(ingredientName, ingredientAmount);

    this.shoppingListService.addIngredient(ingredient);
  }

}
