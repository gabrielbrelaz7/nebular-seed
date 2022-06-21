import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

	formError: boolean = false;

	formUsuario: FormGroup = new FormGroup({
	email: new FormControl ('', Validators.compose([Validators.required, Validators.email])),  
	senha: new FormControl ('', Validators.compose([Validators.required, Validators.minLength(6)])),    
	});


	constructor(
	private authService: AuthService,
	private router: Router,
	) {}

  ngOnInit(): void {
  }


  salvarUsuario() {

	if(this.formUsuario.invalid) {
		this.formError = true;
	} else {
		this.authService.login(this.formUsuario.value).subscribe((usuario: Usuario[]) => {
			console.log(usuario);
			if(usuario.length === 0) {
				// this.toastr.info('Usuário não autenticado', 'Não foi possível realizar o login');
			}
			else{
				window.localStorage.setItem('token', usuario[0].access_token);
				this.router.navigate(['/']);
				// this.toastr.success('Login efetuado com sucesso');
			}
		});
	}
	}

}
