import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { InsertPage } from 'src/app/helper/insert/insert.page';
import { MenuService } from 'src/app/menu/menu.service';
import { Piatto } from 'src/app/models/piatto.model';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.page.html',
  styleUrls: ['./edit-menu.page.scss'],
})
export class EditMenuPage implements OnInit {

  menu: Piatto[];

  constructor(private menuService: MenuService, private toast: ToastController,
              private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
    this.menuService.getMenu().subscribe((data) => {
      this.menu = data;
    });
  }

  removePiatto(piatto: Piatto){
    this.menuService.menu.pipe(
      take(1)).subscribe((piatti: Piatto[]) => {
        this.menuService.menu.next(piatti.filter(elem => elem.nome !== piatto.nome));
        this.toast.create({
          position: 'bottom',
          duration: 3000,
          message: 'Elemento rimosso correttamente.',
          color: 'success'
        }).then(toast => toast.present());
      });
  }

  openModal(piatto?: Piatto){
    if (!piatto){
      piatto = { nome: '', ingredienti: [], prezzo: null, qta: 1, imageUrl: '' };
    }
    this.modalCtrl.create({
      component: InsertPage,
      componentProps: {piatto},
      cssClass: 'modal',
      backdropDismiss: true,
    }).then(modal => modal.present());
  }

}
