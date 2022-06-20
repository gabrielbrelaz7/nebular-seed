import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from 'src/app/modules/homepage/homepage.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

    children: [
      {
        path:'',
        loadChildren: () => import('./../../modules/homepage/homepage.module').then(m => m.HomepageModule),
      }
    ]

  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
