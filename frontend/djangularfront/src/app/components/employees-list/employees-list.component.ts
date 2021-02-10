import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  constructor(private empService:EmployeesService) { }

  employeeList:any[]=[];
  ModalTitle:string;
  emp:any;
  ActivateAddEditEmpComp:boolean=false
  
  ngOnInit(): void {
    this.refreshEmpList();
  }


  

  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      Deparment:"",
      DateOfJoining:"",
      PhotoFileName:"girl.png",
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true

  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }


  editClick(x){
    this.emp=x;
    this.ModalTitle='Editar';
    this.ActivateAddEditEmpComp=true
  }

  deleteClick(x){
    if(confirm('Estas seguro?')){
      this.empService.deleteEmployee(x.EmployeeId).subscribe(r=>{alert(r.toString())});
      this.refreshEmpList();
    }
  }

  refreshEmpList(){
    this.empService.getEmployees().subscribe(d=>this.employeeList=d);
  }

  

}
