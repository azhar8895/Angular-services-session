import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private dataService: DataService) {
   }

  employeeList = [];
  ngOnInit() {
    this.dataService.getEmployee().subscribe(
      empList => {
        this.employeeList= empList;
      }
    )
  }

}
