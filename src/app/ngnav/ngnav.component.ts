import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngnav',
  templateUrl: './ngnav.component.html',
  styleUrls: ['./ngnav.component.css']
})
export class NgnavComponent implements OnInit {

  constructor(private auth:AuthService,public route:Router) { 
    this.username=this.auth.username;
      
  }
  display:boolean=true;
  public username='';
  ngOnInit() {
     
      if( !localStorage.getItem('token')) {
        this.display = false;
      }
      
  }

  signOut()
  {
    localStorage.removeItem('token');
    this.route.navigate(['']);
    
  }

}
