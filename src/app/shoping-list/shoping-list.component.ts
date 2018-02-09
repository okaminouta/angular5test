import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.module';
import {TestOneService} from '../services/test-one.service';
import {ShopingListService} from '../services/shoping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
  providers: [TestOneService]
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  onIngredientAdded(ingredient: Ingredient) {
    this.shopingListService.addIngredient(ingredient);
  }

  constructor(private c: TestOneService, private shopingListService: ShopingListService) {
  }

  crossItem(index) {
    this.ingredients[index].checked = !this.ingredients[index].checked;
    this.shopingListService.localstorageSetItems();
  }

  deleteItem(index) {
    this.ingredients.splice(index, 1);
    this.shopingListService.localstorageSetItems();
  }



  ngOnInit() {
    this.ingredients = this.shopingListService.getIngredients();
  }

}
