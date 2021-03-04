import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource, MatDialogConfig, MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ProductReportService } from '../services/product--report.service';

@Component({
  selector: 'app-product-second-report',
  templateUrl: './product-second-report.component.html',
  styleUrls: ['./product-second-report.component.css']
})
export class ProductSecondReportComponent implements OnInit {

  searchDate :any = {};
  isLoading=true;
  productTransactions;
  data;
  displayedColumns: string[] = ["Transaction Date", "Product","Size Variant","Color Variant","Transaction Type","Increase Inventory Code","Decrease Inventory Code","Order Code"];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  //search product details
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  productCtrl = new FormControl();
  filteredProducts: Observable<string[]>;
  searchedProducts: string[] = [];
  allProducts: any[] = [];
  @ViewChild("productInput",{static: false}) productInput: ElementRef;
  constructor(
    private dialog: MatDialog,
    private ProductReportService: ProductReportService
  ) {}

  ngOnInit() {
    this.initializeTable();
  }
  initializeTable() {
    //initialize suppliers for search
    this.ProductReportService.getAllProducts().subscribe((products:any)=>{
      this.allProducts=products;
      this.isLoading = false;
      this.productTransactions = new MatTableDataSource([]);
      this.productTransactions.sort = this.sort;
      this.productTransactions.paginator = this.paginator;

      this.productCtrl.valueChanges.subscribe(search => {
        this.filteredProducts = of(this.allProducts.filter(item =>
          item.Product_Name.toLowerCase().includes(search)
        ));
      });
    })
    
  }
 
  
  searchProductTransactionsFromDateToDate(){
    this.isLoading = true;
    this.ProductReportService.searchProductTransactionsFromDateToDate({ searchDate: this.searchDate, _id :this.productCtrl.value._id ,}).subscribe((productTransactions: any) => {
      this.isLoading = false;
      this.productTransactions = new MatTableDataSource(productTransactions);
      this.productTransactions.sort = this.sort;
      this.productTransactions.paginator = this.paginator;
   
    });
  }
    // for product searches
/***********product */
  /********add prdouct */
  addProduct(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add our product
    if ((value || "").trim()) {
      this.searchedProducts.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }

    this.productCtrl.setValue(null);
  }
  /********remove product */
  removeProduct(seller: string): void {
    const index = this.searchedProducts.indexOf(seller);

    if (index >= 0) {
      this.searchedProducts.splice(index, 1);
    }
  }
/***********select product */
  selectedProduct(event: MatAutocompleteSelectedEvent): void {
    
    if(this.searchedProducts.length == 0){
      this.searchedProducts.push(event.option.viewValue);
      this.productInput.nativeElement.value = "";
    }
  
  }
/*******product */
  private _filterSeller(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allProducts.filter(
      product => product.toLowerCase().indexOf(filterValue) === 0
    );
  }



}
