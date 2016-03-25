import { Component, EventEmitter } from 'angular2/core';
import {FoodListComponent} from './food-list.component';
import {FoodComponent} from './food.component';
import { Food } from './food.model';



@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1>Food Item Tracker App!</h1>
      <food-list [foodList]="foods"
      (onFoodSelect)="foodWasSelected($event)">
      </food-list>
    <div>
  `
})

export class AppComponent {
  public foods: Food[];
  constructor() {
    this.foods = [
      new Food("Pizza", "Pizza is healthy!", 5000, 0),
      new Food("Meatball SandWich", "They were the size of baseballs!", 2000, 1),
      new Food("Oatmeal", "Made it vegan!", 250, 2),
      new Food("Banana", "Overly ripe", 100, 3)
    ];
  }
  foodWasSelected(clickedFood: Food): void {
    console.log(clickedFood);
  }
}
