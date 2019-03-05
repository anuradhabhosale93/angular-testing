import { Component, OnInit, Input } from '@angular/core';
import { ExpenceService } from '../expence.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public exp:ExpenceService,public auth:AuthService,public route:Router,public toast:ToastrService) {
    
   }

   expData={desc:'',amt:'',expdate:'',note:''};
   id='';
   data=[];

  ngOnInit()
   {
      if(!localStorage.getItem('token'))
      {
        this.route.navigate(['']);
      }
      else{
        this.getExpen();
      }
  }
  addExpen()
  {
      this.exp.addExpences(this.expData).subscribe(response=>{
        this.toast.success("Expence Added Successfully","Success");
        this.getExpen();
      },err=>{
        if(err.status==422 || err.status==401)
        {
          this.toast.error(" Fields Required","Error!");
        }
        else if(err.status==500)
        {
          this.toast.error("Internal Server Error","Error!");
        }
        else{
          this.toast.error("Something went wrong","Error!");
        }
    });
  }

  deleteExpen(id)
  {
    
      this.exp.deleteExpences(id).subscribe(response=>{
        this.toast.success("Expence Deleted Successfully","Success");
        this.getExpen();
      },err=>{
        if(err.status==422 || err.status==401)
        {
          this.toast.error(" Fields Required","Error!");
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
  getExpen()
  {
    this.clear();
    this.exp.getExpences().subscribe(response=>{
      this.data=response;
    },
      err=>{
        if(err.status==422 || err.status==401)
        {
          this.toast.error(" Fields Required","Error!");
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
  clear()
  {
    this.expData.desc='';
    this.expData.amt='';
    this.expData.expdate='';
    this.expData.note='';
    this.id='';
  }
  

}
