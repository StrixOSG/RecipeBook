import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f', {static: false}) shoppingListForm: NgForm

  startedEditingSubscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(){
    this.startedEditingSubscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );

  }

  ngOnDestroy() {
    this.startedEditingSubscription.unsubscribe();
  }

  onClear(){
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  onSubmit(form: NgForm){
    let value = form.value;
    let ingredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex, ingredient);
    }else {
      this.shoppingListService.addIngredient(ingredient);
    }
    this.shoppingListForm.reset();
    this.editMode = false;
  }

}
