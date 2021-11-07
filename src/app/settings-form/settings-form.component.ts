import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from "@angular/forms";
import { ActivatedRoute, Router} from "@angular/router";
import {SettingsService} from "../services/settings.service";
import {Settings} from "../services/app-model";

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.scss']
})
export class SettingsFormComponent implements OnInit {
  item:Settings;
  form:FormGroup;

  constructor(private fb: FormBuilder,private service:SettingsService,private router: Router,private route: ActivatedRoute) {
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
     this.router.navigate(['/settingss']).then();
  }

  public emptyItem():Settings{
    return {
			id:null,
			materialMarkup:0,
			laborMarkup:0,
			overallMarkup:0,
			inkMsi:0,
		};
  }

  public createForm():FormGroup{
     return this.fb.group({
        "materialMarkup": [this.item.materialMarkup],
        "laborMarkup": [this.item.laborMarkup],
        "overallMarkup": [this.item.overallMarkup],
     });
  }
}
