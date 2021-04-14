import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Piatto } from '../models/piatto.model';
import { OrderService } from '../order/order.service';
import { MenuService } from './menu.service';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../helper/modal/modal.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menu: Piatto[];
  constructor(
    private menuService: MenuService,
    private orderService: OrderService,
    private modalController: ModalController) { }

  ngOnInit() {
    // this.menu = this.menuService.menu;
    this.menuService.getMenu().subscribe((data) => {
      this.menu = data;
      console.log(this.menu);
    });
  }

  addToMenu(piatto: Piatto) {
    this.orderService.add(piatto);
  }

  modifyIngredients(piatto: Piatto) {
    this.modalController.create({
      component: ModalComponent,
      componentProps: { piatto: piatto }
    }).then(elem => {
      elem.present();
      setTimeout(() => console.log("aspetta"), 200);
      elem.dismiss();
    });
}

}
