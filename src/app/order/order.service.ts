import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Order } from '../models/order.model';
import { Piatto } from '../models/piatto.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  order : BehaviorSubject<Piatto[]>= new BehaviorSubject<Piatto[]>([]);
  public tot:number=0

  getOrders(){
    return this.order.asObservable();
  }

  getOrder(piatto:Piatto){
    return this.order.pipe(
      take(1),
      map(dishes => {
        return { ...dishes.find(dish => dish.name === piatto.name)};
      }));
  }


  add(piatto : Piatto){
    this.tot += piatto.price;
    this.order.next([...this.order.getValue(),piatto]);
  }

  remove(piatto:Piatto){
    this.tot -= piatto.price;
    this.order.next(this.order.getValue().filter(elem=>elem.name !== piatto.name));
  }



}
