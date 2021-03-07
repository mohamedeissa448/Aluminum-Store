import { Component, OnInit, Inject } from '@angular/core';
import { NotificationService } from '../../shared/services/notification.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AluminumFactoryItemsService } from './../services/aluminum-factory-items.service';

@Component({
  selector: 'app-aluminum-factory-items-form',
  templateUrl: './aluminum-factory-items-form.component.html',
  styleUrls: ['./aluminum-factory-items-form.component.css']
})
export class FactoryItemsFormComponent implements OnInit {

  id;
  title;
  factoryNames : any[] = [];
  categoryTypes: any[] = [];
  aluminumItems: any[] = [];

  constructor(
    public factoryItemsService: AluminumFactoryItemsService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<FactoryItemsFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {
    this.title = data.title;
    this.id=data.id
  }

  ngOnInit() {
    this.factoryItemsService.getFactoryNames().subscribe((factoryNames: any[]) => {
      this.factoryNames = factoryNames ;
    });
    this.factoryItemsService.getCategoryTypes().subscribe((categoryTypes: any[]) => {
      this.categoryTypes = categoryTypes ;
    });
    this.factoryItemsService.getAluminumItems().subscribe((aluminumItems: any[]) => {
      this.aluminumItems = aluminumItems ;
    });
  }
  onClear() {
    this.factoryItemsService.form.reset();
  }

  onSubmit() {
    if (this.factoryItemsService.form.valid) {
      //on adding Factory Item
      if (this.title === "Add New Factory Item") {
        this.factoryItemsService.addFactoryItem(
          this.factoryItemsService.form.value
        ).subscribe((status) => {
          if(status==true)
          this.notificationService.success(":: Added Successfully");
          else
          this.notificationService.failed(":: Something went wrong,Please try again later!");
        });
        
      } else if (this.title === "Edit Factory Item") {
        //update Factory Item
        this.factoryItemsService.updateFactoryItem(this.factoryItemsService.form.value,this.id).subscribe((status) => {
          if(status==true)
          this.notificationService.success(":: Updated Successfully");
          else
          this.notificationService.failed(":: Something went wrong,Please try again later!");
        });
      }
      this.factoryItemsService.form.reset();
      this.onClose();
    }
  }
  onClose() {
    this.factoryItemsService.form.reset();
    this.dialogRef.close();
  }


}
