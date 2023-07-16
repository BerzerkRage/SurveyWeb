import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SurveyComponent } from "./pages/survey/survey.component";
import { ResultComponent } from "./pages/result/result.component";
import { HomeComponent } from "./pages/home/home.component";

const appRoutes:Routes = [
    {path : 'survey', component: SurveyComponent},
    {path : 'result', component: ResultComponent},
    {path : 'home', component: HomeComponent},
    {path : '', component: HomeComponent},
    {path : '**', component: HomeComponent }
];

export const appRoutingProviders:any[] = []; 

export const routing:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);