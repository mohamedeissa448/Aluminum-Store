import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource, MatDialogConfig, MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import {SupplierReportService } from "../services/supplier-report.service"
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-supplier-third-report',
  templateUrl: './supplier-third-report.component.html',
  styleUrls: ['./supplier-third-report.component.css']
})
export class SupplierThirdReportComponent implements OnInit {
  searchDate :any = {};
  TotalSumOfAmountOfAllPayments : any =0 ;
  isLoading=true;
  supplierPayments;
  data;
  displayedColumns: string[] = ["Payment Sys Date", "Inserted Payment Date","Payment Done By","Payment Method","Amount"];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  //search supplier details
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  supplierCtrl = new FormControl();
  filteredSuppliers: Observable<string[]>;
  searchedSuppliers: string[] = [];
  allSuppliers: any[] = [];
  @ViewChild("supplierInput",{static: false}) supplierInput: ElementRef;
  constructor(
    private dialog: MatDialog,
    private SupplierReportService: SupplierReportService
  ) {}

  ngOnInit() {
    this.initializeTable();
  }
  initializeTable() {
    //initialize suppliers for search
    this.SupplierReportService.getAllSuppliers().subscribe((suppliers:any)=>{
      this.allSuppliers=suppliers;
      this.isLoading = false;
      this.supplierPayments = new MatTableDataSource([]);
      this.supplierPayments.sort = this.sort;
      this.supplierPayments.paginator = this.paginator;

      this.supplierCtrl.valueChanges.subscribe(search => {
        this.filteredSuppliers = of(this.allSuppliers.filter(item =>
          item.Supplier_Name.toLowerCase().includes(search)
        ));
      });
    })
    
  }
 
  
  searchdataBySupplierId(){
    this.isLoading = true;
    this.TotalSumOfAmountOfAllPayments = 0 ;
    this.SupplierReportService.getAllSupplierPaymentsFromDateToDate({ searchDate: this.searchDate, _id :this.supplierCtrl.value._id ,}).subscribe((supplierPayments: any) => {
      this.isLoading = false;
      this.supplierPayments = new MatTableDataSource(supplierPayments);
      this.supplierPayments.sort = this.sort;
      this.supplierPayments.paginator = this.paginator;
      supplierPayments.forEach((payment : any )=>{
        this.TotalSumOfAmountOfAllPayments += payment.SupplierPayment_Amount  ;
      })
    });
  }
    // for supplier searches
/***********Seller */
  /********add supplier */
  addSupplier(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add our fruit
    if ((value || "").trim()) {
      this.searchedSuppliers.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }

    this.supplierCtrl.setValue(null);
  }
  /********remove supplier */
  removeSupplier(seller: string): void {
    const index = this.searchedSuppliers.indexOf(seller);

    if (index >= 0) {
      this.searchedSuppliers.splice(index, 1);
    }
  }
/***********select supplier */
  selectedSupplier(event: MatAutocompleteSelectedEvent): void {
    
    if(this.searchedSuppliers.length == 0){
      this.searchedSuppliers.push(event.option.viewValue);
      this.supplierInput.nativeElement.value = "";
    }
  
  }
/*******supplier */
  private _filterSeller(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSuppliers.filter(
      supplier => supplier.toLowerCase().indexOf(filterValue) === 0
    );
  }


}
