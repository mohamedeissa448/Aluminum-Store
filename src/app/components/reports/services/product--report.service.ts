import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { systemSettings } from "../../../app-config"
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductReportService {

  constructor(private http: HttpClient) {}
  /****** first report */
  getAllProductsInStore() {
    return this.http.get(`${systemSettings.serverURL}/store/getAllProductsInStore`)
  }
  /*****    Second report */
  getAllProducts (){
    return this.http.get(`${systemSettings.serverURL}/products/getAll`)
  }

  searchProductTransactionsFromDateToDate(dataToSend){
    return this.http.post(`${systemSettings.serverURL}/productTransaction/searchProductTransactionsFromDateToDate`,dataToSend)
  }
  /******** third report */
  getCategories() {
    return this.http.get(`${systemSettings.serverURL}/categories/getAll`)
  }
  GetAllProductsfromStoreOfSelectedCategory(categoryID){
    return this.http.post(`${systemSettings.serverURL}/store/GetAllProductsfromStoreOfSelectedCategory`,{categoryID})

  }
}
