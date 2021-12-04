import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductinfoService {

  constructor(private http: HttpClient) { }

  public getSeriesInfo(): Observable<any> {
    return this.http.get('https://content.viaplay.se/pc-se/serier/samtliga');
  }
}
