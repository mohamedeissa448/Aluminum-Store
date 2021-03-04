import { Component, OnInit } from '@angular/core';
import { CustomerReportService } from '../services/customer-report.service';

@Component({
  selector: 'app-customer-second-report',
  templateUrl: './customer-second-report.component.html',
  styleUrls: ['./customer-second-report.component.css']
})
export class CustomerSecondReportComponent implements OnInit {

  numOfAllCustomersWithOnlyOneOrder  : number = 0 ;
  numOfAllCustomersWithOnlyTwoOrders   : number = 0 ;
  numOfAllCustomersWithThreeOrdersOrMore : number = 0 ;
  
  constructor(private customerReportService : CustomerReportService) { }

  ngOnInit() {
    
  
  this.customerReportService.getNumOfAllCustomersWithOnlyOneOrder().subscribe((response : any) =>{
    if(response.message == true){
      this.numOfAllCustomersWithOnlyOneOrder = response.count ;
    }
  })

this.customerReportService.getNumOfAllCustomersWithOnlyTwoOrders().subscribe((response : any) =>{
  if(response.message == true){
    this.numOfAllCustomersWithOnlyTwoOrders = response.count ;
  }
})
this.customerReportService.getNumOfAllCustomersWithThreeOrdersOrMore().subscribe((response : any) =>{
  if(response.message == true){
    this.numOfAllCustomersWithThreeOrdersOrMore = response.count ;
  }
})


}

}
