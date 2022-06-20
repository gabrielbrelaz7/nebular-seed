import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbDialogModule } from '@nebular/theme';
import { NbLayoutModule, NbContextMenuModule, NbActionsModule, NbMenuModule } from '@nebular/theme';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    NbDialogModule.forRoot(),
    HomeRoutingModule,
    NbLayoutModule,
    NbContextMenuModule,
    NbActionsModule,
    NbMenuModule.forRoot(),
  ]
})
export class HomeModule { }
