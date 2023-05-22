import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from "@angular/common/http";
import { routing,appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FurtaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ComplaintComponent } from "./complaint/complaint.component";

import { ConversorPipe } from './pipes/coversor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FurtaComponent,
    HomeComponent,
    ContactComponent,
    ComplaintComponent,
    ConversorPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
