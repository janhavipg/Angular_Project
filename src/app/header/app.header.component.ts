import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./app.header.component.html"
})
export class HeaderComponent {
  title: string = "Header Component";
  today: number = Date.now();

  constructor() {
    console.log("Header Component");
  }
}
