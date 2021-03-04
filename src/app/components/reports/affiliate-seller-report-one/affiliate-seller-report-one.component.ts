import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource, MatDialogConfig, MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import {AffiliateSellerReportsService } from "../services/affiliate-seller-reports.service"
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-affiliate-seller-report-one',
  templateUrl: './affiliate-seller-report-one.component.html',
  styleUrls: ['./affiliate-seller-report-one.component.css']
})
export class AffiliateSellerReportOneComponent implements OnInit {
  TotalSumOfAmountOfAllTransactions : any =0 ;
  isLoading=false
  public orders;
  data;
  searchKey: string;
  searchDate:any={}
  Start_Date: any;
  End_Date: any;
  displayedColumns: string[] = ["Transaction Date", "Math Sign","Amount","Order Code", "Transaction Type"];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  //search seller details
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  sellerCtrl = new FormControl();
  filteredSellers: Observable<string[]>;
  searchedSellers: string[] = [];
  allSellers: any[] = [];
  @ViewChild("sellerInput",{static: false}) sellerInput: ElementRef;
  constructor(
    private dialog: MatDialog,
    private AffiliateSellerReportsService: AffiliateSellerReportsService
  ) {}

  ngOnInit() {
    this.initializeTable();
  }
  initializeTable() {
    //initialize sellers for search
    this.AffiliateSellerReportsService.getAllAffiliateSellers().subscribe((sellers:any)=>{
      this.allSellers=sellers;
      this.sellerCtrl.valueChanges.subscribe(search => {
        this.filteredSellers = of(this.allSellers.filter(item =>
          item.AffiliateSeller_Name.toLowerCase().includes(search)
        ));
      });
    })
    
      this.isLoading = false;
      this.orders = new MatTableDataSource([]);
      this.orders.sort = this.sort;
      this.orders.paginator = this.paginator;
  }
 
  
  searchdataByDates(){
    this.searchDate.Start_Date = this.Start_Date;
    this.searchDate.End_Date = new Date(this.End_Date);
    this.searchDate.End_Date.setDate( this.searchDate.End_Date.getDate() + 1 );
    this.isLoading = true;
    this.TotalSumOfAmountOfAllTransactions = 0;
    this.AffiliateSellerReportsService.getAffiliateSellerTransactionsFromDateToDate({ searchDate: this.searchDate ,_id :this.sellerCtrl.value._id }).subscribe((DatafromServer: any) => {
      if( DatafromServer.message){
        this.isLoading = false;
        this.orders = new MatTableDataSource(DatafromServer.SellerTransactions[0].transactions);
        this.orders.sort = this.sort;
        this.orders.paginator = this.paginator;
        this.TotalSumOfAmountOfAllTransactions = DatafromServer.SellerTransactions[0].sum;
      }
      else{
        this.isLoading = false;
        this.orders = new MatTableDataSource([]);
      }
    });
  }
    // for seller searches
/***********Seller */
  /********add seller */
  addSeller(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add our fruit
    if ((value || "").trim()) {
      this.searchedSellers.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }

    this.sellerCtrl.setValue(null);
  }
  /********remove seller */
  removeSeller(seller: string): void {
    const index = this.searchedSellers.indexOf(seller);

    if (index >= 0) {
      this.searchedSellers.splice(index, 1);
    }
  }
/***********select seller */
  selectedSeller(event: MatAutocompleteSelectedEvent): void {
    
    if(this.searchedSellers.length == 0){
      this.searchedSellers.push(event.option.viewValue);
      this.sellerInput.nativeElement.value = "";
    }
  
  }
/*******filter seller */
  private _filterSeller(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSellers.filter(
      customer => customer.toLowerCase().indexOf(filterValue) === 0
    );
  }
  }
 

 





