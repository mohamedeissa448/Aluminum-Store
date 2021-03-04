import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource, MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { EmployeeReportService } from '../services/employee-report.service';

@Component({
  selector: 'app-employee-first-report',
  templateUrl: './employee-first-report.component.html',
  styleUrls: ['./employee-first-report.component.css']
})
export class EmployeeFirstReportComponent implements OnInit {

  Total_Num_Of_Orders = 0;
  isLoading=true
  users : any =[];
  data;
  searchKey: string;
  searchDate:any={}
  displayedColumns: string[] = ["User Code","User Name", "Number Of All User Orders","Number Of Cancellerd Orders","Cancelled Percentage","Number Of Returned Orders","Returned Percentage"];
  ArrayToShowInGrid : any = [];
  filteredUsers : any = [];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  constructor(
    private dialog: MatDialog,
    private EmployeeReportService: EmployeeReportService
  ) {}

  ngOnInit() {
    this.initializeTable();
  }
  initializeTable() {
    this.EmployeeReportService.getAllUsers().subscribe((users: any) => {
      this.isLoading = false;
      this.users = users;
      this.ArrayToShowInGrid = new MatTableDataSource([]);
      this.ArrayToShowInGrid.sort = this.sort;
      this.ArrayToShowInGrid.paginator = this.paginator;
      
    });
    
  }
 
  
  searchdataByDates(){
    console.log("searchDate ",this.searchDate);
    this.isLoading = true
    this.EmployeeReportService.getOrdersByDateFromTo({ searchDate: this.searchDate  }).subscribe((orders: any) => {
      this.isLoading = false;
      this.Total_Num_Of_Orders = orders.length;
      this.users.forEach((user,outerIndex)=>{
        
        this.filteredUsers.push({
          User_Code                  : user.User_Code,
          User_Name                  : user.User_Name,
          Number_Of_ALL_Orders       : 0                          ,
          Number_Of_Cancelled_Orders : 0                          ,
          Number_Of_Returned_Orders  : 0                          ,
        });
        orders.forEach((order,innerIndex)=>{
          if( order.Order_InvntoryHandlingAssignedTo && user._id == order.Order_InvntoryHandlingAssignedTo._id){
            this.filteredUsers[outerIndex].Number_Of_ALL_Orders ++;
            if(order.Order_Status == "Cancelled")
              this.filteredUsers[outerIndex].Number_Of_Cancelled_Orders ++;
            if(order.Order_Status == "Returned")
              this.filteredUsers[outerIndex].Number_Of_Returned_Orders ++;
          }
            
        })
      });
      
      this.ArrayToShowInGrid = new MatTableDataSource(this.filteredUsers);
      this.ArrayToShowInGrid.sort = this.sort;
      this.ArrayToShowInGrid.paginator = this.paginator;
      
    });
  }
   


}
