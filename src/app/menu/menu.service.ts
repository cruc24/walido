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

  menu: BehaviorSubject<Piatto[]> = new BehaviorSubject<Piatto[]> ([
    {
      nome: 'pizza margherita1',
      ingredienti: ['pomodoro', 'mozzarella', 'origano', 'olio'],
      prezzo: 10,
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6jYE2QLe-hIQ2ITfc8zF0j6g7gD9nOO4TQ&usqp=CAU',
    },
    {
      nome: 'pizza margherita2',
      ingredienti: ['pomodoro', 'mozzarella', 'origano', 'olio'],
      prezzo: 10,
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6jYE2QLe-hIQ2ITfc8zF0j6g7gD9nOO4TQ&usqp=CAU',
    },{
      nome: 'pizza margherita3',
      ingredienti: ['pomodoro', 'mozzarella', 'origano', 'olio'],
      prezzo: 10,
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6jYE2QLe-hIQ2ITfc8zF0j6g7gD9nOO4TQ&usqp=CAU',
    },{
      nome: 'pizza margherita4',
      ingredienti: ['pomodoro', 'mozzarella', 'origano', 'olio'],
      prezzo: 10,
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6jYE2QLe-hIQ2ITfc8zF0j6g7gD9nOO4TQ&usqp=CAU',
    },
  ]);

  getMenu(){
    return this.menu.asObservable();
  }

  getDish(piatto:Piatto){
    return this.menu.pipe(
      take(1),
      map(dishes => {
        return { ...dishes.find(dish => dish.nome === piatto.nome)};
      }));
  }




  // getMenu(){
  //   return this.http.get("http://localhost:8080/menu");
  // }
}
