import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { of } from 'rxjs';
import { ProductReportService } from '../services/product--report.service';

@Component({
  selector: 'app-product-third-report',
  templateUrl: './product-third-report.component.html',
  styleUrls: ['./product-third-report.component.css']
})
export class ProductThirdReportComponent implements OnInit {
  selectedCategoryID : any = "";
  categories : any = []
  Total_Store_Quantities: number = 0;
  Total_Store_Cost: number = 0;
  constructor(
    private ProductReportService: ProductReportService
  ) {}

  ngOnInit() {
    //initialize categories for search
    this.ProductReportService.getCategories().subscribe((categories:any)=>{
      this.categories = categories ;
    })
  }
  
  GetAllProductsfromStoreOfSelectedCategory(){
    this.Total_Store_Quantities = 0 ;
        this.Total_Store_Cost   = 0 ;
    this.ProductReportService.GetAllProductsfromStoreOfSelectedCategory(this.selectedCategoryID).subscribe((storeProducts: any) => {
      storeProducts.forEach((product:any)=>{
        this.Total_Store_Quantities += product.Store_Quantity;
        this.Total_Store_Cost       += product.Store_Quantity * product.Store_Cost;
      });
    });
  }
}
