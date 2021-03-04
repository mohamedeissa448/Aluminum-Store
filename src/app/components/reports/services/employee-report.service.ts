import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { systemSettings } from "../../../app-config"
@Injectable({
  providedIn: 'root'
})
export class EmployeeReportService {

  constructor(private http: HttpClient) {}

  getAllUsers(){
    return this.http
      .get(`${systemSettings.serverURL}/users/getAllUsers`)
  }
  getOrdersByDateFromTo (dataToSend){
    return this.http
      .post(`${systemSettings.serverURL}/orders/getOrdersByDateFromTo`,dataToSend)
  }
  
}
