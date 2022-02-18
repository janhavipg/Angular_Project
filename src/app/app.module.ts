//prime unit of execution for OOP language - class
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RootComponent } from "./app.rootcomponent";
import { HeaderComponent } from "./header/app.header.component";
import { EmployeeComponent } from "./employee/app.employee.component";
//import { FooterComponent } from "./footer/app.footer.component";

@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent,
    //FooterComponent,
    EmployeeComponent
  ], //registre component
  imports: [BrowserModule], // child modules
  bootstrap: [RootComponent] // first component to be loaded
})
export class RootModule {
  constructor() {
    console.log("Root module loaded");
  }
}
