import { Component } from "@angular/core";
//custom component
@Component({
  selector: "app-root", //<app-root>
  template: `<div>
    <h1 style="color:blue;">Welcome to Root Component</h1>
    <app-header></app-header>
    <app-footer></app-footer>
  </div> `
})
export class RootComponent {
  constructor() {
    console.log("Root component Loaded!");
  }
}
