import { Component, OnInit, Inject } from '@angular/core';
import { NotificationService } from "../../shared/services/notification.service"
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SupplierPaymentsService } from '../services/supplier-payments.service';

@Component({
  selector: 'app-show-supplier-financial-transactions-log',
  templateUrl: './show-supplier-financial-transactions-log.component.html',
  styleUrls: ['./show-supplier-financial-transactions-log.component.css']
})
export class ShowSupplierFinancialTransactionsLogComponent implements OnInit {

  id;
  Supplier_Code;
  Supplier_Name
  title;
  Supplier_FinancialTransaction:any=[];
  SupplierFinancialTransaction_Date :any = "";
  SupplierFinancialTransaction_MathSign :any = "";
  SupplierFinancialTransaction_Amount :any = "";
  SupplierFinancialTransaction_Bill :any = "";
  SupplierFinancialTransaction_BillReturn   :any = "";
  SupplierFinancialTransaction_Payment   :any = "";
  SupplierFinancialTransaction_Type   :any = "";

  constructor(
    public supplierPaymentsService: SupplierPaymentsService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<ShowSupplierFinancialTransactionsLogComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {
    this.title = data.title;
    // tslint:disable-next-line: whitespace
    this.id=data.id;
    this.Supplier_Code=data.Supplier_Code
    this.Supplier_Name=data.Supplier_Name

  }
  
  ngOnInit() {
    this.supplierPaymentsService.getSupplierFinancialTransactionsByID(this.id).subscribe((response:any)=>{
      console.log("response",response)
      this.Supplier_FinancialTransaction = response.Supplier_FinancialTransaction;
    });
  }
 
deleteFinancialTransaction(transaction){
    console.log("deleted transaction",transaction)
    this.supplierPaymentsService.deleteTransactionFromFinancialTransactions ({SupplierId : this.id,transactionID:transaction._id}).subscribe((status)=>{
      if(status){
        this.notificationService.success("Deleted Successfully")
        this.Supplier_FinancialTransaction.splice( this.Supplier_FinancialTransaction.indexOf(transaction), 1);
      }else{
        this.notificationService.failed("Something went wrong,Please try again later")
      }
    })
  }

  onClose() {
    this.dialogRef.close();
  }

}
