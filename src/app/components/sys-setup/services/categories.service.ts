import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { systemSettings } from '../../../app-config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  form: FormGroup;
  title: string;
  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      ACat_ACN_Seri: new FormControl("",[Validators.required]),
      ACat_Desc: new FormControl(""),
      
    });
  }

  getCategories() {
    return this.http.get(`${systemSettings.serverURL}/sys-setup/categories/getAllCategories`)
  }
  addCategory(category) {
    console.log("added", category);
    return this.http
      .post(`${systemSettings.serverURL}/sys-setup/categories/addCategory`, {
        ACat_ACN_Seri: category.ACat_ACN_Seri,
        ACat_Desc: category.ACat_Desc,
      })
      .pipe(
        map((response: any) => {
          if (response.message == true) return true;
          return false;
        })
      );
      
  }
  updateCategory(updateCategory,id) {
    console.log("updated", updateCategory);

   return this.http
      .post(`${systemSettings.serverURL}/sys-setup/categories/editCategoryById`, {
        _id: id,
        ACat_ACN_Seri: updateCategory.ACat_ACN_Seri,
        ACat_Desc: updateCategory.ACat_Desc,
        
      })
      .pipe(
        map((response: any) => {
          if (response.message == true) return true;
          return false;
        })
      );
  }
  popualteForm(category) {
    console.log("category", category);
    this.form.setValue({
      ACat_ACN_Seri : category.ACat_ACN_Seri ? category.ACat_ACN_Seri._id : "",
      ACat_Desc: category.ACat_Desc || ""
    });
  }

  /************Helpful Routes */
  
  getCodeNumbers() {
    return this.http.get(`${systemSettings.serverURL}/sys-setup/codeNumbers/getAllcodeNumbers`)
  }
}
