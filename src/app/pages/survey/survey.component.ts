import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from "@angular/common";

import { Router } from '@angular/router';

import { SurveyService } from "src/app/services/survey.service";

import { SurveyModel, MusicStyle } from "src/app/models/survey.model";

@Component({
    selector: "survey",
    templateUrl: "./survey.component.html"
})

export class SurveyComponent implements OnInit, OnDestroy {

    public title = "Encuesta";
    public listMusicStyles: Array<MusicStyle> = [];

    public surveyForm: FormGroup;
    private surveyModel!:SurveyModel;

    constructor(
        private _router: Router,
        private formBuilder: FormBuilder,
        private location: Location,
        private _surveyService:SurveyService
    ) {
        this.surveyForm = new FormGroup("");
        this.surveyForm = this.formBuilder.group({
            estiloMusical: [0, [Validators.required, Validators.min(1)]],
            email: ["", [Validators.required,Validators.maxLength(256),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
        });

    }

    loadMusicStyles(): void {
        this._surveyService.getEstilosMusicales().subscribe(response => {
            if (response.length > 0) {
                this.listMusicStyles = response;
            }
        })
    }

    ngOnDestroy(): void {

    }

    ngOnInit(): void {
        this.loadMusicStyles();
    }

    sendSurvey() {
        this.surveyModel = {
            email: this.surveyForm.get('email')!.value,
            idMusicStyle: this.surveyForm.get('estiloMusical')!.value
        };
        this._surveyService.sendEstiloMusicalFavorito(this.surveyModel).subscribe(response => {
            if (response) {
                window.alert("Se ha guardado la informacion correctamente.");
                this.surveyForm.get('email')!.reset(),
                this.surveyForm.get('estiloMusical')!.reset(0);
                this._router.navigate(["/result"]);
            } else {
                window.alert("No se ha podido guardar la informacion.");
            }
        })
    }

    back() {
        this.location.back();
    }

    bootstrapValidField(formName: string): string {
        let classValidation = "";
        if(this.surveyForm.get(formName)!.touched && this.surveyForm.get(formName)!.invalid) {
            classValidation = "is-invalid";
        }
        if(this.surveyForm.get(formName)!.touched && this.surveyForm.get(formName)!.valid) {
            classValidation = "is-valid";
        }
        return classValidation;
    }
}