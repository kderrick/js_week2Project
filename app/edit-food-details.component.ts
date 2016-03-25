import {Component} from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
  <div class = "editAdjust">
  <h3>Edit Food Item: Food name: {{ food.name }} | Food Details: {{ food.details }} | Food calories: {{ food.calories }} </h3>
  <input [(ngModel)]="food.name" class="col-sm-8 input-lg food-form"/>
  <input [(ngModel)]="food.details" class="col-sm-8 input-lg food-form"/>
  <input [(ngModel)]="food.calories" class="col-sm-8 input-lg food-form"/>
  </div>
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}
