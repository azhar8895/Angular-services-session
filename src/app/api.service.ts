import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public callApi(){
    return this.http.get("https://jsonplaceholde.typicode.com/todos");
  }
}
