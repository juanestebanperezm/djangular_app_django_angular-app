import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeesService } from './services/employees.service';
import { DeparmentComponent } from './components/deparment/deparment.component';
import { ShowdeparmentsComponent } from './components/deparments_api/showdeparments/showdeparments.component';
import { AdddeparmentComponent } from './components/deparments_api/adddeparment/adddeparment.component';
import { UpdatedeparmentComponent } from './components/deparments_api/updatedeparment/updatedeparment.component';
import { EditemployeeComponent } from './components/editemployee/editemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeesListComponent,
    DeparmentComponent,
    ShowdeparmentsComponent,
    AdddeparmentComponent,
    UpdatedeparmentComponent,
    EditemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
