import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {

  constructor(private http: HttpClient) { }

  public getIndicators(){
    return this.http.get(environment.apiUrl + '/get_last').toPromise();
  }

  public getAllValuesOfIndicator(keyValue: string){
    let params = new HttpParams();
        params = params.append('key', keyValue);
    return this.http.get(environment.apiUrl + '/get_detail/', {params: params} ).toPromise();
  }
}
