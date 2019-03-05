import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  styles: [` h3 {
    color:blue;
  }`]
})
export class AppComponent implements OnInit{
  serverId = 20;
  serverStatus='offline';
  

ngOnInit(){
 
}
getserverStatus()
{
  return this.serverStatus;
}
/*
ontype(event:Event)
{
    this.fname=(<HTMLInputElement>event.target).value;
}*/

}
