import { Component, OnInit } from '@angular/core';
import { SupplierReportService } from '../services/supplier-report.service';
import { ProductReportService } from '../services/product--report.service';

@Component({
  selector: 'app-product-first-report',
  templateUrl: './product-first-report.component.html',
  styleUrls: ['./product-first-report.component.css']
})
export class ProductFirstReportComponent implements OnInit {

  Total_Store_Quantities : number = 0 ;
  Total_Store_Cost  : number = 0 ;
  
  constructor(private productReportService : ProductReportService) { }

  ngOnInit() {
    this.productReportService.getAllProductsInStore().subscribe((storeProducts : any) =>{
      storeProducts.forEach((product:any)=>{
        this.Total_Store_Quantities += product.Store_Quantity;
        this.Total_Store_Cost       += product.Store_Quantity * product.Store_Cost;
      });
        
    })

}
}
