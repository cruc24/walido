import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MenuService } from 'src/app/menu/menu.service';
import { Piatto } from 'src/app/models/piatto.model';
import { OrderService } from 'src/app/order/order.service';
import { environment, lista_ingredienti } from 'src/environments/environment';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private menuService: MenuService,
    private orderService: OrderService,
    private router: Router) { }

  ingredient: string;
  ingrs: string[] = [];
  piatto: Piatto;
  ingredienti = lista_ingredienti;

  ngOnInit() {

  }

  addToMenu() {
    this.modalCtrl.dismiss();
    this.router.navigateByUrl("./home/tabs/menu");
    this.orderService.add(this.piatto);
  }

  // TO DO: creare una lista di tutti gli ingredienti possibili così da fare checkare quelli che sono del piatto scelto
  onChangeCategory(event, cat: string) {
    if (event.target.checked) {
      if (!this.piatto.ingredienti.find(elem => elem === cat)) {
        this.piatto.ingredienti.push(cat);
      }
    }
    if (!event.target.checked) {
      if (this.piatto.ingredienti.find(elem => elem === cat)) {
        this.piatto.ingredienti = this.piatto.ingredienti.filter(elem => elem !== cat);
      }
    }
  }

  searchIngredient(ingrediente: string): Boolean {
    return this.piatto.ingredienti.findIndex(elem => elem === ingrediente) !== -1;
  }

}
