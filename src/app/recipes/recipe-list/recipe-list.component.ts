import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('a test reciepe', 'simple text',
      'https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?w=640&ssl=1'),
    new Recipe('2 test reciepe', 'so simple text',
      'http://www.catster.com/wp-content/uploads/2017/06/small-kitten-meowing.jpg')

  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);

  }

  constructor() {
  }

  ngOnInit() {
  }

}
