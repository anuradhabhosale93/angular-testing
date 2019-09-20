import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

// const appRoutes: Routes=[
//   {path:'',component:LoginComponent},
//   {path:'register',component:RegisterComponent},
//   {path:'home',component:HomeComponent,
//   children:
//   [
//     {path:'expdetail',component:ExpdetailComponent}
//   ]
// }];

const appRoutes: Routes = [
  { path: '', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes), RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
