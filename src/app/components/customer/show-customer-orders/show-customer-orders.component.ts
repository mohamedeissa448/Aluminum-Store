import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NotificationService } from "../../shared/services/notification.service"
import { CustomerService } from '../services/customer.service';
import { AuthService } from '../../../authentication/services/auth.service';

@Component({
  selector: 'app-show-customer-orders',
  templateUrl: './show-customer-orders.component.html',
  styleUrls: ['./show-customer-orders.component.css']
})
export class ShowCustomerOrdersComponent implements OnInit {

  id;
  Customer_Code;
  Customer_Name;
  customerOrders : any =[]
  constructor(
    public customerService: CustomerService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<ShowCustomerOrdersComponent>,
    public authService :AuthService,
    @Inject(MAT_DIALOG_DATA) private data
  ) {
    this.id=data.id;
    this.Customer_Code=data.Customer_Code;
    this.Customer_Name = data.Customer_Name ;
  }
  ngOnInit() {
    this.customerService.getAllOrdersForAspecificCustomer(this.id).subscribe((response:any)=>{
      if(response.message == true){
        this.customerOrders = response.orders;
      }
    });
  }

  onClose() {
    this.dialogRef.close();
  }

}
