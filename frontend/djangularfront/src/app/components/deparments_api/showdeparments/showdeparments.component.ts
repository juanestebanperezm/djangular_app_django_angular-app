import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-showdeparments',
  templateUrl: './showdeparments.component.html',
  styleUrls: ['./showdeparments.component.css']
})
export class ShowdeparmentsComponent implements OnInit {

  constructor(private empService:EmployeesService) { }

  deparmentList:any[]=[];
  ModalTitle:string;
  dep:any;
  ActivateAddEditDepComp:boolean=false
  
  ngOnInit(): void {
    this.refreshList();
  }


  

  addClick(){
    this.dep={
      DeparmentId:0,
      DeparmentName:"",
    }
    this.ModalTitle="Add deparment";
    this.ActivateAddEditDepComp=true

  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshList();
  }


  editClick(x){
    this.dep=x;
    this.ModalTitle='Editar';
    this.ActivateAddEditDepComp=true
  }

  deleteClick(x){
    if(confirm('Estas seguro?')){
      this.empService.deleteDeparment(x.DeparmentId).subscribe(r=>{alert(r.toString())});
      this.refreshList();
    }
  }

  refreshList(){
    this.empService.getList().subscribe(d=>this.deparmentList=d);
  }

}
