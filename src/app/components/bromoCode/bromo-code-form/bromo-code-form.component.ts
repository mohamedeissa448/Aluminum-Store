import { Component, OnInit, Inject } from '@angular/core';
import { NotificationService } from '../../shared/services/notification.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BromoCodeService } from "../services/bromo-code.service"
@Component({
  selector: 'app-bromo-code-form',
  templateUrl: './bromo-code-form.component.html',
  styleUrls: ['./bromo-code-form.component.css']
})
export class BromoCodeFormComponent implements OnInit {

  id;
  title;
  constructor(
    public BromoCodeService: BromoCodeService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<BromoCodeFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {
    this.title = data.title;
    this.id=data.id
  }

  ngOnInit() {}
  onClear() {
    this.BromoCodeService.form.reset();
  }

  onSubmit() {
    if (this.BromoCodeService.form.valid) {
      //on adding bromo code
      if (this.title === "Add New Bromo Code") {
        this.BromoCodeService.addBromoCode(
          this.BromoCodeService.form.value
        ).subscribe((status) => {
          if(status==true)
          this.notificationService.success(":: Added Successfully");
          else
          this.notificationService.failed(":: Something went wrong,Please try again later!");
        });
        
      } else if (this.title === "Edit Bromo Code") {
        //update bromo code
        this.BromoCodeService.updateBromoCode(this.BromoCodeService.form.value,this.id).subscribe((status) => {
          if(status==true)
          this.notificationService.success(":: Updated Successfully");
          else
          this.notificationService.failed(":: Something went wrong,Please try again later!");
        });
      }
      this.BromoCodeService.form.reset();
      this.onClose();
    }
  }
  onClose() {
    this.BromoCodeService.form.reset();
    this.dialogRef.close();
  }


}
