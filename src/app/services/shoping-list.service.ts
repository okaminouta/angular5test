import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.module';
import {TestOneService} from './test-one.service';

@Injectable()
export class ShopingListService {
  private ingredients: Ingredient[] = [];

  constructor(private c: TestOneService) {
  }

  localstorageSetItems() {
    localStorage.setItem('shopingList', JSON.stringify(this.ingredients));
  }

  getIngredients() {
    if (localStorage.getItem('shopingList')) {
      this.ingredients = (JSON.parse(localStorage.getItem('shopingList')));
    }
    return this.ingredients;
  }

  addIngredient(ingredient) {
    if (ingredient.length) {
      this.ingredients.push(...ingredient);
      this.c.l(this.ingredients, 'ingridients');
      this.localstorageSetItems();
    } else {
      this.ingredients.push(ingredient);
      this.c.l(this.ingredients, 'ingridients');
      this.localstorageSetItems();
    }

  }

}
