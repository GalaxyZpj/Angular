import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { stringify } from 'querystring';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) ingredientName: ElementRef;
  @ViewChild('amountInput', {static: true}) amount: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  addIngredient() {
    const newIngredient = new Ingredient(this.ingredientName.nativeElement.value, this.amount.nativeElement.value);
    this.shoppingListService.addIngredient(newIngredient);
    //this.ingredientAdded.emit(newIngredient);
  }
}
