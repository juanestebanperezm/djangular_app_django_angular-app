import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { empty } from 'rxjs';

import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DeparmentComponent } from './components/deparment/deparment.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';

const routes: Routes = [

  {path:'',redirectTo:'employees',pathMatch:'full'},
  {path:'employees',component:EmployeesListComponent},
  {path:'employees/:id',component:EmployeeDetailsComponent},
  {path:'add',component:AddEmployeeComponent},
  {path:'deparment',component:DeparmentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
