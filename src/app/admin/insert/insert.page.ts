import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment, lista_ingredienti } from 'src/environments/environment';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.page.html',
  styleUrls: ['./insert.page.scss'],
})
export class InsertPage implements OnInit {
  formInput: FormGroup;
  ingredienti = lista_ingredienti;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formInput = this.formBuilder.group({
      name: ['', []],
      ingredienti: ['', []],
      prezzo: ['', []],
      url: ['', []],
    });
  }

}
