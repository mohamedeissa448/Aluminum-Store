import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { ReturnOrderService } from '../services/return-order.service';
import { AuthService } from '../../../authentication/services/auth.service';
import { ReturnOrderFormComponent } from './return-order-form/return-order-form.component';

@Component({
  selector: 'app-manage-return-order',
  templateUrl: './manage-return-order.component.html',
  styleUrls: ['./manage-return-order.component.css']
})
export class ManageReturnOrderComponent implements OnInit {

  isLoading=false;
  searchInput:any = "" ;
  typeOfSearch:any = "Order_ShippingWaybill" ;
  public orders;
  data;
  displayedColumns: string[] = ["Code","Order Date", "Note","Total Product Selling Amount","Customer Name","Status", "Actions"];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private ReturnOrderService: ReturnOrderService,
    public authService :AuthService
  ) {}

  ngOnInit() {
    this.initializeTable(true);
  }
  initializeTable(isIntial) {
    this.isLoading = false;
    this.orders = new MatTableDataSource([]);
    this.orders.sort = this.sort;
    this.orders.paginator = this.paginator;
    if(!isIntial){
      this.search();
    }
  }
 

  
  SearchClear() {
    this.searchInput = "";
  }
  search() {
    this.isLoading = true
    let dataToSend:any = {};
    dataToSend[this.typeOfSearch] = this.searchInput;
    this.ReturnOrderService.searchOrders(dataToSend).subscribe((response:any)=>{
      this.isLoading = false;
      this.orders = new MatTableDataSource(response.orders);
      this.orders.sort = this.sort;
      this.orders.paginator = this.paginator;
    })
  }
 
  returnOrder(element){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    dialogConfig.data = { id:element._id,Order_Code:element.Order_Code };

    let dalogRef=this.dialog.open(ReturnOrderFormComponent, dialogConfig);
    dalogRef.afterClosed().subscribe((data)=>{
      this.initializeTable(false);
    })
  }

}
