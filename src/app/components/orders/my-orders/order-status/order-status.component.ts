import { COMMA, ENTER } from "@angular/cdk/keycodes";

import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { NotificationService } from '../../../shared/services/notification.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../../../../authentication/services/auth.service';
import { MyOrderService } from '../../services/my-order.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {
  paymentMethods:any =[];
  Order_Status:any="";
  Order_CustomerPaymentStatus:any="";
  title:any = "";
  id:any = "";
  //cancel details
  Cancelation_Date:any = "";
  Cancelation_ReasonOfCancelation:any = "";
  Cancelation_Note:any = "";
  cancelationReasons:any = [];
 
  constructor(public authService: AuthService,
    public myOrderService: MyOrderService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<OrderStatusComponent>,
    @Inject(MAT_DIALOG_DATA) private data) {
      this.title = data.title;
    this.id=data.id
     }

  ngOnInit() {
    this.myOrderService.getCancelReasons().subscribe((cancelReasons:any)=>{
      this.cancelationReasons = cancelReasons;
    });
    
    
  }
  onSubmit(){
    if(this.ValidateForm()){
      let dataToSend:any = {
        _id           :this.id,
        Order_CanBeFollowedUp :this.Cancelation_ReasonOfCancelation.ReasonOfCalcelation_CanBeFollowedUp,
        Order_CancelationDetails: {
          Cancelation_Date : this.Cancelation_Date,
          Cancelation_ReasonOfCancelation : this.Cancelation_ReasonOfCancelation._id,
          Cancelation_Note : this.Cancelation_Note,
          Cancelation_HandledBy : this.authService.currentUser._id
        }
      }
      this.myOrderService.cancelOrder(dataToSend).subscribe((status)=>{
        if(status==true)
            this.notificationService.success(":: Order Status Updated Successfully");
        else
            this.notificationService.failed(":: Something went wrong,Please try again later!");
      })
    
      this.onClose();
    }
  }
  ValidateForm(){
    if(!this.Cancelation_Date) return false;
    else if(!this.Cancelation_ReasonOfCancelation)return false;
    else if(!this.Cancelation_Note)return false;
    else return true;
  }
  onClose() {
    this.dialogRef.close();
  }
  

}
