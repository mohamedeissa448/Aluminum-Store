import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { systemSettings } from "../../../app-config"
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  form: FormGroup;
  title: string;
  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      Customer_Name: new FormControl("",[Validators.required]),
      Customer_DisplayName : new FormControl(""),
      Customer_Email : new FormControl(""),
      Customer_Phone      : new FormControl(""),
      Customer_Address : new FormControl(""),
      Customer_Password    : new FormControl(""),

    });
  }

  getCustomers() {
    return this.http.get(`${systemSettings.serverURL}/customers/getAll`)
  }
  addCustomer(customer) {
    console.log("added", customer);
    return this.http
      .post(`${systemSettings.serverURL}/customers/addCustomer`, {
        Customer_Name: customer.Customer_Name,
        Customer_DisplayName: customer.Customer_DisplayName,
        Customer_Email: customer.Customer_Email,
        Customer_Phone: customer.Customer_Phone,
        Customer_Address: customer.Customer_Address,
        Customer_Password: customer.Customer_Password,
      })
      .pipe(
        map((response: any) => {
          if (response.message == true) return true;
          return false;
        })
      );
      
  }
  updateCustomer(updatedCustomer,id) {
    console.log("updated", updatedCustomer);

   return this.http
      .post(`${systemSettings.serverURL}/customers/editCustomer`, {
        _id: id,
        Customer_Name: updatedCustomer.Customer_Name,
        Customer_DisplayName: updatedCustomer.Customer_DisplayName,
        Customer_Email: updatedCustomer.Customer_Email,
        Customer_Phone: updatedCustomer.Customer_Phone,
        Address: updatedCustomer.Address,
        
      })
      .pipe(
        map((response: any) => {
          if (response.message == true) return true;
          return false;
        })
      );
  }
  popualteForm(customer) {
    console.log("customer", customer);
    this.form.setValue({
        Customer_Name: customer.Customer_Name,
        Customer_DisplayName: customer.Customer_DisplayName,
        Customer_Email: customer.Customer_Email,
        Customer_Phone: customer.Customer_Phone,
        Customer_Address: customer.Customer_Address,
        Customer_Password: customer.Customer_Password,
  
    });
  }
  changeCustomerStatus (id ,Customer_Status){
    return this.http
      .post(`${systemSettings.serverURL}/customers/changeCustomerStatus`, {
        _id: id,
        Customer_Status: Customer_Status
        
      })
      .pipe(
        map((response: any) => {
          if (response.message == true) return true;
          return false;
        })
      );
  }

  getAllOrdersForAspecificCustomer(customerId){
    return this.http.post(`${systemSettings.serverURL}/customers/getAllOrdersForAspecificCustomer`,{customerId})

  }

  
}
