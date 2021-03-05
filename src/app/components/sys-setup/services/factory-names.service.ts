import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { systemSettings } from '../../../app-config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FactoryNamesService {

  form: FormGroup;
  title: string;
  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      AFN_Desc: new FormControl("",[Validators.required]),      
    });
  }

  getFactoryNames() {
    return this.http.get(`${systemSettings.serverURL}/sys-setup/factoryNames/getAllFactoryNames`)
  }
  addFactoryName(paymentMethod) {
    console.log("added", paymentMethod);
    return this.http
      .post(`${systemSettings.serverURL}/sys-setup/factoryNames/addFactoryName`, {
        AFN_Desc: paymentMethod.AFN_Desc,
      })
      .pipe(
        map((response: any) => {
          if (response.message == true) return true;
          return false;
        })
      );
      
  }
  updateFactoryName(updatedPaymentMethod,id) {
    console.log("updated", updatedPaymentMethod);

   return this.http
      .post(`${systemSettings.serverURL}/sys-setup/factoryNames/editFactoryNameById`, {
        _id: id,
        AFN_Desc: updatedPaymentMethod.AFN_Desc,
      })
      .pipe(
        map((response: any) => {
          if (response.message == true) return true;
          return false;
        })
      );
  }
  popualteForm(paymentMethod) {
    console.log("paymentMethod", paymentMethod);
    this.form.setValue({
      AFN_Desc: paymentMethod.AFN_Desc || "",
    });
  }
}
