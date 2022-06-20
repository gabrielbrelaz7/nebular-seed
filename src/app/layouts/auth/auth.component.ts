import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

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

    console.log(this.formUsuario.controls.email.errors.email)

		// this.authService.login(this.formUser.value).subscribe((usuario: Usuario[]) => {
      
		// 	if(usuario.length === 0) {
		// 		this.toastr.info('Usuário não autenticado', 'Não foi possível realizar o login');
		// 	}
		// 	else{
		// 		window.localStorage.setItem('token', usuario[0].access_token);
		// 		window.localStorage.setItem('nome', usuario[0].nome);
		// 		this.router.navigate(['/']);
		// 		this.toastr.success('Login efetuado com sucesso');
		// 	}
      
		// });

	}

}
