import { Injectable } from '@angular/core';
import * as jwt from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  decodeToken() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwt.jwtDecode(token) as any;
      return decodedToken
    } else {
      return false;
    }
  }

  tieneToken() {
    const token = localStorage.getItem('token');
    if (token) {
      return token 
    } else {
      return false;
    }
  }


  

  constructor() { }
}