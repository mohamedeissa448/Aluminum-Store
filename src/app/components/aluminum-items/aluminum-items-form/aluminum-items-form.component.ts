import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NotificationService } from '../../shared/services/notification.service';
import { systemSettings } from "../../../app-config"
import { AluminumItemsService } from '../services/aluminum-items.service';

@Component({
  selector: 'app-aluminum-items-form',
  templateUrl: './aluminum-items-form.component.html',
  styleUrls: ['./aluminum-items-form.component.css']
})
export class AluminumItemsFormComponent implements OnInit {
  serverURL=""
  title;
  id;
  ImageUrl;

 ImageToUpload: File = null;

 isImageChosed: boolean = false;
 showErrorMSg: boolean;
 constructor(
   public aluminumItemsService: AluminumItemsService,
   private notificationService: NotificationService,
   private dialogRef: MatDialogRef<AluminumItemsFormComponent>,
   @Inject(MAT_DIALOG_DATA) private data
 ) {
   console.log("data",data)
   this.title = data.title;
   this.ImageUrl = data.ImageUrl;
   this.id=data.id
 }

 ngOnInit() {
   this.serverURL=systemSettings.serverURL;
 }
 onClear() {
   this.aluminumItemsService.form.reset();
 }

 onSubmit() {
   if (this.aluminumItemsService.form.valid) {
     //on add a service
     if (this.title === "Add New Aluminum Item") {
       this.upload("Add");
     } else if (this.title === "Edit An Aluminum Item") {
       //update a service
       this.upload("Edit");
     }
     this.aluminumItemsService.form.reset();
     this.onClose();
   }
 }
 onClose() {
   this.aluminumItemsService.form.reset();
   this.dialogRef.close();
   console.log("closed")
 }
 handleImageFileInput(files: FileList) { //x large
   this.ImageToUpload = files.item(0);
   console.log("this.ImageToUpload", this.ImageToUpload);
   this.isImageChosed = this.isImageChosed == true ? false : true;
   if (this.ImageToUpload) this.showErrorMSg = false;
   else if (!this.ImageToUpload) {
     this.showErrorMSg = true;
   }
 }


 upload(type: string) {
   console.log("this.ImageToUpload",this.ImageToUpload)

   if (type == "Add") {
     this.aluminumItemsService
       .addAluminumItem(this.ImageToUpload,{
         AI_MasterNo: this.aluminumItemsService.form.value.AI_MasterNo,
         AI_ArabicName: this.aluminumItemsService.form.value.AI_ArabicName,
         AI_HebrewName: this.aluminumItemsService.form.value.AI_HebrewName,
       })
       .subscribe(
         status => {
           if (status) {
              this.notificationService.success(":: Uploaded Successfully");
           }else{
             alert("Upload wasn't a success,Please try again");
           }
         }
       );
   } else {
     console.log("form",this.aluminumItemsService.form.value)
     this.aluminumItemsService
       .updateAluminumItem(this.ImageToUpload ,{
        AI_MasterNo: this.aluminumItemsService.form.value.AI_MasterNo,
        AI_ArabicName: this.aluminumItemsService.form.value.AI_ArabicName,
        AI_HebrewName: this.aluminumItemsService.form.value.AI_HebrewName,
        _id: this.id
       })
       .subscribe(
         status => {
           if (status) {
              this.notificationService.success(":: Updated Successfully");
           }else{
             this.notificationService.failed("Upload wasn't a success,Please try again");
           }
         }
       );
   }
 }

}
