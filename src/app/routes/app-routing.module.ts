import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../layouts/home/home.component';
import { ErrorPageComponent } from '../layouts/error/error-page.component';


const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'auth', loadChildren: ()=> import('../features/auth/auth.module').then(a=>a.AuthModule), data: { parent: true}},
  { path:'home', component: HomeComponent },
  { path:'core', loadChildren: () => import('../core/core.module').then(m => m.CoreModule), data: { parent: true }},
  { path:'**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
