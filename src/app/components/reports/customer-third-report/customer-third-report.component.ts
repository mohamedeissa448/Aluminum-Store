import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { AuthService } from '../../../authentication/services/auth.service';
import { CustomerReportService } from '../services/customer-report.service';

@Component({
  selector: 'app-customer-third-report',
  templateUrl: './customer-third-report.component.html',
  styleUrls: ['./customer-third-report.component.css']
})
export class CustomerThirdReportComponent implements OnInit {
  NumberOfOrders : any = 0 ;
  customers;
  data;
  searchKey: string;
  displayedColumns: string[] = [
    "Code",
    "Name",
    "NumberOfOrders"
  ];
  isLoading = true;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private customerReportService: CustomerReportService,
    public authService :AuthService
  ) {}

  ngOnInit() {
    this.initialize();
  }
  initialize() {
      this.isLoading = false;
      this.customers = new MatTableDataSource([]);
      this.customers.sort = this.sort;
      this.customers.paginator = this.paginator;
  }
  
  
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    if (this.searchKey)
      this.customers.filter = this.searchKey.trim().toLowerCase();
  }

  search() {
    this.isLoading = true ;
    this.customerReportService.getCustomerNamesWithAspecificNumOfOrders(this.NumberOfOrders).subscribe((response :any)=>{
      if(response.message == true)
        {
          console.log("x")
          this.isLoading = false;
          this.customers = new MatTableDataSource(response.customers);
          this.customers.sort = this.sort;
          this.customers.paginator = this.paginator;
        }
      else 
      this.initialize()
    })
        
}
}
