import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from "@angular/forms";
import { ActivatedRoute, Router} from "@angular/router";
import {ManufacturerService} from "../services/manufacturer.service";
import {Manufacturer} from "../services/app-model";

@Component({
  selector: 'app-manufacturer-form',
  templateUrl: './manufacturer-form.component.html',
  styleUrls: ['./manufacturer-form.component.scss']
})
export class ManufacturerFormComponent implements OnInit {
  item:Manufacturer;
  form:FormGroup;

  constructor(private fb: FormBuilder,private service:ManufacturerService,private router: Router,private route: ActivatedRoute) {
    this.item = this.emptyItem();
    this.form = this.createForm();
  }

  ngOnInit(): void {
     let id = this.route.snapshot.paramMap.get('id');
     if(id){
         this.service.getById(id).subscribe(i=>{
             this.item = i;
             this.form = this.createForm();
         });
     }
  }

  public save() {
    this.service.save(Object.assign({}, this.item,this.form.getRawValue())).subscribe(()=>{
        this.back();
    });
  }

  public back(){
     this.router.navigate(['/manufacturers']).then();
  }

  public emptyItem():Manufacturer{
    return {
			id:null,
			name:'',
			website:'',
		};
  }

  public createForm():FormGroup{
     return this.fb.group({
        "name": [this.item.name],
        "website": [this.item.website],
     });
  }
}
