import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
    <h3>Create a new food Entry</h3>
    <input placeholder="Name of Food" class="col-sm-8 input-lg" #newFoodName>
    <input placeholder="Details about food" class="col-sm-8 input-lg" #newFoodDetails>
    <input placeholder="Calories within food" class="col-sm-8 input-lg" #newFoodCalories>
    <button (click)="addFood(newFoodName, newFoodDetails, newFoodCalories)" class="btn-success btn-lg add-button">Add food Entry</button>
  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<String[]>;
  constructor() {
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(newFoodName: HTMLInputElement, newFoodDetails: HTMLInputElement, newFoodCalories: HTMLInputElement) {
    this.onSubmitNewFood.emit([newFoodName.value, newFoodDetails.value, newFoodCalories.value])
    newFoodName.value = "";
    newFoodDetails.value = "";
    newFoodCalories.value = "";
  }
}
