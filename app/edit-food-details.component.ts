import {Component} from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
   <h3>Edit Food Item: {{ food.name }} {{ food.details }} {{ food.calories }} </h3>
   <input [(ngModel)]="food.name" class="col-sm-8 input-lg task-form"/>
   <input [(ngModel)]="food.details" class="col-sm-8 input-lg task-form"/>
   <input [(ngModel)]="food.calories" class="col-sm-8 input-lg task-form"/>
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}
