import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-list-indicador',
  templateUrl: './list-indicador.component.html',
  styleUrls: ['./list-indicador.component.scss']
})
export class ListIndicadorComponent implements OnInit {
  @Input() data: any;
  keyValue: any = [];
  obj: any;
  constructor() { }

  ngOnInit(): void {

    this.obj = JSON.parse(this.data);
    for (var type in this.obj.values) {
      let item = ({
        key: '',
        value: ''
      });
      item.key = moment.unix(parseInt(type)).locale('es').format( "DD/MM/YYYY");
      item.value = this.obj.values[type];
      this.keyValue.push(item);
    }
  }


}
