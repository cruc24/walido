import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  piatto: Piatto = {nome: '', ingredienti: [], prezzo: 0, qta: 1, imageUrl: ''};
  menu = this.menuService.menu;

  constructor(private formBuilder: FormBuilder, private menuService: MenuService) { }

  ngOnInit() { }

}
