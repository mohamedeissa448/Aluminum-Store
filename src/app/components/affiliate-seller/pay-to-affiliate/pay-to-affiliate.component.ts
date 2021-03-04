import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NotificationService } from "../../shared/services/notification.service"
import { PayToAffiliateService } from '../services/pay-to-affiliate.service';
import { AuthService } from '../../../authentication/services/auth.service';

@Component({
  selector: 'app-pay-to-affiliate',
  templateUrl: './pay-to-affiliate.component.html',
  styleUrls: ['./pay-to-affiliate.component.css']
})
export class PayToAffiliateComponent implements OnInit {

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
    public dialogRef: MatDialogRef<PayToAffiliateComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {
    this.title = data.title;
    // tslint:disable-next-line: whitespace
    this.id=data.id;
    this.AffiliateSeller_Code=data.AffiliateSeller_Code
    this.AffiliateSeller_Name=data.AffiliateSeller_Name
  }
  
  ngOnInit() {
    this.paymentsService.getPaymentMethods().subscribe((response:any)=>{
      this.paymentMethods = response;
    });
}

  onSubmit(){
    console.log("Payment_PaidAmount",this.Payment_PaidAmount)
    let dataToSend = {
      paymentRecord : {
        Payment_Date             :this.Payment_Date,
        Payment_PaidAmount       :this.Payment_PaidAmount,
        Payment_PaidMethod       :this.Payment_PaidMethod,
        Payment_PaymentRefranceNumber :this.Payment_PaymentRefranceNumber,
        Payment_PaymentExtraDetails   :this.Payment_PaymentExtraDetails,
        Payment_PaidByUser       :this.authService.currentUser._id,
      },
      financialTransactionRecord :{
        AffiliateSellerFinancialTransaction_Date     : this.Payment_Date ,
        AffiliateSellerFinancialTransaction_MathSign : -1                ,//not sure
        AffiliateSellerFinancialTransaction_Amount   : this.Payment_PaidAmount ,
        AffiliateSellerFinancialTransaction_Type     : "Payment"
      },
      affiliateSellerId : this.id
    }
    //this route used to add a payment record to both arrays AffiliateSeller_PaymentLog and AffiliateSeller_FinancialTransactions
    this.paymentsService.addPaymentRecordToAffiliateSellerByAffiliateSellerId(dataToSend).subscribe((status) => {
      if(status==true)
      this.notificationService.success(":: Updated Successfully");
      else
      this.notificationService.failed(":: Something went wrong,Please try again later!");
    });
    this.dialogRef.close();
  }
  onClose() {
    this.dialogRef.close();
  }


}
