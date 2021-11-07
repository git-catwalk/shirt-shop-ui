import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from "@angular/forms";
import { ActivatedRoute, Router} from "@angular/router";
import {ExpensesService} from "../services/expenses.service";
import {Expenses} from "../services/app-model";

@Component({
  selector: 'app-expenses-form',
  templateUrl: './expenses-form.component.html',
  styleUrls: ['./expenses-form.component.scss']
})
export class ExpensesFormComponent implements OnInit {
  item:Expenses;
  form:FormGroup;

  constructor(private fb: FormBuilder,private service:ExpensesService,private router: Router,private route: ActivatedRoute) {
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
     this.router.navigate(['/expensess']).then();
  }

  public emptyItem():Expenses{
    return {
			id:null,
			merchant:'',
			category:'',
			amount:0,
			quantity:0,
			description:'',
		};
  }

  public createForm():FormGroup{
     return this.fb.group({
        "merchant": [this.item.merchant],
        "category": [this.item.category],
        "amount": [this.item.amount],
     });
  }
}
