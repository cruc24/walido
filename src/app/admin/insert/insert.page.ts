import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.page.html',
  styleUrls: ['./insert.page.scss'],
})
export class InsertPage implements OnInit {
  formInput: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formInput = this.formBuilder.group({
      name: ['', []],
    }
    );
  }

}
