import { Component, OnInit, Inject } from '@angular/core';
import { NotificationService } from "../../shared/services/notification.service"
import { PayToAffiliateService } from '../services/pay-to-affiliate.service';
import { AuthService } from '../../../authentication/services/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-show-financial-transactions-log',
  templateUrl: './show-financial-transactions-log.component.html',
  styleUrls: ['./show-financial-transactions-log.component.css']
})
export class ShowFinancialTransactionsLogComponent implements OnInit {

  id;
  AffiliateSeller_Code;
  AffiliateSeller_Name
  title;
  AffiliateSeller_FinancialTransactions:any=[];
  AffiliateSellerFinancialTransaction_Date :any = "";
  AffiliateSellerFinancialTransaction_MathSign :any = "";
  AffiliateSellerFinancialTransaction_Amount :any = "";
  AffiliateSellerFinancialTransaction_Order :any = "";
  AffiliateSellerFinancialTransaction_Type   :any = "";
  constructor(
    private authService:AuthService,
    public paymentsService: PayToAffiliateService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<ShowFinancialTransactionsLogComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {
    this.title = data.title;
    // tslint:disable-next-line: whitespace
    this.id=data.id;
    this.AffiliateSeller_Code=data.AffiliateSeller_Code
    this.AffiliateSeller_Name=data.AffiliateSeller_Name

  }
  
  ngOnInit() {
    this.paymentsService.getAffiliateSellerFinancialTransactionsByID(this.id).subscribe((response:any)=>{
      console.log("response",response)
      this.AffiliateSeller_FinancialTransactions = response.AffiliateSeller_FinancialTransactions;
    });
  }
 
deleteFinancialTransaction(transaction){
    console.log("deleted transaction",transaction)
    this.paymentsService.deleteTransactionFromFinancialTransactions ({AffiliateSellerId : this.id,transactionID:transaction._id}).subscribe((status)=>{
      if(status){
        this.notificationService.success("Deleted Successfully")
        this.AffiliateSeller_FinancialTransactions.splice( this.AffiliateSeller_FinancialTransactions.indexOf(transaction), 1);
      }else{
        this.notificationService.failed("Something went wrong,Please try again later")
      }
    })
  }

  onClose() {
    this.dialogRef.close();
  }

}
