import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SurveyComponent } from './survey.component';
import { SurveyService } from 'src/app/services/survey.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { MusicStyle } from 'src/app/models/survey.model';

describe('SurveyComponent', () => {
  let component: SurveyComponent;
  let fixture: ComponentFixture<SurveyComponent>;
  let surveyService: SurveyService;

  const musicStyles:Array<MusicStyle> = [
    {
        "id": 1,
        "nombre": "Rock",
        "activado": true
    },
    {
        "id": 2,
        "nombre": "Pop",
        "activado": true
    },
    {
        "id": 3,
        "nombre": "Clásica",
        "activado": true
    },
    {
        "id": 4,
        "nombre": "Salsa",
        "activado": true
    },
    {
        "id": 6,
        "nombre": "Electronica",
        "activado": true
    }
];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SurveyComponent],
      providers: [SurveyService, FormBuilder],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyComponent);
    component = fixture.componentInstance;
    surveyService = TestBed.inject(SurveyService);
    fixture.detectChanges();
  });


  it('Cargar Estilos Musicales', () => {
    spyOn(surveyService, 'getEstilosMusicales').and.returnValue(of(musicStyles));
    component.loadMusicStyles();
    expect(component.listMusicStyles).toEqual(musicStyles);
  });

  it('Crear de Ecuesta', () => {
    const encuesta = { email: 'test@example.com', idMusicStyle: 1 };
    spyOn(surveyService, 'sendEstiloMusicalFavorito').and.returnValue(of(true));

    component.surveyForm.get('email')!.setValue(encuesta.email);
    component.surveyForm.get('estiloMusical')!.setValue(encuesta.idMusicStyle);
    component.sendSurvey();

    expect(surveyService.sendEstiloMusicalFavorito).toHaveBeenCalledWith(encuesta);
    expect(window.alert).toHaveBeenCalledWith('Se ha guardado la informacion correctamente.');

  });

  it('Crear Ecuesta', () => {
    const encuesta = { email: 'test@example.com', idMusicStyle: 1 };
    spyOn(surveyService, 'sendEstiloMusicalFavorito').and.returnValue(of(true));

    component.surveyForm.get('email')!.setValue(encuesta.email);
    component.surveyForm.get('estiloMusical')!.setValue(encuesta.idMusicStyle);
    component.sendSurvey();

    expect(surveyService.sendEstiloMusicalFavorito).toHaveBeenCalledWith(encuesta);
    expect(window.alert).toHaveBeenCalledWith('Se ha guardado la informacion correctamente.');
    
  });

});