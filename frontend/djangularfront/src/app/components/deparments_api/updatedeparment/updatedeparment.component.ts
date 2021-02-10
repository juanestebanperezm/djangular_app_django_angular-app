import { Component, Input, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-updatedeparment',
  templateUrl: './updatedeparment.component.html',
  styleUrls: ['./updatedeparment.component.css']
})
export class UpdatedeparmentComponent implements OnInit {

  constructor(private employee:EmployeesService) { }


  @Input() dep:any;
  DeparmentId:string;
  DeparmentName:string;

  ngOnInit(): void {

    this.DeparmentId=this.dep.DeparmentId;
    this.DeparmentName=this.dep.DeparmentName;
  }

  addDeparment(){

    var z={DeparmentId:this.DeparmentId,DeparmentName:this.DeparmentName}
    this.employee.addDeparment(z).subscribe(r=>{alert(r.toString())})

  }

  updateDeparment(){

    var z={DeparmentId:this.DeparmentId,DeparmentName:this.DeparmentName}
    this.employee.updateDeparment(z).subscribe(n=>{alert(n.toString())})

  }

}
