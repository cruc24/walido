import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { MenuService } from 'src/app/menu/menu.service';
import { Piatto } from 'src/app/models/piatto.model';
import { environment, lista_ingredienti } from 'src/environments/environment';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.page.html',
  styleUrls: ['./insert.page.scss'],
})
export class InsertPage implements OnInit {

  ingredienti = lista_ingredienti;
  piatto: Piatto;
  title: string;

  constructor(private formBuilder: FormBuilder, private menuService: MenuService,
              private toast: ToastController, private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() { }

  newPiatto() {
    this.menuService.menu
      .pipe(take(1))
      .subscribe((piatti: Piatto[]) => {
        console.log(piatti);
        this.menuService.menu.next(([...piatti, this.piatto]));
        this.toast.create({
          position: 'bottom',
          duration: 3000,
          message: 'Elemento aggiunto correttamente.',
          color: 'success'
        }).then(toast => toast.present());
        this.router.navigateByUrl('/home/tabs/menu');
      });
  }

  close(){
    this.modalCtrl.dismiss();
  }

}
