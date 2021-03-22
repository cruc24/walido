import { Injectable } from '@angular/core';
import { Piatto } from '../models/piatto.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  menu: Piatto[] = [
    {
      nome: 'pizza margherita',
      ingredienti: ['pomodoro', 'mozzarella', 'origano', 'olio'],
      prezzo: 10,
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6jYE2QLe-hIQ2ITfc8zF0j6g7gD9nOO4TQ&usqp=CAU',
    },
    {
      nome: 'pizza margherita',
      ingredienti: ['pomodoro', 'mozzarella', 'origano', 'olio'],
      prezzo: 10,
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6jYE2QLe-hIQ2ITfc8zF0j6g7gD9nOO4TQ&usqp=CAU',
    },{
      nome: 'pizza margherita',
      ingredienti: ['pomodoro', 'mozzarella', 'origano', 'olio'],
      prezzo: 10,
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6jYE2QLe-hIQ2ITfc8zF0j6g7gD9nOO4TQ&usqp=CAU',
    },{
      nome: 'pizza margherita',
      ingredienti: ['pomodoro', 'mozzarella', 'origano', 'olio'],
      prezzo: 10,
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6jYE2QLe-hIQ2ITfc8zF0j6g7gD9nOO4TQ&usqp=CAU',
    },
  ];
}
