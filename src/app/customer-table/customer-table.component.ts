import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from "@angular/forms";
import { ActivatedRoute, Router} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";
import {CustomerService} from "../services/customer.service";
import {Customer} from "../services/app-model";

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit {

  private _currentSearchValue:string ='';
  private _currentPage: number = 1;
  private _pageSize: number = 20;
  public _dataLength: number = 0;

  dataSource:Customer[]  = [];

  tableColumns = [
    'id',
    'name',
    'email',
    'phone',
    'street1',
    'action'
  ];

  constructor(private fb: FormBuilder,private service:CustomerService,private router: Router,private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.search();
  }

  public filterList(searchParam: string): void {
    this._currentSearchValue = searchParam;
    this._currentPage = 1;
    this.search();
  }

  search() {
    this.service.search(this._currentSearchValue,this._currentPage -1,this._pageSize).subscribe((p)=>{
      this.dataSource = p.content;
      this._dataLength = p.totalElements;
    })
  }

  add(){
    this.router.navigate(['/customer']);
  }

  rowClicked(row:any){
      let url = '/customer/' + row['id'];
      this.router.navigate([url]);
  }

  delete(element:any) {
      this.service.removeById(element.id).subscribe((t)=>{
        this.search();
      });
  }

  clone(element:any){
      this.service.getById(element.id).subscribe((t)=>{
        t.id = null;
        this.service.save(t).subscribe(t=>{
          this.search();
        })
      });
  }

  handlePage($event: PageEvent) {
    this._currentPage = $event.pageIndex + 1;
    this._pageSize = $event.pageSize;
    return this.search();
  }
}
