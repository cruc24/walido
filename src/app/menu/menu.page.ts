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
    res;
  ngOnInit() {
    // this.menu = this.menuService.menu;
    this.menuService.getMenu().subscribe((data) => {
      console.log("menu page", data);
      this.res = data;
    });
    console.log("init page", this.res)
  }

  modifyIngredients(piatto: Piatto) {
    this.modalController.create({
      component: ModalComponent,
      componentProps: { piatto: piatto }
    }).then(elem => {
      elem.present();
      return elem.onDidDismiss();
    });
}

}
