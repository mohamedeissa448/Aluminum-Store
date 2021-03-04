import { Component, OnInit, Inject } from '@angular/core';
import { NotificationService } from '../../../shared/services/notification.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CodeNumbersService } from './../../services/code-numbers.service';

@Component({
  selector: 'app-code-numbers-form',
  templateUrl: './code-numbers-form.component.html',
  styleUrls: ['./code-numbers-form.component.css']
})
export class CodeNumberFormComponent implements OnInit {

  id;
  title;
  constructor(
    public codeNumberService: CodeNumbersService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<CodeNumberFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {
    this.title = data.title;
    this.id=data.id
  }

  ngOnInit() { }
  onClear() {
    this.codeNumberService.form.reset();
  }

  onSubmit() {
    if (this.codeNumberService.form.valid) {
      //on adding code number
      if (this.title === "Add New Code Number") {
        this.codeNumberService.addCodeNumber(
          this.codeNumberService.form.value 
        ).subscribe((status) => {
          if(status==true)
          this.notificationService.success(":: Added Successfully");
          else
          this.notificationService.failed(":: Something went wrong,Please try again later!");
        });
        
      } else if (this.title === "Edit Code Number") {
        //update code number
        this.codeNumberService.updateCodeNumber(this.codeNumberService.form.value,this.id).subscribe((status) => {
          if(status==true)
          this.notificationService.success(":: Updated Successfully");
          else
          this.notificationService.failed(":: Something went wrong,Please try again later!");
        });
      }
      this.codeNumberService.form.reset();
      this.onClose();
    }
  }
  onClose() {
    this.codeNumberService.form.reset();
    this.dialogRef.close();
  }



}
