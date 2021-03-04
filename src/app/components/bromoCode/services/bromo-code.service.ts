import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { systemSettings } from '../../../app-config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BromoCodeService {

  form: FormGroup;
  title: string;
  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      BromoCode_Start_Date: new FormControl("",[Validators.required]),
      BromoCode_End_Date: new FormControl(""),
      BromoCode_Usage_Times: new FormControl(""),
      BromoCode_Discount: new FormControl(""),
      BromoCode_Description: new FormControl(""),
      
    });
  }

  getBromoCodes() {
    return this.http.get(`${systemSettings.serverURL}/bromoCode/getAll`)
  }
  addBromoCode(bromoCode) {
    console.log("added", bromoCode);
    return this.http
      .post(`${systemSettings.serverURL}/bromoCode/addBromoCode`, {
        BromoCode_Start_Date: bromoCode.BromoCode_Start_Date,
        BromoCode_End_Date: bromoCode.BromoCode_End_Date,
        BromoCode_Usage_Times: bromoCode.BromoCode_Usage_Times,
        BromoCode_Discount: bromoCode.BromoCode_Discount,
        BromoCode_Description: bromoCode.BromoCode_Description,
      })
      .pipe(
        map((response: any) => {
          if (response.message == true) return true;
          return false;
        })
      );
      
  }
  updateBromoCode(updateBromoCode,id) {
    console.log("updated", updateBromoCode);

   return this.http
      .post(`${systemSettings.serverURL}/bromoCode/editBromoCodeById`, {
        _id: id,
        BromoCode_Start_Date: updateBromoCode.BromoCode_Start_Date,
        BromoCode_End_Date: updateBromoCode.BromoCode_End_Date,
        BromoCode_Usage_Times: updateBromoCode.BromoCode_Usage_Times,
        BromoCode_Discount   : updateBromoCode.BromoCode_Discount,
        BromoCode_Description   : updateBromoCode.BromoCode_Description

      })
      .pipe(
        map((response: any) => {
          if (response.message == true) return true;
          return false;
        })
      );
  }
  popualteForm(bromoCode) {
    console.log("bromoCode", bromoCode);
    this.form.setValue({
      BromoCode_Start_Date  : bromoCode.BromoCode_Start_Date || "",
      BromoCode_End_Date    : bromoCode.BromoCode_End_Date || "",
      BromoCode_Usage_Times : bromoCode.BromoCode_Usage_Times || "", 
      BromoCode_Discount    : bromoCode.BromoCode_Discount || "",
      BromoCode_Description : bromoCode.BromoCode_Description || "",
    });
  }
}
