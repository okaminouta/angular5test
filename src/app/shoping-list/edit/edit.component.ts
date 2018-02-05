import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.module';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  nameInput: string;
  amountInput: string;
  addItem(name: HTMLInputElement, amount: HTMLInputElement) {
    const newIngredient = new Ingredient(name.value, amount.value);
    this.ingredientAdded.emit(newIngredient);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
