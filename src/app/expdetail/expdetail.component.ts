import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { ExpenceService } from '../expence.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-expdetail',
  templateUrl: './expdetail.component.html',
  styleUrls: ['./expdetail.component.css']
})
export class ExpdetailComponent implements OnInit {

  constructor(public actroute:ActivatedRoute,public exp:ExpenceService,public toast:ToastrService,public route:Router) { }
  expdetails={desc:'',amt:'',expdate:'',note:'',id:''};

  ngOnInit() {
    

    if(!localStorage.getItem('token'))
    {
      this.route.navigate(['']);
    }
    else{
     
    this.exp.getExpencesById(this.actroute.snapshot.params['id']).subscribe(response=>{

          
          this.expdetails.desc=response.desc;
          this.expdetails.amt=response.amt;
          this.expdetails.expdate=response.expdate;
          this.expdetails.note=response.note;
          this.expdetails.id=response._id;

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
    // getExpencesById
}
  }

}
