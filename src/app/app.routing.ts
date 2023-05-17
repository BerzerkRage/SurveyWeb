import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FurtaComponent } from "./fruta/fruta.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { ComplaintComponent } from "./complaint/complaint.component";

const appRoutes:Routes = [
    {path : 'fruta', component: FurtaComponent},
    {path : 'contact', component: ContactComponent},
    {path : 'contact/:page', component: ContactComponent},
    {path : 'home', component: HomeComponent},
    {path : 'complaint', component: ComplaintComponent},
    {path : '**', component: HomeComponent }
];

export const appRoutingProviders:any[] = []; 

export const routing:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);