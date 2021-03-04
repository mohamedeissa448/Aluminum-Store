import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NotificationService } from "../../shared/services/notification.service"
import { PayToAffiliateService } from '../services/pay-to-affiliate.service';
import { AuthService } from '../../../authentication/services/auth.service';

@Component({
  selector: 'app-show-payment-log',
  templateUrl: './show-payment-log.component.html',
  styleUrls: ['./show-payment-log.component.css']
})
export class ShowPaymentLogComponent implements OnInit {

  id;
  AffiliateSeller_Code;
  AffiliateSeller_Name
  title;
  AffiliateSeller_PaymentLog:any=[];
  paymentMethods:any=[];
  Payment_Date :any = "";
  Payment_PaidAmount :any = "";
  Payment_PaidMethod :any = "";
  Payment_PaymentRefranceNumber :any = "";
  Payment_PaymentExtraDetails   :any = "";
  constructor(
    private authService:AuthService,
    public paymentsService: PayToAffiliateService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<ShowPaymentLogComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {
    this.title = data.title;
    // tslint:disable-next-line: whitespace
    this.id=data.id;
    this.AffiliateSeller_Code=data.AffiliateSeller_Code
    this.AffiliateSeller_Name=data.AffiliateSeller_Name

  }
  
  ngOnInit() {
   
    this.paymentsService.getAffiliateSellerPaymentsByID(this.id).subscribe((response:any)=>{
      console.log("response",response)
      this.AffiliateSeller_PaymentLog = response.AffiliateSeller_PaymentLog;
    });
}
 
  deletePayment(payment){
    console.log("deleted payment",payment)
    this.paymentsService.deleteRecordFromPaymentsLog({AffiliateSellerId : this.id,paymentID:payment._id}).subscribe((status)=>{
      if(status){
        this.notificationService.success("Deleted Successfully")
        this.AffiliateSeller_PaymentLog.splice( this.AffiliateSeller_PaymentLog.indexOf(payment), 1);
      }else{
        this.notificationService.failed("Something went wrong,Please try again later")
      }
    })
  }

  onClose() {
    this.dialogRef.close();
  }

}
