import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
	providedIn: 'root',
})
export class AuthService {

	constructor(private http: HttpClient) { }

	login(usuario: Usuario): Observable<Usuario[]> {
		return this.http.get<Usuario[]>(
			`http://localhost:3000/usuarios?email=${usuario.email}&senha=${usuario.senha}`
		); 
	}
  
}
