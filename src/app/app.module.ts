import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { SectionButtonComponent } from './pages/section-button/section-button.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SectionInputComponent } from './pages/section-input/section-input.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    SectionButtonComponent,
    NotFoundComponent,
    SectionInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
