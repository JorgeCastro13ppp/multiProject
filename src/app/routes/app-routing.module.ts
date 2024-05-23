import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../templates/home/home.component';
import { ErrorPageComponent } from '../common/pages/error-page/error-page.component';


const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'auth', loadChildren: ()=> import('../modules/auth/auth.module').then(a=>a.AuthModule), data: { parent: true}},
  { path:'home', component: HomeComponent },
  { path:'core', loadChildren: () => import('../modules/core/core.module').then(m => m.CoreModule), data: { parent: true }},
  { path:'**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
