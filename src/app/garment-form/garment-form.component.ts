import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from "@angular/forms";
import { ActivatedRoute, Router} from "@angular/router";
import {GarmentService} from "../services/garment.service";
import {Garment} from "../services/app-model";

@Component({
  selector: 'app-garment-form',
  templateUrl: './garment-form.component.html',
  styleUrls: ['./garment-form.component.scss']
})
export class GarmentFormComponent implements OnInit {
  item:Garment;
  form:FormGroup;

  constructor(private fb: FormBuilder,private service:GarmentService,private router: Router,private route: ActivatedRoute) {
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
     this.router.navigate(['/garments']).then();
  }

  public emptyItem():Garment{
    return {
			id:null,
			brand:'',
			cost:0,
			costDate:'',
			color:'',
			manufacturer:{
				id:null,
				name:'',
				website:'',
			},
			description:'',
			twoXCost:0,
			threeXCost:0,
		};
  }

  public createForm():FormGroup{
     return this.fb.group({
        "brand": [this.item.brand],
        "cost": [this.item.cost],
        "costDate": [this.item.costDate],
     });
  }
}
