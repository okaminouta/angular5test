import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.module';
import {ShopingListService} from '../../services/shoping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shopingListService: ShopingListService) {
  }

  ngOnInit() {
  }

  toShopingList(ingridients: Ingredient []) {
    console.log(ingridients);
    this.shopingListService.addIngredient(ingridients);
  }
}
