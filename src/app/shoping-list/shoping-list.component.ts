import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.module';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    console.log(this.ingredients);
    localStorage.setItem('shopingList', JSON.stringify(this.ingredients));
  }

  constructor() {
  }

  ngOnInit() {
    if (localStorage.getItem('shopingList')) {
      this.ingredients = (JSON.parse(localStorage.getItem('shopingList')));
    }
  }

}
