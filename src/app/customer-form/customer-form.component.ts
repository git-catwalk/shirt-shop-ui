import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from "@angular/forms";
import { ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../services/customer.service";
import {Customer} from "../services/app-model";

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  item:Customer;
  form:FormGroup;

  constructor(private fb: FormBuilder,private service:CustomerService,private router: Router,private route: ActivatedRoute) {
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
     this.router.navigate(['/customers']).then();
  }

  public emptyItem():Customer{
    return {
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
		};
  }

  public createForm():FormGroup{
     return this.fb.group({
        "name": [this.item.name],
        "email": [this.item.email],
        "phone": [this.item.phone],
     });
  }
}
