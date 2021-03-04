import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { systemSettings } from '../../../app-config';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CategoryTypesService {

  form: FormGroup;
  title: string;
  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      ACT_ACat_Seri: new FormControl("",[Validators.required]),
      ACT_AT_Seri: new FormControl(""),      
    });
  }

  getCategoryTypes() {
    return this.http.get(`${systemSettings.serverURL}/sys-setup/categoryTypes/getAllcategoryTypes`)
  }
  addCategoryType(CategoryType) {
    console.log("added", CategoryType);
    return this.http
      .post(`${systemSettings.serverURL}/sys-setup/categoryTypes/addcategoryType`, {
        ACT_ACat_Seri: CategoryType.ACT_ACat_Seri,
        ACT_AT_Seri: CategoryType.ACT_AT_Seri,
      })
      .pipe(
        map((response: any) => {
          if (response.message == true) return true;
          return false;
        })
      );
      
  }
  updateCategoryType(updateCategoryType,id) {
    console.log("updated", updateCategoryType);

   return this.http
      .post(`${systemSettings.serverURL}/sys-setup/categoryTypes/editcategoryTypeById`, {
        _id: id,
        ACT_ACat_Seri: updateCategoryType.ACT_ACat_Seri,
        ACT_AT_Seri: updateCategoryType.ACT_AT_Seri,
       
      })
      .pipe(
        map((response: any) => {
          if (response.message == true) return true;
          return false;
        })
      );
  }
  popualteForm(categoryType) {
    console.log("categoryType", categoryType);
    this.form.setValue({
      ACT_ACat_Seri: categoryType.ACT_ACat_Seri  || "",
      ACT_AT_Seri: categoryType.ACT_AT_Seri,
    });
  }

  /*************  Helpful Routes ************ */
  getCategories() {
    return this.http.get(`${systemSettings.serverURL}/sys-setup/categories/getAllCategories`)
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
}
