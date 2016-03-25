import { Component, EventEmitter } from 'angular2/core';
import {FoodComponent} from './food.component';
import { Food } from './food.model';
import {EditFoodDetailsComponent} from './edit-food-details.component';
import {NewFoodComponent} from './new-food.component';
import {HealthyPipe} from './healthy.pipe';



@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodComponent, EditFoodDetailsComponent, NewFoodComponent],
  pipes: [HealthyPipe],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
  <option value="all" selected="selected">Show All</option>
  <option value="Healthy">Show Healthy Foods</option>
  <option value="Unhealthy" >Show Unhealthy Foods</option>
  </select>
  <food-display *ngFor="#currentFood of foodList | healthy:filterHealthy"
  (click)="foodClicked(currentFood)"
  [class.selected]="currentFood === selectedFood"
  [food]="currentFood">
  </food-display>
  <edit-food-details *ngIf="selectedFood" [food] = "selectedFood">
  </edit-food-details>
  <new-food (onSubmitNewFood)="createFood($event)"></new-food>
  `
})

export class FoodListComponent{
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  public filterHealthy: string = "all";
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    console.log("Food name: " + clickedFood.name + " Details: " + clickedFood.details + " Calories: " + clickedFood.calories );
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
  createFood(newFoodInfo: string[]): void {
    this.foodList.push(
      new Food(newFoodInfo[0], newFoodInfo[1], parseInt(newFoodInfo[2]), this.foodList.length)
    );
  }
  onChange(filterOption) {
    this.filterHealthy = filterOption;
    console.log(this.filterHealthy);
  }
}
