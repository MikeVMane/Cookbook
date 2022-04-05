import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Shakshouka', 'Shakshouka is a Maghrebi dish of eggs poached in a sauce of tomatoes, olive oil, peppers, onion and garlic, commonly spiced with cumin, paprika and cayenne pepper.', 'https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_960_720.jpg', [ new Ingredient('eggs', 5), new Ingredient('Tomato Sauce', 3), new Ingredient('olive oil', 2), new Ingredient('peppers', 3), new Ingredient('Onion', 1), new Ingredient('garlic', 4), new Ingredient('Cumin, Paprika, Cayenne Pepper', 1) ]),
        new Recipe('Pizza a la Pixa', 'The best pizza on pixabay', 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg', [ new Ingredient('Pizza Dough', 1), new Ingredient('Tomato Sauce', 1), new Ingredient('Peppers', 1) ])
      ];

constructor(private slService: ShoppingListService){}

      getRecipe() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}