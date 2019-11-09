import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 
        'This is simply a test', 
        'https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg',
        [ 
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),

        new Recipe('A Test Recipe 2', 
        'This is simply a test 2', 
        'https://thenypost.files.wordpress.com/2019/09/junk-food-turns-kid-blind.jpg?quality=90&strip=all&w=618&h=410&crop=1',
        [ 
            new Ingredient('Meat', 1),
            new Ingredient('Buns', 2)
        ])
      ];
    
      constructor(private shoppingListService: ShoppingListService) {}
      getRecipe() {
          return this.recipes.slice();
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
      }
}
