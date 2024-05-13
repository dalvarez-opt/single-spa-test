import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'single-spa-app1';

  formGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      code: new FormControl('892340971645', null),
      name: new FormControl('Neba 300Mb Indirecta', null),
      category: new FormControl('NEBA', null),
      quantity: new FormControl(1, null)
    })
  }
}
