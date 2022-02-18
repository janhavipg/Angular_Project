import { Component, OnInit } from "@angular/core";
import { Employee } from "../model/employee";

@Component({
  selector: "app-employee",
  templateUrl: "./app.employee.component.html",
  styleUrls: ["./app.employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  //Employee[] -
  employee: Employee[] = [
    {
      empId: 101,
      empName: "John",
      salary: 34567,
      photo: "assets/images/user1.jfif",
      status: true
    },
    {
      empId: 102,
      empName: "Mike",
      salary: 8767654,
      photo: "url",
      status: true
    }
  ];

  //boolean property used for disabled and enabled the button
  flag: boolean = true;
  heigth: number = 30;
  width: number = 30;
  title: string = "Employee Details";
  value: string = "Janhavi";
  constructor() {
    console.log("Employee component list loaded!");
  }

  ngOnInit() {}
}
