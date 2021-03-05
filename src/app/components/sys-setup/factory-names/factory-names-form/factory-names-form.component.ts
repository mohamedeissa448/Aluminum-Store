import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotificationService } from '../../../shared/services/notification.service';
import { FactoryNamesService } from '../../services/factory-names.service';

@Component({
  selector: 'app-factory-names-form',
  templateUrl: './factory-names-form.component.html',
  styleUrls: ['./factory-names-form.component.css']
})
export class FactoryNamesFormComponent implements OnInit {

  id;
  title;
  constructor(
    public factoryNamesService: FactoryNamesService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<FactoryNamesFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {
    this.title = data.title;
    this.id=data.id
  }

  ngOnInit() {}
  onClear() {
    this.factoryNamesService.form.reset();
  }

  onSubmit() {
    if (this.factoryNamesService.form.valid) {
      //on adding Factory Name
      if (this.title === "Add New Factory Name") {
        this.factoryNamesService.addFactoryName(
          this.factoryNamesService.form.value
        ).subscribe((status) => {
          if(status==true)
          this.notificationService.success(":: Added Successfully");
          else
          this.notificationService.failed(":: Something went wrong,Please try again later!");
        });
        
      } else if (this.title === "Edit Factory Name") {
        //update Factory Name
        this.factoryNamesService.updateFactoryName(this.factoryNamesService.form.value,this.id).subscribe((status) => {
          if(status==true)
          this.notificationService.success(":: Updated Successfully");
          else
          this.notificationService.failed(":: Something went wrong,Please try again later!");
        });
      }
      this.factoryNamesService.form.reset();
      this.onClose();
    }
  }
  onClose() {
    this.factoryNamesService.form.reset();
    this.dialogRef.close();
  }
}
