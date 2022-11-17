import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { IntlInputPhoneModule } from 'intl-input-phone';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ModalOneComponent } from './components/modals/registration/modal-one/modal-one.component';
import { ModalTwoComponent } from './components/modals/registration/modal-two/modal-two.component';
import { ModalThreeComponent } from './components/modals/registration/modal-three/modal-three.component';
import { ModalFourComponent } from './components/modals/registration/modal-four/modal-four.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ModalOneComponent,
    ModalTwoComponent,
    ModalThreeComponent,
    ModalFourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    IntlInputPhoneModule,
    FormsModule,
    HttpClientModule,
    Ng2TelInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
