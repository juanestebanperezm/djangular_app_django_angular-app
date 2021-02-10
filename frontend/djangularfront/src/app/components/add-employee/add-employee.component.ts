import { Component, Input, OnInit } from '@angular/core';
import {EmployeesService} from '../../services/employees.service'
import {Employee} from '../../models/employee'
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  

  constructor(private employeeService:EmployeesService) { }

  ngOnInit(): void {
  }



}
