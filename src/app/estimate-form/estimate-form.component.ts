import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from "@angular/forms";
import { ActivatedRoute, Router} from "@angular/router";
import {EstimateService} from "../services/estimate.service";
import {Estimate} from "../services/app-model";

@Component({
  selector: 'app-estimate-form',
  templateUrl: './estimate-form.component.html',
  styleUrls: ['./estimate-form.component.scss']
})
export class EstimateFormComponent implements OnInit {
  item:Estimate;
  form:FormGroup;

  constructor(private fb: FormBuilder,private service:EstimateService,private router: Router,private route: ActivatedRoute) {
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
     this.router.navigate(['/estimates']).then();
  }

  public emptyItem():Estimate{
    return {
			id:null,
			customer:{
				id:null,
				name:'',
				email:'',
				phone:'',
				street1:'',
				street2:'',
				city:'',
				state:'',
				zipcode:'',
				tenant:{
					id:null,
					name:'',
					email:'',
					phone:'',
					street1:'',
					street2:'',
					city:'',
					state:'',
					zipcode:'',
				},
			},
			description:'',
			dateDue:'',
			status:'',
			orderDate:'',
			inkCost:0,
			shirtCost:0,
			depositUrl:'',
			screenCost:0,
			paymentUrl:'',
			shippingCost:0,
			materialMarkup:0,
			totalAmount:0,
			laborCost:0,
			depositAmount:0,
			laborMarkup:0,
			totalCost:0,
			numberOfShipments:0,
			overrideTotal:0,
			items:[],
			namesNumbers:[],
		};
  }

  public createForm():FormGroup{
     return this.fb.group({
        "customer": [this.item.customer],
        "description": [this.item.description],
        "dateDue": [this.item.dateDue],
     });
  }
}
