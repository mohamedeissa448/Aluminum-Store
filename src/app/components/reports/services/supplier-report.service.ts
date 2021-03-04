import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { systemSettings } from "../../../app-config"
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SupplierReportService {

  constructor(private http: HttpClient) {}

  getAllSupplierTransactions(dataToSend) {
    return this.http
      .post(`${systemSettings.serverURL}/suppliers/getAllSupplierTransactions`, dataToSend) 
  }

  getAllSuppliers(){
    return this.http
      .get(`${systemSettings.serverURL}/suppliers/getAllMinified`) 
    
  }

  getAllSupplierPayments(dataToSend){
    return this.http
      .post(`${systemSettings.serverURL}/suppliersPayments/getAllSupplierPayments`,dataToSend)
  }

  getAllSupplierPaymentsFromDateToDate(dataToSend){
    return this.http
      .post(`${systemSettings.serverURL}/suppliersPayments/getAllSupplierPaymentsFromDateToDate`,dataToSend)
  }

  getAllSupplierBillsAndBillReturnedFromDateToDate(dataToSend){
    return this.http
      .post(`${systemSettings.serverURL}/suppliers/getAllSupplierBillsAndBillReturnedFromDateToDate`,dataToSend)
  }
  getAllSupplierBillsAndBillReturned(dataToSend){
    return this.http
      .post(`${systemSettings.serverURL}/suppliers/getAllSupplierBillsAndBillReturned`,dataToSend)
  }
}
