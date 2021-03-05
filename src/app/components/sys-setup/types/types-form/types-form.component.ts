import { Component, OnInit, Inject } from '@angular/core';
import { NotificationService } from '../../../shared/services/notification.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TypesService } from '../../services/types.service';
@Component({
  selector: 'app-types-form',
  templateUrl: './types-form.component.html',
  styleUrls: ['./types-form.component.css']
})
export class TypeFormComponent implements OnInit {

  id;
  title;
  constructor(
    public typesService: TypesService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<TypeFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {
    this.title = data.title;
    this.id=data.id
  }

  ngOnInit() {  }
  onClear() {
    this.typesService.form.reset();
  }

  onSubmit() {
    if (this.typesService.form.valid) {
      //on adding type
      if (this.title === "Add New Type") {
        this.typesService.addType(
          this.typesService.form.value
        ).subscribe((status) => {
          if(status==true)
          this.notificationService.success(":: Added Successfully");
          else
          this.notificationService.failed(":: Something went wrong,Please try again later!");
        });
        
      } else if (this.title === "Edit A Type") {
        //update Type
        this.typesService.updateType(this.typesService.form.value,this.id).subscribe((status) => {
          if(status==true)
          this.notificationService.success(":: Updated Successfully");
          else
          this.notificationService.failed(":: Something went wrong,Please try again later!");
        });
      }
      this.typesService.form.reset();
      this.onClose();
    }
  }
  onClose() {
    this.typesService.form.reset();
    this.dialogRef.close();
  }
  
}
