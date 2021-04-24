import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { take, map, retry, catchError } from 'rxjs/operators';

import { Piatto } from '../models/piatto.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http : HttpClient) {}
  private baseUri: string = '/deliveroo';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  menu: BehaviorSubject<Piatto[]> = new BehaviorSubject<Piatto[]> ([]);

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getMenu(){
    
    return this.http.get(
      `${this.baseUri}/menu`, { headers: this.headers }
    ).pipe(
      catchError(this.handleError) // then handle the error
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
