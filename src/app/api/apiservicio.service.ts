import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiservicioService {

  constructor(private http : HttpClient) {}

  // Método para realizar la consulta a la API
  public getApi(headers: HttpHeaders, url: string): Observable<any> {
    return this.http.get(url, { headers });
  }
}
