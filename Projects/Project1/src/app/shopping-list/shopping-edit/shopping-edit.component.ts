import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { stringify } from 'querystring';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) ingredientName: ElementRef;
  @ViewChild('amountInput', {static: true}) amount: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  addIngredient() {
    console.log(this.ingredientName.nativeElement.value);
    const newIngredient = new Ingredient(this.ingredientName.nativeElement.value, this.amount.nativeElement.value);
    this.ingredientAdded.emit(newIngredient);
  }
}
