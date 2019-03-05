import { Component, OnInit } from '@angular/core';
import { ExpenceService } from '../expence.service';
import { Router,ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-expedit',
  templateUrl: './expedit.component.html',
  styleUrls: ['./expedit.component.css']
})
export class ExpeditComponent implements OnInit {

  constructor(public route:Router,public activeroute:ActivatedRoute,public exp:ExpenceService,public toast:ToastrService) { }
  expData={desc:'',amt:'',expdate:'',note:'',id:''};
  
  ngOnInit() {
    if(!localStorage.getItem('token'))
    {
      this.route.navigate(['']);
    }
    else{
    
    this.exp.getExpencesById(this.activeroute.snapshot.params['id']).subscribe(response=>{
      this.expData.desc=response.desc;
      this.expData.amt=response.amt;
      this.expData.expdate=response.expdate;
      this.expData.note=response.note;
      this.expData.id=response._id;
      console.log("updated date="+this.expData.expdate);
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
      console.log(err);
      this.toast.error("Something went wrong","Error!");
      console.log(err);
    }
});
  }
}

expUpdate(id)
{
      this.exp.updateExpences(id,this.expData).subscribe(response=>
        {
          this.toast.success("Expence Updated Successfully","Success");
           // this.route.navigate['/home/expdetail/'];
            this.route.navigate(['/home/expdetail/'+id]);
           // home/expdetail/:id
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


}
