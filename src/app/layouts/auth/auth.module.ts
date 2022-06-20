import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbInputModule, NbLayoutModule } from '@nebular/theme';

import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbCheckboxModule,
    AuthRoutingModule,
    NbDialogModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
