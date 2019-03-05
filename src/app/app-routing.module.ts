import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ExpdetailComponent } from './expdetail/expdetail.component';
import { ExpeditComponent } from './expedit/expedit.component';
import { PagenotfoundcomponentComponent } from './pagenotfoundcomponent/pagenotfoundcomponent.component';
// const appRoutes: Routes=[
//   {path:'',component:LoginComponent},
//   {path:'register',component:RegisterComponent},
//   {path:'home',component:HomeComponent,
//   children:
//   [
//     {path:'expdetail',component:ExpdetailComponent}
//   ]
// }];

const appRoutes: Routes=[
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'home/expdetail/:id',component:ExpdetailComponent},
  {path:'home/expdetail/edit/:id',component:ExpeditComponent},
  { path: '**', component: PagenotfoundcomponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
