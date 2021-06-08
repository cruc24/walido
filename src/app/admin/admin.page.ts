import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { InsertPage } from '../helper/insert/insert.page';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  redirect(page: string){
    this.router.navigateByUrl('/admin/' + page);
  }


}
