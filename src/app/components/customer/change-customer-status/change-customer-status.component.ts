import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NotificationService } from "../../shared/services/notification.service"
import { CustomerService } from '../services/customer.service';
import { AuthService } from '../../../authentication/services/auth.service';

@Component({
  selector: 'app-change-customer-status',
  templateUrl: './change-customer-status.component.html',
  styleUrls: ['./change-customer-status.component.css']
})
export class ChangeCustomerStatusComponent implements OnInit {
  id;
  Customer_Code;
  Customer_Name;
  title;
  provinces :any=[];
  statusArray:any=[];
  Customer_Status : any = ""
  constructor(
    public customerService: CustomerService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<ChangeCustomerStatusComponent>,
    public authService :AuthService,
    @Inject(MAT_DIALOG_DATA) private data
  ) {
    this.title = data.title;
    // tslint:disable-next-line: whitespace
    this.id=data.id;
    this.Customer_Code=data.Customer_Code;
    this.Customer_Name = data.Customer_Name ;
  }
  ngOnInit() {
    
    this.statusArray=[
      {
        name: "Risky",
        value: 0
      }];
      if(this.authService.currentUser.User_Permissions.includes('canBlockCustomers'))
          this.statusArray.push({
            name: "Blocked",
            value: 2
          })
      if(this.authService.currentUser.User_Permissions.includes('canUnBlockCustomers'))
          this.statusArray.push({
            name: "Active",
            value: 1
          })    
      
  }
  submit(){
    this.customerService.changeCustomerStatus(this.id , this.Customer_Status).subscribe((status)=>{
      if(status){
        this.notificationService.success("Status changed successfully")
      }else{
        this.notificationService.failed("Something went wrong,Please try again later!")
      }
      this.onClose();
    })
  }

  onClose() {
    this.dialogRef.close();
  }

}
