import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NameComponent } from './name/name.component';
import { IdentityComponent } from './identity/identity.component';
import { DameComponent } from './dame/dame.component';
import { AvatarComponent } from './avatar/avatar.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ValidateComponent } from './conponents/validate/validate.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NameComponent,
    IdentityComponent,
    DameComponent,
    AvatarComponent,
    FormComponent,
    ValidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
