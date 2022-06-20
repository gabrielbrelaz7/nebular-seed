import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbInputModule, NbLayoutModule } from '@nebular/theme';

import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';

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
    
  ]
})
export class AuthModule { }
