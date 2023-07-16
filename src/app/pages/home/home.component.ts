import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public title:string = "Inicio";

  constructor(
    private _router: Router
  ) {

  }

  goEncuesta() {
    this._router.navigate(['/survey']);
  }

  goResultado() {
    this._router.navigate(['/result']);
  }
}
