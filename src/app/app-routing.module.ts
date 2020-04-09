import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { IndicadorComponent } from './modules/components/indicador/indicador.component';
import { IndicatorDetailsComponent } from './modules/indicator-details/indicator-details.component';


//const routes: Routes = [];

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'detail', component: IndicatorDetailsComponent
  },
  { path: '**', redirectTo: 'home' }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
