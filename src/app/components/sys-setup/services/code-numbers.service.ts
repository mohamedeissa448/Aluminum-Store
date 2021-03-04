import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { systemSettings } from '../../../app-config';
@Injectable({
  providedIn: 'root'
})
export class CodeNumbersService {

  form: FormGroup;
  title: string;
  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      ACN_Numbers: new FormControl("")
    });
  }

  getCodeNumbers() {
    return this.http.get(`${systemSettings.serverURL}/sys-setup/codeNumbers/getAllcodeNumbers`)
  }
 
  addCodeNumber(newCodeNumber) {
    console.log("added", newCodeNumber);
    return this.http
      .post(`${systemSettings.serverURL}/sys-setup/codeNumbers/addCodeNumber`, {
        ACN_Numbers: newCodeNumber.ACN_Numbers,
      })
      .pipe(
        map((response: any) => {
          if (response.message == true) return true;
          return false;
        })
      );
      
  }
  updateCodeNumber(updateCodeNumber,id) {
    console.log("updated", updateCodeNumber);

   return this.http
      .post(`${systemSettings.serverURL}/sys-setup/codeNumbers/editCodeNumberById`, {
        _id: id,
        ACN_Numbers: updateCodeNumber.ACN_Numbers,
        
      })
      .pipe(
        map((response: any) => {
          if (response.message == true) return true;
          return false;
        })
      );
  }
  popualteForm(ourClass) {
    console.log("ourClass", ourClass);
    this.form.setValue({
      ACN_Numbers: ourClass.ACN_Numbers
    });
  }
}
