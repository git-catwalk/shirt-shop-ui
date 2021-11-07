import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Config} from "./config";
import {UserProfileService} from "./user-profile.service";
import {ThemeService} from "./theme.service";
import {ManufacturerService} from "./manufacturer.service";
import {EstimateService} from "./estimate.service";
import {CustomerService} from "./customer.service";
import {GarmentService} from "./garment.service";
import {SettingsService} from "./settings.service";
import {DefaultsService} from "./defaults.service";
import {ExpensesService} from "./expenses.service";
import {InvoiceItemsService} from "./invoiceitems.service";
import {TenantService} from "./tenant.service";

@NgModule({
  providers: [
    UserProfileService,
    ThemeService,
		ManufacturerService,
		EstimateService,
		CustomerService,
		GarmentService,
		SettingsService,
		DefaultsService,
		ExpensesService,
		InvoiceItemsService,
		TenantService,

  ],
  imports: [
    CommonModule
  ]
})
export class ServiceModule {
  public static forRoot(environment: any): Config{
    return new Config(environment);
  }
}
