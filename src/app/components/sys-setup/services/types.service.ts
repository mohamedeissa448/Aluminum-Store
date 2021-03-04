import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { systemSettings } from '../../../app-config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { core } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class TypesService {

  form: FormGroup;
  title: string;
  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      AT_Number: new FormControl("", [Validators.required]),
      AT_Desc: new FormControl(""),
    });
  }

  getTypes() {
   // const headers = new HttpHeaders({
   //   Authorization: `bearer ${localStorage.getItem("token")}`
    //});
    return this.http.get(
      `${systemSettings.serverURL}/sys-setup/types/getAllTypes`,
      //{ headers: headers }
    );
  }
  addType( type): Observable<boolean> {
    const endPoint1 = `${systemSettings.serverURL}/sys-setup/types/addType`;
    //const headers = new HttpHeaders({
    //  Authorization: `bearer ${localStorage.getItem("token")}`
    //});
    console.log("type to add ",type)

    return this.http.post(endPoint1, {
      AT_Number: type.AT_Number,
      AT_Desc:type.AT_Desc,
    }).pipe(
      map((response: any) => {
        if (response.message == true) return true;
        else return false;
      })
    );
  }
  updateType( type,id,) {
    console.log("type ro update ",type)
    console.log("type id ro update ",id)
    const endPoint1 = `${systemSettings.serverURL}/sys-setup/types/editTypeById`;
    return this.http.post(endPoint1, {
      AT_Number: type.AT_Number,
      AT_Desc:           type.AT_Desc,
      _id:                         id
    }).pipe(
      map((response: any) => {
        console.log("response",response)
        if (response.message == true) return true;
        else return false;
      })
    );
  }
  popualteForm(type) {
    console.log("type", type);
    this.form.setValue({
      AT_Number: type.AT_Number || "",
      AT_Desc: type.AT_Desc || "",
    });
  }
}
