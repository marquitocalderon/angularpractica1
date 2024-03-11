import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { interfaceLogin } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlApi = "https://backend-vercel-psi.vercel.app/auth/login"

  constructor(private http: HttpClient) { }

  postLogin(datosRecolectados: interfaceLogin): Observable<interfaceLogin> {
    // Asegúrate de que la solicitud HTTP devuelve un objeto de tipo interfaceLogin
    const respuesta =  this.http.post<interfaceLogin>(this.urlApi, datosRecolectados);
    return respuesta
  }
}
