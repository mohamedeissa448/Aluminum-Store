import { Component, OnInit, Inject } from '@angular/core';
import { NotificationService } from '../../../shared/services/notification.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CategoryTypesService } from '../../services/category-types.service';

@Component({
  selector: 'app-category-types-form',
  templateUrl: './category-types-form.component.html',
  styleUrls: ['./category-types-form.component.css']
})
export class CategoryTypesFormComponent implements OnInit {

  id;
  title;
  AluminumCategories : any[];
  AluminumTypes      : any[];

  constructor(
    public categoryTypesService: CategoryTypesService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<CategoryTypesFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {
    this.title = data.title;
    this.id=data.id
  }

  ngOnInit() {
    this.categoryTypesService.getCategories().subscribe((AluminumCategories :any[]) =>{
      this.AluminumCategories = AluminumCategories
    });
    this.categoryTypesService.getTypes().subscribe((AluminumTypes :any[]) =>{
      this.AluminumTypes = AluminumTypes
    })
  }
  onClear() {
    this.categoryTypesService.form.reset();
  }

  onSubmit() {
    if (this.categoryTypesService.form.valid) {
      //on adding Category Type
      if (this.title === "Add New Category Type") {
        this.categoryTypesService.addCategoryType(
          this.categoryTypesService.form.value
        ).subscribe((status) => {
          if(status==true)
          this.notificationService.success(":: Added Successfully");
          else
          this.notificationService.failed(":: Something went wrong,Please try again later!");
        });
        
      } else if (this.title === "Edit Category Type") {
        //update country
        this.categoryTypesService.updateCategoryType(this.categoryTypesService.form.value,this.id).subscribe((status) => {
          if(status==true)
          this.notificationService.success(":: Updated Successfully");
          else
          this.notificationService.failed(":: Something went wrong,Please try again later!");
        });
      }
      this.categoryTypesService.form.reset();
      this.onClose();
    }
  }
  onClose() {
    this.categoryTypesService.form.reset();
    this.dialogRef.close();
  }


}
