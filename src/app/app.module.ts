import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Route, Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';
import { ExpenceService } from './expence.service';
import { ExpdetailComponent } from './expdetail/expdetail.component';
import { ExpeditComponent } from './expedit/expedit.component';
import { NgnavComponent } from './ngnav/ngnav.component';
import { PagenotfoundcomponentComponent } from './pagenotfoundcomponent/pagenotfoundcomponent.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ExpdetailComponent,
    ExpeditComponent,
    NgnavComponent,
    PagenotfoundcomponentComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers:
  [AuthService,ExpenceService],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

