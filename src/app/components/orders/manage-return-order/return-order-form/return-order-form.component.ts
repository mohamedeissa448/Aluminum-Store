import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { NotificationService } from '../../../shared/services/notification.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../../../../authentication/services/auth.service';
import { ReturnOrderService } from '../../services/return-order.service';

@Component({
  selector: 'app-return-order-form',
  templateUrl: './return-order-form.component.html',
  styleUrls: ['./return-order-form.component.css']
})
export class ReturnOrderFormComponent implements OnInit {

  id: any = "";
  isLoading = true;
  Original_Order_TotalProductSellingAmount: any = "";
  Order_AffiliateSellerRevenuePercentage: any = "";
  //return details
  returnReasons: any = [];
  Return_Date: any = "";;
  Return_ReasonOfReturn: any = "";
  Return_Note: any = "";
  Return_ShippingCompanyRefNumber: any = "";
  Return_Products: any = [];
  Original_Order_Products: any = [];
  constructor(public authService: AuthService,
    public ReturnOrderService: ReturnOrderService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<ReturnOrderFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data) {
    this.id = data.id
  }

  ngOnInit() {
    this.ReturnOrderService.getReturnReasons().subscribe((returnReasons: any) => {
      this.returnReasons = returnReasons;
      this.RetriveOrderData();
    });

  }
  RetriveOrderData() {
    this.ReturnOrderService.getAffiliateSellerOrderById(this.id).subscribe((order: any) => {
      this.Original_Order_TotalProductSellingAmount = order.Order_TotalProductSellingAmount;
      this.Order_AffiliateSellerRevenuePercentage = order.Order_AffiliateSellerRevenuePercentage;
      this.Original_Order_Products = order.Order_Products;
      this.Original_Order_Products.forEach((element) => {
        let isFound = false;
        order.Order_Return_Details.forEach((returnedProductDetails) => {
          if (returnedProductDetails.Return_Products[0].Product == element.Product._id) {
            isFound = true;
            element.isReturned = true;
            element.returnedQuantity = element.Quantity;
          }

        });
        if (!isFound) {
          element.isReturned = false;
          element.returnedQuantity = 0;
        }
        this.isLoading = false;
      });
    });
  }
  onSubmit(orderedProduct) {
    if(this.ValidateForm()){
      this.isLoading = true;
      let dataToSend: any = {
        _id: this.id,
        Original_Order_TotalProductSellingAmount: this.Original_Order_TotalProductSellingAmount,
        Order_AffiliateSellerRevenuePercentage: this.Order_AffiliateSellerRevenuePercentage
      };
      var PrductData = {
        Product: orderedProduct.Product._id,
        Size_Variant: orderedProduct.Size_Variant._id,
        Color_Variant: orderedProduct.Color_Variant._id,
        Quantity: orderedProduct.Quantity,
        Cost: orderedProduct.Cost,
        Price: orderedProduct.Price
      }
      dataToSend.Order_Return_Details = {
        Return_Date: this.Return_Date,
        Return_ReasonOfReturn: this.Return_ReasonOfReturn,
        Return_Note: this.Return_Note,
        Return_ShippingCompanyRefNumber: this.Return_ShippingCompanyRefNumber,
        Return_Products: [PrductData],
        Return_HandledBy: this.authService.currentUser._id
      };
      this.ReturnOrderService.returnOneProductFromOrder(dataToSend).subscribe((status) => {
        this.isLoading = false;
        if (status == true) {
          this.notificationService.success(":: Order Status Updated Successfully");
          this.RetriveOrderData();
        }
        else {
          this.notificationService.failed(":: Something went wrong,Please try again later!");
        }
      })
    }
  }
  ValidateForm(){
    if(!this.Return_Date) return false;
    else if(!this.Return_ReasonOfReturn)return false;
    else if(!this.Return_Note)return false;
    else return true;
  }
  onClose() {
    this.dialogRef.close();
  }

}
