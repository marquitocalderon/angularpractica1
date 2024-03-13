import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiservicioService {

  constructor(private http : HttpClient) {}

  private url = import.meta.env.NG_APP_API + '/usuarios';


  getData(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
