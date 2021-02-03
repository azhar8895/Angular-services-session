import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {

  constructor(private dataService: DataService) { }

  employeeList = [];
  ngOnInit() {
    this.dataService.getEmployee().subscribe(
      empList => {
        this.employeeList = empList;
      }
    )
    // this.employeeList = ;
  }
}
