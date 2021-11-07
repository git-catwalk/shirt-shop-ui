import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {CallbackComponent} from "./callback/callback.component";
import {AuthGuard} from "./services/auth.guard";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ManufacturerFormComponent} from "./manufacturer-form/manufacturer-form.component";
import {EstimateFormComponent} from "./estimate-form/estimate-form.component";
import {CustomerFormComponent} from "./customer-form/customer-form.component";
import {GarmentFormComponent} from "./garment-form/garment-form.component";
import {SettingsFormComponent} from "./settings-form/settings-form.component";
import {DefaultsFormComponent} from "./defaults-form/defaults-form.component";
import {ExpensesFormComponent} from "./expenses-form/expenses-form.component";
import {TenantFormComponent} from "./tenant-form/tenant-form.component";
import {CustomerTableComponent} from "./customer-table/customer-table.component";
import {TenantTableComponent} from "./tenant-table/tenant-table.component";
import {ExpensesTableComponent} from "./expenses-table/expenses-table.component";
import {DefaultsTableComponent} from "./defaults-table/defaults-table.component";
import {SettingsTableComponent} from "./settings-table/settings-table.component";
import {GarmentTableComponent} from "./garment-table/garment-table.component";
import {EstimateTableComponent} from "./estimate-table/estimate-table.component";
import {ManufacturerTableComponent} from "./manufacturer-table/manufacturer-table.component";

const routes: Routes = [
		{path : 'manufacturer',     			component:ManufacturerFormComponent},
		{path : 'manufacturer/:id',     			component:ManufacturerFormComponent},
		{path : 'estimate',     			component:EstimateFormComponent},
		{path : 'estimate/:id',     			component:EstimateFormComponent},
		{path : 'customer',     			component:CustomerFormComponent},
		{path : 'customer/:id',     			component:CustomerFormComponent},
		{path : 'garment',     			component:GarmentFormComponent},
		{path : 'garment/:id',     			component:GarmentFormComponent},
		{path : 'settings',     			component:SettingsFormComponent},
		{path : 'settings/:id',     			component:SettingsFormComponent},
		{path : 'defaults',     			component:DefaultsFormComponent},
		{path : 'defaults/:id',     			component:DefaultsFormComponent},
		{path : 'expenses',     			component:ExpensesFormComponent},
		{path : 'expenses/:id',     			component:ExpensesFormComponent},
		{path : 'tenant',     			component:TenantFormComponent},
		{path : 'tenant/:id',     			component:TenantFormComponent},
		{path : 'customers',     			component:CustomerTableComponent},
		{path : 'tenants',     			component:TenantTableComponent},
		{path : 'expensess',     			component:ExpensesTableComponent},
		{path : 'defaultss',     			component:DefaultsTableComponent},
		{path : 'settingss',     			component:SettingsTableComponent},
		{path : 'garments',     			component:GarmentTableComponent},
		{path : 'estimates',     			component:EstimateTableComponent},
		{path : 'manufacturers',     			component:ManufacturerTableComponent},

   {path : 'home',             component: HomeComponent},
   {path : 'login',            component: LoginComponent},
   {path : 'callback',         component: CallbackComponent},
   {path : 'dashboard',        component: DashboardComponent,canActivate: [AuthGuard]},
   {path : 'docs',             loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule) },
   {path : '**',               redirectTo: '/home'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
