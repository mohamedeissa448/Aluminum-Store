import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotificationService } from '../../../shared/services/notification.service';
import { CategoriesService } from './../../services/categories.service';
@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CategoriesFormComponent implements OnInit {
  id;
  title;
  AluminumCodeNumbers :any []; 
  constructor(
    public categoriesService: CategoriesService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<CategoriesFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {
    this.title = data.title;
    this.id=data.id
  }

  ngOnInit() {
    this.categoriesService.getCodeNumbers().subscribe( (AluminumCodeNumbers :any[]) => {
      this.AluminumCodeNumbers = AluminumCodeNumbers ;
      console.log("AluminumCodeNumbers",this.AluminumCodeNumbers)
    })
  }
  onClear() {
    this.categoriesService.form.reset();
  }

  onSubmit() {
    if (this.categoriesService.form.valid) {
      //on adding Category
      if (this.title === "Add New Category") {
        this.categoriesService.addCategory(
          this.categoriesService.form.value
        ).subscribe((status) => {
          if(status==true)
          this.notificationService.success(":: Added Successfully");
          else
          this.notificationService.failed(":: Something went wrong,Please try again later!");
        });
        
      } else if (this.title === "Edit Category") {
        //update Category
        this.categoriesService.updateCategory(this.categoriesService.form.value,this.id).subscribe((status) => {
          if(status==true)
          this.notificationService.success(":: Updated Successfully");
          else
          this.notificationService.failed(":: Something went wrong,Please try again later!");
        });
      }
      this.categoriesService.form.reset();
      this.onClose();
    }
  }
  onClose() {
    this.categoriesService.form.reset();
    this.dialogRef.close();
  }

}
