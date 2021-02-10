import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { read } from '@popperjs/core';
import { ThrowStmt } from '@angular/compiler';




@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
readonly ApiUrl="http://127.0.0.1:8000"
readonly PhotoUrl="http://127.0.0.1:8000/media/"

  
  constructor(private httpclient:HttpClient) { }


  //Deparment Api

  getList():Observable<any[]>{
    return this.httpclient.get<any[]>(this.ApiUrl+'/deparment/')
  };

  addDeparment(data:any){
    return this.httpclient.post(this.ApiUrl+'/deparment/',data)
  }

  updateDeparment(data:any){
    return this.httpclient.put(this.ApiUrl+'/deparment/',data)
  }

  deleteDeparment(data:any){
    return this.httpclient.delete(this.ApiUrl+'/deparment/'+data)
  }

  //Employee Api


  getEmployees():Observable<any[]>{
    return this.httpclient.get<any[]>(this.ApiUrl+'/employee/')
  }

  addEmployee(data:any){
    return this.httpclient.post(this.ApiUrl+'/employee/',data)
  }


  updateEmployee(data:any){
    return this.httpclient.put(this.ApiUrl+'/employee/',data)
  }

  deleteEmployee(data:any){
    return this.httpclient.delete(this.ApiUrl+'/employee/'+data)
  }


  //Photo Api

  uploadPhoto(data:any){
    return this.httpclient.post(this.ApiUrl+'/SaveFile',data);
  }

  getAlldeparments():Observable<any[]>{
    return this.httpclient.get<any[]>(this.ApiUrl+'/deparment/')
  }


  


}
