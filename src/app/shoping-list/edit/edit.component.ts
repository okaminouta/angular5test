import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.module';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  shopingItem = {
    name: null,
    amount: null,
    checked: false
  };


  addItem() {
    if (this.shopingItem.name === null ||
      this.shopingItem.name === '') {
      console.log('enter Name');
    } else {
      const newIngredient = new Ingredient(this.shopingItem.name,
        this.shopingItem.amount, this.shopingItem.checked);
      this.ingredientAdded.emit(newIngredient);
      this.shopingItem.name = null;
      this.shopingItem.amount = null;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
