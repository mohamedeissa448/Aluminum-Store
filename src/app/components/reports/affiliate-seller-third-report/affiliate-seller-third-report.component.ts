import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource, MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { AffiliateSellerReportsService } from '../services/affiliate-seller-reports.service';

@Component({
  selector: 'app-affiliate-seller-third-report',
  templateUrl: './affiliate-seller-third-report.component.html',
  styleUrls: ['./affiliate-seller-third-report.component.css']
})
export class AffiliateSellerThirdReportComponent implements OnInit {

  Total_Num_Of_Orders = 0;
  isLoading=true
  sellers : any =[];
  data;
  searchKey: string;
  searchDate:any={}
  displayedColumns: string[] = ["Seller Code","Seller Name", "Number Of All Orders","Number Of Cancellerd Orders","Cancelled Percentage","Number Of Returned Orders","Returned Percentage"];
  ArrayToShowInGrid : any = [];
  filteredSellers : any = [];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  constructor(
    private dialog: MatDialog,
    private AffiliateSellerReportsService: AffiliateSellerReportsService
  ) {}

  ngOnInit() {
    this.initializeTable();
  }
  initializeTable() {
    this.AffiliateSellerReportsService.getAllAffiliateSellers().subscribe((sellers: any) => {
      this.isLoading = false;
      this.sellers = sellers;
      this.ArrayToShowInGrid = new MatTableDataSource([]);
      this.ArrayToShowInGrid.sort = this.sort;
      this.ArrayToShowInGrid.paginator = this.paginator;
      
    });
    
  }
 
  
  searchdataByDates(){
    console.log("searchDate ",this.searchDate);
    this.isLoading = true
    this.AffiliateSellerReportsService.getOrdersByDateFromTo({ searchDate: this.searchDate  }).subscribe((orders: any) => {
      this.isLoading = false;
      this.Total_Num_Of_Orders = orders.length;
      this.sellers.forEach((seller,outerIndex)=>{
        
        this.filteredSellers.push({
          AffiliateSeller_Code       : seller.AffiliateSeller_Code,
          AffiliateSeller_Name       : seller.AffiliateSeller_Name,
          Number_Of_ALL_Orders       : 0                          ,
          Number_Of_Cancelled_Orders : 0                          ,
          Number_Of_Returned_Orders  : 0                          ,
        });
        orders.forEach((order,innerIndex)=>{
          if(seller._id == order.Order_AffiliateSeller._id){
            this.filteredSellers[outerIndex].Number_Of_ALL_Orders ++;
            if(order.Order_Status == "Cancelled")
              this.filteredSellers[outerIndex].Number_Of_Cancelled_Orders ++;
            if(order.Order_Status == "Returned")
              this.filteredSellers[outerIndex].Number_Of_Returned_Orders ++;
          }
            
        })
      });
      
      this.ArrayToShowInGrid = new MatTableDataSource(this.filteredSellers);
      this.ArrayToShowInGrid.sort = this.sort;
      this.ArrayToShowInGrid.paginator = this.paginator;
      
    });
  }
   

}
