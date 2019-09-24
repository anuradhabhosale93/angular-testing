import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, public route: Router, ) { }
  logindata = { usernameOrEmail: '', password: '' };
  clicked = false;

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  ngOnInit() {

  }

  loginuser() {

    this.auth.login(this.logindata).subscribe(data => {
      localStorage.setItem('token', data.token);
      console.log("success");
      this.clicked = true;
      // this.toast.success("Login Successfully", "Success");

    }, err => {
      if (err.status == 422 || err.status == 401) {

        // this.toast.error("UserName or password incorrect", "Error!");
      }
      else if (err.status == 500) {
        // this.toast.error("Internal Server Error", "Error!");
      }
      else {
        // this.toast.error("Something went wrong", "Error!");
      }

    })
  }


}
