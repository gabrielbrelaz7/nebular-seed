import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from 'src/app/modules/homepage/homepage.component';
import { QueFacoComponent } from 'src/app/modules/que-faco/que-faco.component';
import { SobreMimComponent } from 'src/app/modules/sobre-mim/sobre-mim.component';
import { TopoComponent } from 'src/app/modules/topo/topo.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,

    children: [
      {
        path:'',
        component: HomepageComponent,
      },

      {
        path:'topo',
        component: TopoComponent,
      },

      {
        path:'sobre-mim',
        component: SobreMimComponent,
      },

      {
        path:'o-que-faco',
        component: QueFacoComponent,
      },


    ],

  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
