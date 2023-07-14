import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SurveyComponent } from "./pages/survey/survey.component";
import { ResultComponent } from "./pages/result/result.component";
import { ErrorComponent } from "./components/error.component";

const appRoutes:Routes = [
    {path : 'survey', component: SurveyComponent},
    {path : 'result', component: ResultComponent},
    {path : '', component: SurveyComponent},
    {path : '**', component: ErrorComponent }
];

export const appRoutingProviders:any[] = []; 

export const routing:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);