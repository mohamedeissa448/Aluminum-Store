import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource, MatDialogConfig, MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { CustomerService } from '../services/customer.service';
import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { BillingAddressFormComponent } from '../billing-address-form/billing-address-form.component';
import { ShippingAddressFormComponent } from '../shipping-address-form/shipping-address-form.component';
import { AuthService } from '../../../authentication/services/auth.service';
import { ChangeCustomerStatusComponent } from '../change-customer-status/change-customer-status.component';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ShowCustomerOrdersComponent } from '../show-customer-orders/show-customer-orders.component';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.css']
})
export class ManageCustomerComponent implements OnInit {

  isLoading=true
   customers;
   orders;
  data;
  searchKey: string;
  displayedColumns: string[] = ["Code","Name", "Billing Address","Shipping Address","Active", "Actions"];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  
  constructor(
    private dialog: MatDialog,
    private customerService: CustomerService,
    public authService :AuthService
  ) {}

  ngOnInit() {
    this.initializeCustomerTable();
  }
  initializeCustomerTable() {
    this.customerService.getCustomers().subscribe((customers: any) => {
      this.isLoading = false;
      this.customers = new MatTableDataSource(customers);
      this.customers.sort = this.sort;
      this.customers.paginator = this.paginator;
   
    });
  }
  onAdd() {
    this.customerService.form.reset();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    dialogConfig.data = { title: "Add New Customer" };
    let dalogRef=this.dialog.open(CustomerFormComponent, dialogConfig);
    dalogRef.afterClosed().subscribe((data)=>{
      this.initializeCustomerTable();
    })
  }
  onEdit(element) {
  
    this.customerService.popualteForm(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    dialogConfig.data = { title: "Edit A Customer",id:element._id,Customer_Code:element.Customer_Code };

    let dalogRef=this.dialog.open(CustomerFormComponent, dialogConfig);
    dalogRef.afterClosed().subscribe((data)=>{
      this.initializeCustomerTable();
    })
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    this.customers.filter = this.searchKey.trim().toLowerCase();
  }
  openBillingAddress(element){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Customer's Billing Address",id:element._id,Customer_Code:element.Customer_Code,Customer_Name:element.Customer_Name };

    let dalogRef=this.dialog.open(BillingAddressFormComponent, dialogConfig);
    dalogRef.afterClosed().subscribe((data)=>{
      this.initializeCustomerTable();
    })
  }

  openShippingAddress(element){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Customer's Shipping Address",id:element._id,Customer_Code:element.Customer_Code,Customer_Name:element.Customer_Name };

    let dalogRef=this.dialog.open(ShippingAddressFormComponent, dialogConfig);
    dalogRef.afterClosed().subscribe((data)=>{
      this.initializeCustomerTable();
    })
  }
  openChangeCustomerStatus(element){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Change Status",id:element._id,Customer_Code:element.Customer_Code,Customer_Name:element.Customer_Name };

    let dalogRef=this.dialog.open(ChangeCustomerStatusComponent, dialogConfig);
    dalogRef.afterClosed().subscribe((data)=>{
      this.initializeCustomerTable();
    })
  }

  showCustomerOrders(element){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { id:element._id,Customer_Code:element.Customer_Code,Customer_Name:element.Customer_Name };

    let dalogRef=this.dialog.open(ShowCustomerOrdersComponent, dialogConfig);
    dalogRef.afterClosed().subscribe((data)=>{
      this.initializeCustomerTable();
    })
  }
        
      
    

}
