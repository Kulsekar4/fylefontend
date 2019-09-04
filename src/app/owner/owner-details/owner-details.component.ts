import { Component, OnInit } from '@angular/core';
// import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})
export class OwnerDetailsComponent implements OnInit {
public bankDetails:any;
public bankid:string;
  constructor() {
    // this.activatedRoute.params.subscribe((res)=>{
    //   this.bankid=res.id;
    // })
   }
  ngOnInit() {
   const def=localStorage.getItem('selectedbank');
    this.bankDetails=JSON.parse(def);
    console.log("def"+this.bankDetails.ifsc);
// this.bankDetails=abc;
// console.log("abc"+this.bankDetails);
// this.getDetails();
  }

// public getDetails(){
//   // this.bankDetails.forEach((val)=>{
//   //   if(val.ifsc===this.bankid){
//   //     console.log(val);
//   //   }
//   // })
// }


}
