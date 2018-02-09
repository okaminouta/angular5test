import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import {Ingredient} from '../shared/ingredient.module';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('a test reciepe', 'simple text',
      'https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?w=640&ssl=1', [
        new Ingredient('123', 123, false),
        new Ingredient('123', 123, false),
      ]),
    new Recipe('2 test reciepe', 'so simple text',
      'http://www.catster.com/wp-content/uploads/2017/06/small-kitten-meowing.jpg',
      [
        new Ingredient('123', 123, false),
        new Ingredient('123', 123, false),
      ])

  ];
  recipeSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  getRecipes() {
    return this.recipes.slice();
  }

}
