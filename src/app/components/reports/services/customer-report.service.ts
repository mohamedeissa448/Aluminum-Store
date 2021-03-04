import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { systemSettings } from "../../../app-config"
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerReportService {

  constructor(private http: HttpClient) {}
  /****** first report */
  getNumOfAllCustomers() {
    return this.http.get(`${systemSettings.serverURL}/customers/getNumOfAllCustomers`)
  }
  getNumOfAllActiveCustomers() {
    return this.http.get(`${systemSettings.serverURL}/customers/getNumOfAllActiveCustomers`)
  }
  getNumOfAllRiskyCustomers() {
    return this.http.get(`${systemSettings.serverURL}/customers/getNumOfAllRiskyCustomers`)
  }
  getNumOfAllBlockedCustomers() {
    return this.http.get(`${systemSettings.serverURL}/customers/getNumOfAllBlockedCustomers`)
  }

  /******* second report */
  getNumOfAllCustomersWithOnlyOneOrder() {
    return this.http.get(`${systemSettings.serverURL}/customers/getNumOfAllCustomersWithOnlyOneOrder`)
  }
  getNumOfAllCustomersWithOnlyTwoOrders() {
    return this.http.get(`${systemSettings.serverURL}/customers/getNumOfAllCustomersWithOnlyTwoOrders`)
  }
  getNumOfAllCustomersWithThreeOrdersOrMore() {
    return this.http.get(`${systemSettings.serverURL}/customers/getNumOfAllCustomersWithThreeOrdersOrMore`)
  }

  /******** third report  */
  getCustomerNamesWithAspecificNumOfOrders(NumberOfOrders) {
    return this.http.post(`${systemSettings.serverURL}/customers/getCustomerNamesWithAspecificNumOfOrders`,{NumberOfOrders})
  }

}
