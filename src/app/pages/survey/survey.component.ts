import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { SurveyModel, MusicStyle } from "src/app/models/survey.model";

@Component({
    selector: "survey",
    templateUrl: "./survey.component.html"
})

export class SurveyComponent implements OnInit, OnDestroy {
    

    public title = "Encuesta";
    public listMusicStyles:Array<MusicStyle> = [];

    public surveyForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) {
        this.surveyForm = new FormGroup("");
        this.loadMusicStyles();

        this.surveyForm = this.formBuilder.group({
            idMusicStyle: [0,[Validators.required,Validators.min(1)]],
            email: ["",[Validators.required]]
        });
    }

    loadMusicStyles(): void {

    }

    ngOnDestroy(): void {

    }

    ngOnInit(): void {
        
    }

    sendSurvey() {
        throw new Error('Method not implemented.');
    }
}