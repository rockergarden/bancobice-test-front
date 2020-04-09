import { Component, OnInit } from '@angular/core';
import { IndicatorsService } from '../../services/indicators.service';
import { IndicatorModel} from '../../models/indicator.model';
import {  Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  indicadores: any;
  cobre: IndicatorModel;
  dolar: IndicatorModel;
  euro: IndicatorModel;
  ipc: IndicatorModel;
  ivp: IndicatorModel;
  oro: IndicatorModel;
  uf: IndicatorModel;
  utm: IndicatorModel;
  yen: IndicatorModel;

  constructor(private indicatorsService : IndicatorsService, 
    private route: ActivatedRoute,
    private router : Router) { }
  

     ngOnInit(): void {
      sessionStorage.setItem('dataAll', '');
      this.indicatorsService.getIndicators().then((data)=>{
        this.indicadores = data;
        this.cobre = this.indicadores["cobre"];
        this.dolar = this.indicadores["dolar"];
        this.euro = this.indicadores["euro"];
        this.ipc = this.indicadores["ipc"];
        this.ivp = this.indicadores["ivp"];
        this.oro = this.indicadores["oro"];
        this.uf = this.indicadores["uf"];
        this.utm = this.indicadores["utm"];
        this.yen = this.indicadores["yen"];
      });
    
  }

  clicked(event){
    

    this.indicatorsService.getAllValuesOfIndicator(event).then((data)=>{
      sessionStorage.setItem('dataAll', JSON.stringify(data));
      this.router.navigate(['/detail']);
    });    
  }

}
