import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{HttpClientModule}from"@angular/common/http"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from 'src/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './login/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { UserlistingComponent } from './login/userlisting/userlisting.component';
import { UpdatepopupComponent } from './login/updatepopup/updatepopup.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    UserlistingComponent,
    UpdatepopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
BrowserAnimationsModule,
MaterialModule,
ReactiveFormsModule,
HttpClientModule,
ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
