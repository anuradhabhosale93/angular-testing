import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private auth:AuthService,public route:Router, public toast:ToastrService) { }
  logindata={ usernameOrEmail:'',password:''};

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  ngOnInit() {
      
  }

  loginuser()
  {
   
      this.auth.login(this.logindata).subscribe(data=>{
        localStorage.setItem('token',data.token);
        this.toast.success("Login Successfully","Success");
      //   console.log("response of="+JSON.stringify(data.token));
      //  console.log('token get success='+localStorage.getItem('token'));
        //this.auth.display=true;
        this.auth.username=data.username;
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
