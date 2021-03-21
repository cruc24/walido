import { Component, OnInit } from '@angular/core';
import { Piatto } from '../models/piatto.model';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menu: Piatto[] = [];
  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menu = this.menuService.menu;
    console.log(this.menu);
  }
}
