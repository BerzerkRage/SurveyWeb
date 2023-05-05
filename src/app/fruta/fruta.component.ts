import { Component } from "@angular/core";
import { Fruta } from "./fruta";

@Component({
    selector : "fruta",
    templateUrl : "./fruta.component.html"
})

export class FurtaComponent {
    private sandia:Fruta = new Fruta( "Sandia",20,4,["Chile","Mexico"],true);

    public frutas: Array<Fruta> = [];

    ngOnInit() {
        this.frutas = [
            new Fruta( "Sandia",20,4.0,["Chile","Mexico"],true),
            new Fruta( "Manzana",3,0.2,["EE.UU","Mexico"],false),
            new Fruta( "Pera",4,0.3,["Argentina","Mexico"],true)
        ];
    }

    
    public get getSandia() : Fruta {
        return this.sandia; 
    }
    
}