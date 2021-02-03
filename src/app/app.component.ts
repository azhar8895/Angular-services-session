import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Services';

  constructor(private dataService: DataService, private apiService: ApiService){ }
  todoList:any = [];
  pushToList(){
    this.dataService.pushToList(
      {
        name: "shjfsd sddfdsddf",
        age: "20",
        sr: "5"
      }
    ).subscribe(
      status => {
      //   if(status){
      //   alert("push success");
      // } else{
      //     alert("push failed");
      // }
    }
    )
  this.apiService.callApi().subscribe(
    res => {
      console.log("res from api", res);
      this.todoList = res;
    }, err => {
      console.log("error from api", err);
    }
  )
  console.log("After res");
}
}
