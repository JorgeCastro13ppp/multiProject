import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../layouts/home/home.component';
import { ErrorPageComponent } from '../layouts/error/error-page.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'auth', loadChildren: ()=> import('../features/auth/auth.module').then(a=>a.AuthModule), data: { parent: true},
  canActivate:[AuthGuard]
  },
  { path:'home', component: HomeComponent },
  { path:'core', loadChildren: () => import('../core/core.module').then(m => m.CoreModule), data: { parent: true },
  canActivate:[AuthGuard]
  },
  { path:'**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
