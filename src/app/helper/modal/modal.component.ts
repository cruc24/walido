import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Piatto } from 'src/app/models/piatto.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor() { }

  piatto : Piatto;

  ngOnInit() {
    console.log("piatto", this.piatto);
  }

// TO DO: creare una lista di tutti gli ingredienti possibili così da fare checkare quelli che sono del piatto scelto

}
