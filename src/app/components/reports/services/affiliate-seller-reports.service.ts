import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { systemSettings } from "../../../app-config"
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AffiliateSellerReportsService {

  constructor(private http: HttpClient) {}

  getAffiliateSellerTransactionsFromDateToDate(dataToSend) {
    return this.http
      .post(`${systemSettings.serverURL}/affiliateSellers/getAffiliateSellerTransactionsFromDateToDate`, dataToSend) 
  }

  getAllAffiliateSellers(){
    return this.http
      .get(`${systemSettings.serverURL}/affiliateSellers/getAll`) 
    
  }

  getOrdersByDateFromTo (dataToSend){
    return this.http
      .post(`${systemSettings.serverURL}/orders/getOrdersByDateFromTo`,dataToSend)
  }

  
}
