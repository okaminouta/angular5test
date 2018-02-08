import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.module';
import {TestOneService} from '../services/test-one.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
  providers: [TestOneService]
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.c.l(this.ingredients, 'ingridients')
    this.localstorageSetItems();
  }

  constructor(private c: TestOneService ) {
  }

  crossItem(index) {
    this.ingredients[index].checked = !this.ingredients[index].checked;
    this.localstorageSetItems();
  }

  deleteItem(index) {
    this.ingredients.splice(index, 1);
    this.localstorageSetItems();
  }

  localstorageSetItems() {
    localStorage.setItem('shopingList', JSON.stringify(this.ingredients));
  }

  ngOnInit() {
    if (localStorage.getItem('shopingList')) {
      this.ingredients = (JSON.parse(localStorage.getItem('shopingList')));
    }
  }

}
