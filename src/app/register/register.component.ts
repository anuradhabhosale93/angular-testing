import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }
  @Input () regData={firstName:'',lastName:'',email:'',username:'',password:''};
 
  ngOnInit() {
    
  }

  userRegister()
  {
      this.auth.newRegister(this.regData).subscribe((data)=>{
        console.log(data);
        this.router.navigate(['/']);
  }, err => {
    console.log(err);
    
    
  });
  }
}
