import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.module';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
ingredients: Ingredient[] = [
  new Ingredient('apples', 5),
  new Ingredient('apples', 6),
  new Ingredient('apples', 8)
];
  constructor() { }

  ngOnInit() {
  }

}
