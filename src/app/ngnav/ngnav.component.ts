import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Logininfo } from '../loginstore/logininfo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../loginstore/logininfo.state';

//import { reducer } from '../loginstore/loginstateaction.action';
@Component({
  selector: 'app-ngnav',
  templateUrl: './ngnav.component.html',
  styleUrls: ['./ngnav.component.css']
})
export class NgnavComponent implements OnInit {
  constructor(private auth:AuthService,public route:Router,public store:Store<AppState>) { 
  }
  
  ngOnInit() {      
    this.store.select('login').subscribe( data => {
      console.log(data);
    });
  }

  signOut()
  {
    localStorage.removeItem('token');
    this.route.navigate(['']);
    
  }

}
