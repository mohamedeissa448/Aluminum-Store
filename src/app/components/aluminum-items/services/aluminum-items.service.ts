import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { systemSettings } from "../../../app-config"
@Injectable({
  providedIn: 'root'
})
export class AluminumItemsService {

  form: FormGroup;
  title: string;
  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      AI_MasterNo: new FormControl("", [Validators.required]),
      AI_ArabicName: new FormControl("", [Validators.required]),
      AI_HebrewName: new FormControl(""),
    });
  }

  getAluminumItems() {
   // const headers = new HttpHeaders({
   //   Authorization: `bearer ${localStorage.getItem("token")}`
    //});
    return this.http.get(
      `${systemSettings.serverURL}/aluminumItem/getAll`,
      //{ headers: headers }
    );
  }
  addAluminumItem(Image: File, body): Observable<boolean> {
    const endPoint1 = `${systemSettings.serverURL}/aluminumItem/addAluminumItem`;
    const formData: FormData = new FormData();
    formData.append("image", Image, Image.name);
    formData.append("AI_MasterNo", body.AI_MasterNo);
    formData.append("AI_ArabicName", body.AI_ArabicName);
    formData.append("AI_HebrewName", body.AI_HebrewName);

    //const headers = new HttpHeaders({
    //  Authorization: `bearer ${localStorage.getItem("token")}`
    //});
    return this.http.post(endPoint1, formData).pipe(
      map((response: any) => {
        if (response.message == true) return true;
        else return false;
      })
    );
  }
  updateAluminumItem(Image: File, body) {
    const endPoint1 = `${systemSettings.serverURL}/aluminumItem/editAluminumItem`;
    const formData: FormData = new FormData();
    formData.append("image", Image, Image.name);
    formData.append("AI_MasterNo", body.AI_MasterNo);
    formData.append("AI_ArabicName", body.AI_ArabicName);
    formData.append("AI_HebrewName", body.AI_HebrewName);
    formData.append("_id", body._id);
    console.log("dataTOsend",formData)
    return this.http.post(endPoint1, formData).pipe(
      map((response: any) => {
        console.log("response",response)
        if (response.message == true) return true;
        else return false;
      })
    );
  }
  popualteForm(item) {
    console.log("item", item);
    this.form.setValue({
      AI_MasterNo: item.AI_MasterNo || "",
      AI_ArabicName: item.AI_ArabicName || "",
      AI_HebrewName: item.AI_HebrewName || "",
    });
  }
}
