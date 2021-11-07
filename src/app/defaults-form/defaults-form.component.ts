import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from "@angular/forms";
import { ActivatedRoute, Router} from "@angular/router";
import {DefaultsService} from "../services/defaults.service";
import {Defaults} from "../services/app-model";

@Component({
  selector: 'app-defaults-form',
  templateUrl: './defaults-form.component.html',
  styleUrls: ['./defaults-form.component.scss']
})
export class DefaultsFormComponent implements OnInit {
  item:Defaults;
  form:FormGroup;

  constructor(private fb: FormBuilder,private service:DefaultsService,private router: Router,private route: ActivatedRoute) {
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
     this.router.navigate(['/defaultss']).then();
  }

  public emptyItem():Defaults{
    return {
			id:null,
			screenCostPerColor:0,
			filmPerColor:0,
			artCostPerSide:0,
			shippingCostPerShirt:0,
			printLaborHoursPerColor:0,
		};
  }

  public createForm():FormGroup{
     return this.fb.group({
        "screenCostPerColor": [this.item.screenCostPerColor],
        "filmPerColor": [this.item.filmPerColor],
        "artCostPerSide": [this.item.artCostPerSide],
     });
  }
}
