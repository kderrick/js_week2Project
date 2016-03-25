import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Food Item Tracker App!</h1>
      <h3 *ngFor="#food of foods" (click)="foodWasSelected(food)">{{ food.name }}</h3>
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

export class Food {
  constructor(public name: string, public details: string, public calories: number, public id: number) {
  }
}
