import { Component, OnInit } from '@angular/core';
import { Piatto } from '../models/piatto.model';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  constructor(private orderService: OrderService) {}

  ord: Piatto[] = [];
  tot: number = 0;

  ngOnInit() {
    this.orderService.order.subscribe((data) => {
      this.ord = data;
      this.tot = this.orderService.tot;
      console.log(data);
    });
  }

  ionViewWillEnter() {}

  removeFromOrder(piatto: Piatto) {
    this.orderService.remove(piatto);
  }
}
