import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { IndicatorDetailsComponent } from './modules/indicator-details/indicator-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndicadorComponent } from './modules/components/indicador/indicador.component';
import { MaterialModule } from './material.module';
import { ListIndicadorComponent } from './modules/components/list-indicador/list-indicador.component';

@NgModule({
  declarations: [
    AppComponent,
    IndicadorComponent,
    ListIndicadorComponent,
    HomeComponent,
    IndicatorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
