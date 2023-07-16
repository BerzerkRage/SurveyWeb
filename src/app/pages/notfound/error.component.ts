import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
    selector:'error',
    templateUrl: './error.component.html'
})

export class ErrorComponent {
    public title:string;

    constructor(
        private _router:Router
    ){
        this.title = "404 - Not Found"
    }

    redirect() {
        this._router.navigate(["/home"]);
    }
}