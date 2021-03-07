import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { systemSettings } from '../../../app-config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AluminumFactoryItemsService {

  form: FormGroup;
  title: string;
  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      AFI_AFN_Seri: new FormControl("",[Validators.required]),
      AFI_OriginalNumber: new FormControl(""),
      AFI_ACT_Seri: new FormControl(""),
      AFI_AI_Seri:  new FormControl("")
      
    });
  }

  getFactoryItems() {
    return this.http.get(`${systemSettings.serverURL}/aluminumFactoryItem/getAll`)
  }
  addFactoryItem(factoryItem) {
    console.log("added", factoryItem);
    return this.http
      .post(`${systemSettings.serverURL}/aluminumFactoryItem/addFactoryItem`, {
        AFI_AFN_Seri: factoryItem.AFI_AFN_Seri,
        AFI_OriginalNumber: factoryItem.AFI_OriginalNumber,
        AFI_ACT_Seri: factoryItem.AFI_ACT_Seri,
        AFI_AI_Seri: factoryItem.AFI_AI_Seri
      })
      .pipe(
        map((response: any) => {
          if (response.message == true) return true;
          return false;
        })
      );
      
  }
  updateFactoryItem(updatedFactoryItem,id) {
    console.log("updated", updatedFactoryItem);

   return this.http
      .post(`${systemSettings.serverURL}/aluminumFactoryItem/editFactoryItemById`, {
        _id: id,
        AFI_AFN_Seri: updatedFactoryItem.AFI_AFN_Seri,
        AFI_OriginalNumber: updatedFactoryItem.AFI_OriginalNumber,
        AFI_ACT_Seri: updatedFactoryItem.AFI_ACT_Seri,
        AFI_AI_Seri : updatedFactoryItem.AFI_AI_Seri
      })
      .pipe(
        map((response: any) => {
          if (response.message == true) return true;
          return false;
        })
      );
  }
  popualteForm(factoryItem) {
    console.log("factoryItem", factoryItem);
    this.form.setValue({
      AFI_AFN_Seri: factoryItem.AFI_AFN_Seri._id || "",
      AFI_OriginalNumber: factoryItem.AFI_OriginalNumber || "",
      AFI_ACT_Seri: factoryItem.AFI_ACT_Seri._id || "", 
      AFI_AI_Seri: factoryItem.AFI_AI_Seri._id || ""
    });
  }

  /****************** Helpful Routes *********/
  getFactoryNames() {
    return this.http.get(`${systemSettings.serverURL}/sys-setup/factoryNames/getAllFactoryNames`)
  }
  getCategoryTypes() {
    return this.http.get(`${systemSettings.serverURL}/sys-setup/categoryTypes/getAllcategoryTypes`)
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
}
