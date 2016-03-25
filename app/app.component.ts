import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Skeleton Angular2 App!</h1>
    <div>
  `
})
export class AppComponent {

}

export class Food {
  constructor(public name: string, public details: string, public calories: number, public id: number) {

  }
}
