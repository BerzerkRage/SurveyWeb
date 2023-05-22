import { Component } from "@angular/core";
import { Complaint } from "./complaint";
import { TypeComplaint } from "./typeComplaint";
import { Router, ActivatedRoute } from "@angular/router";

import { RequestExamples } from "../services/requestexpample.service";

@Component({
    selector: "complaint",
    templateUrl: "./complaint.component.html"
})

export class ComplaintComponent {
    
    public title = "Complaint";
    public complaint: Complaint;
    public typeComplaint:Array<TypeComplaint>;
    public selectedType!: TypeComplaint;
   
    constructor(
        private requestExamples:RequestExamples
    ){
        this.complaint = new Complaint("","","");
        this.typeComplaint = [];
    }

    ngOnInit() {
        this.loadTypes();
    }

    private loadTypes() {
        let list = [
            new TypeComplaint(1,"Tipo 1"),
            new TypeComplaint(2,"Tipo 2"),
            new TypeComplaint(3,"Type 3")]
        this.typeComplaint = list;
    }

    sendComplaint = () => {
        alert(this.printComplaint());
        this.complaint = new Complaint("","","");
    }

    private printComplaint = ():string => {
        this.requestExamples.sendComplaint(this.complaint);
        this.requestExamples.getPosts().subscribe(
            (response:any) => {
                console.log(response);
            }
        );
        this.requestExamples.postsPipe().subscribe(
            (res) => {
                console.log(res);
            },(err) => {
                alert("Something goes wrong in service client...",);
            }
        );
        return this.complaint.email+"\n"
                +this.complaint.type+"\n"
                +this.complaint.message;
    }
}