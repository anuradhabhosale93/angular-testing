import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { Logininfo } from '../loginstore/logininfo.model';
import { Observable } from 'rxjs';
import * as LoginActions from '../loginstore/loginstateaction.action'; 
import { AppState } from '../loginstore/logininfo.state';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private auth:AuthService,public route:Router, public toast:ToastrService,public store:Store<AppState>) { }
  logindata={ usernameOrEmail:'',password:''};

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  ngOnInit() {
      
      this.store.dispatch(new LoginActions.LoginstateAction({username:this.logindata.usernameOrEmail,
        display:false}))
  }

  loginuser()
  {
   
      this.auth.login(this.logindata).subscribe(data=>{
        localStorage.setItem('token',data.token);
        this.toast.success("Login Successfully","Success");
        this.store.dispatch(new LoginActions.LoginstateAction({username:this.logindata.usernameOrEmail,
          display:true}));

       console.log(this.store.select('login'));
       this.route.navigate(['/home']);

      },err=>{
        if(err.status==422 || err.status==401)
        {
          this.toast.error("UserName or password incorrect","Error!");
        }
        else if(err.status==500)
        {
          this.toast.error("Internal Server Error","Error!");
        }
        else{
          this.toast.error("Something went wrong","Error!");
        }
        
      })
  }


}
