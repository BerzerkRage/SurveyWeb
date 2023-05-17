import { Component, Input } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component ({
    selector: "contact",
    templateUrl: "./contact.component.html"
})

export class ContactComponent {
   
    private _title = "Contact";
    public _paramOne!: string;
    
    @Input()
    public get title() : string {
        return this._title;
    }
    
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
    ) {
        
    }

    ngOnInit() {
        this._route.params.forEach((params: Params) => {
            this._paramOne = params['page'];
            console.log(params);
        })
    }

    redirect() {
        this._router.navigate(["/home"]);
    }
}