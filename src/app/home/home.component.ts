import { Component } from "@angular/core";
import { ContactService } from "../services/contact.service";

@Component ({
    selector: "home",
    templateUrl: "./home.component.html",
    providers:[ContactService]
})

export class HomeComponent {
    private _title = "Home";
    
    get title() : string {
        return this._title;
    }
    
    constructor(
        private _contactService:ContactService
    ){}

    ngOnInit() {
        this._title = this._contactService.test();
    }
}