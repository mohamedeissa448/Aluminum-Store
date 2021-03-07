import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
// tslint:disable-next-line: quotemark
// tslint:disable-next-line: semicolon
import { NotificationService } from "../../shared/services/notification.service"
import { CustomerService } from '../services/customer.service';
import { AuthService } from '../../../authentication/services/auth.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  id;
  Customer_Code;
  title;
  provinces :any=[];
  statusArray:any=[];
  constructor(
    public customerService: CustomerService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<CustomerFormComponent>,
    public authService :AuthService,
    @Inject(MAT_DIALOG_DATA) private data
  ) {
    this.title = data.title;
    // tslint:disable-next-line: whitespace
    this.id=data.id;
    this.Customer_Code=data.Supplier_Code
  }

  ngOnInit() {}
  onClear() {
    this.customerService.form.reset();
  }

  onSubmit() {
  
    if (this.customerService.form.valid) {
      //on adding customer
      if (this.title === "Add New Customer") {
        this.customerService.addCustomer(
          this.customerService.form.value
        ).subscribe((status) => {
          if(status==true)
          this.notificationService.success(":: Added Successfully");
          else
          this.notificationService.failed(":: Something went wrong,Please try again later!");
        });
        
      } else if (this.title === "Edit A Customer") {
        //update Customer
        this.customerService.updateCustomer(this.customerService.form.value,this.id).subscribe((status) => {
          if(status==true)
          this.notificationService.success(":: Updated Successfully");
          else
          this.notificationService.failed(":: Something went wrong,Please try again later!");
        });
      }
      this.customerService.form.reset();
      this.onClose();
    }
  }
  onClose() {
    this.customerService.form.reset();
    this.dialogRef.close();
  }


}
