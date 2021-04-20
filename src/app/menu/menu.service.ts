import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Piatto } from '../models/piatto.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http : HttpClient) {}

  menu: BehaviorSubject<Piatto[]> = new BehaviorSubject<Piatto[]> ([]);

  getMenu(){
    
    return this.http.jsonp(
      "http://localhost:4000/deliveroo/menu", 'callback'
    );

    // menu.toPromise().then(res => {
    //   console.log("promise", res);
    // });

  }

  getDish(piatto:Piatto){
    return this.menu.pipe(
      take(1),
      map(dishes => {
        return { ...dishes.find(dish => dish.name === piatto.name)};
      }));
  }




  // getMenu(){
  //   return this.http.get("http://localhost:8080/menu");
  // }
}
