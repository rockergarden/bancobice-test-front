import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IndicatorModel } from '../../../models/indicator.model';
import * as moment from 'moment';

@Component({
  selector: 'app-indicador',
  templateUrl: './indicador.component.html',
  styleUrls: ['./indicador.component.scss']
})
export class IndicadorComponent implements OnInit {
  @Input() indicatorData: IndicatorModel;
  @Output() selectedKey = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
    this.indicatorData.date = moment.unix(parseInt(this.indicatorData.date)).locale('es').format( "DD/MM/YYYY");
    this.indicatorData.name = this.indicatorData.name.length > 25 ? this.indicatorData.name.substring(0,25) + "..." : this.indicatorData.name;
  }

  clicked(keyValue: string){
    
    this.selectedKey.emit(this.indicatorData.key);
    
  }
}
