import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private employeeList = [
    {
      name: "ajkajdjjas whfshjfjs",
      age: "35",
      sr: "1"
    },
    {
      name: "sdhfshdjfj",
      age: "20",
      sr: "2"
    },
    {
      name: "dksdkjfsdkjf",
      age: "18",
      sr: "3"
    },
    {
      name: "dssssss",
      age: "30",
      sr: "4"
    },
  ]

  public getEmployee(): Observable<{ name: string; age: string; sr: string; }[]>{
    return of(this.employeeList);
  }

  public pushToList(value): Observable<Boolean>{
    const arrLength = this.employeeList.length;
    this.employeeList.push(value);
    if(arrLength == this.employeeList.length){
      return of(false);
    } else{
      return of(true);
    }
  }
}
