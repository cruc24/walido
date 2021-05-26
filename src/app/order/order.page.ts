import { Component, OnInit } from '@angular/core';
import { Piatto } from '../models/piatto.model';
import { OrderService } from './order.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  constructor(private orderService: OrderService) {}

  ord: Piatto[] = [];
  tot: number = 0;
  strikeCheckout: any = null;

  ngOnInit() {
    this.orderService.order.subscribe((data) => {
      this.ord = data;
      this.tot = this.orderService.tot;
      console.log(data);
    });
    this.stripePaymentGateway();

  }

  ionViewWillEnter() {}

  removeFromOrder(piatto: Piatto) {
    this.orderService.remove(piatto);
  }

  checkout(amount) {
    const strikeCheckout = (<any>window).StripeCheckout.configure({
      key: environment.stripe_key,
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken)
        alert('Stripe token generated!');
      }
    });
  
    strikeCheckout.open({
      name: 'RemoteStack',
      description: 'Payment widgets',
      amount: amount * 100
    });
  }

  stripePaymentGateway() {
    if(!window.document.getElementById('stripe-script')) {
      const scr = window.document.createElement("script");
      scr.id = "stripe-script";
      scr.type = "text/javascript";
      scr.src = environment.stripe_checkout_src;

      scr.onload = () => {
        this.strikeCheckout = (<any>window).StripeCheckout.configure({
          key: environment.stripe_key,
          locale: 'auto',
          token: function (token: any) {
            console.log(token)
            alert('Payment via stripe successfull!');
          }
        });
      }
        
      window.document.body.appendChild(scr);
    }
  }
}
