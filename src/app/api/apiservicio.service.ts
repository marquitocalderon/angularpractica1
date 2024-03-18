import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiservicioService {

  constructor(private http: HttpClient) { }

  // Método para realizar la consulta a la API
  public getApi(url: string): Observable<any> {
    return this.http.get(url);
  }

  public postApi(url: string, formData: FormData): Observable<any> {
    return this.http.post(url, formData);
  }

  public postWord(url: string, datos: any): Observable<any> {

    const options = {
      headers: new HttpHeaders(),
      responseType: "blob" as "json" // Solicita la respuesta como un Blob
    };
    return this.http.post(url, datos, options);
  }

}
