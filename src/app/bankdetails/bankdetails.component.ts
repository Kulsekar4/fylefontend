// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { RepositoryService } from '../shared/repository.service';
import {  OnInit,  AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource,  MatPaginator} from '@angular/material';
import { Owner, Bank } from '../_interface/owner.model';
import { Router } from '@angular/router';
import * as _ from 'lodash';
@Component({
  selector: 'app-bankdetails',
  templateUrl: './bankdetails.component.html',
  styleUrls: ['./bankdetails.component.css']
})
export class BankdetailsComponent implements OnInit {

  selectedValue: string;
  selected="MUMBAI";
  banks: Bank[] = [
    {value: 'Mumbai', viewValue: 'MUMBAI'},
    {value: 'Bangalore', viewValue: 'BANGALORE'},
    {value: 'Chennai', viewValue: 'CHENNAI'},
    {value:'Coimbatore',viewValue:'COIMBATORE'},
    {value:'Hyderabad',viewValue:'HYDERABAD'}
  ];
  displayedColumns = ['bank_name','bank_id', 'branch', 'address','details','update'];
  
  displayedColumnss = ['bank_name','bank_id', 'branch', 'address','details'];
  public dataSource = new MatTableDataSource<Owner>();
  public dataSourceFav = new MatTableDataSource<Owner>();
  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;
  constructor(private repoService: RepositoryService,  private router: Router) { }
  public redirectToDetails = (element: any) => {
    const abc=JSON.stringify(element);
    localStorage.setItem('selectedbank',abc);
    let url: string = `/company/${element.ifsc}`;
    this.router.navigate([url]);
  }
  ngOnInit() {
    this.getAllOwners("MUMBAI");
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  public getAllOwners = (city) => {
    console.log(city);
    this.repoService.getData('api/owner',city)
    .subscribe(res => {
      // localStorage.setItem('bankdetails',res);
      this.dataSource.data = res as Owner[];
    })
  }
  logData(row){
    // console.log(row);
  }
  
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  favourite(element){
    let xyz=JSON.parse(localStorage.getItem('fav'));
    if(!xyz){
      xyz=[];
      xyz.push(element);
    }else{
    xyz=_.uniqBy(xyz,'ifsc');
    if(!_.find(xyz, {ifsc:element.ifsc })) {
      xyz.push(element);
    }}
    let b=xyz.length;
    const abc=_.uniqBy(xyz,'ifsc');
    localStorage.setItem('fav',JSON.stringify(abc));
    console.log(xyz);
    this.dataSourceFav.data = xyz as Owner[];
  }

}
