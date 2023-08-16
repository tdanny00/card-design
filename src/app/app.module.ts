import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { CardComponent } from './components/main-card/card/card.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, CommonModule, HttpClientModule],
  declarations: [AppComponent, MainCardComponent, CardComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
