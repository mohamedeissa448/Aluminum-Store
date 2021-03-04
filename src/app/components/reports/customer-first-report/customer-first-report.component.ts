import { Component, OnInit } from '@angular/core';
import { CustomerReportService } from '../services/customer-report.service';

@Component({
  selector: 'app-customer-first-report',
  templateUrl: './customer-first-report.component.html',
  styleUrls: ['./customer-first-report.component.css']
})
export class CustomerFirstReportComponent implements OnInit {
  numOfAllCustomers : number = 0 ;
  numOfAllActiveCustomers  : number = 0 ;
  numOfAllRiskyCustomers   : number = 0 ;
  numOfAllBlockedCustomers : number = 0 ;
  
  constructor(private customerReportService : CustomerReportService) { }

  ngOnInit() {
    this.customerReportService.getNumOfAllActiveCustomers().subscribe((response : any) =>{
      if(response.message == true){
        this.numOfAllCustomers = response.count ;
      }
    })
  
  this.customerReportService.getNumOfAllActiveCustomers().subscribe((response : any) =>{
    if(response.message == true){
      this.numOfAllActiveCustomers = response.count ;
    }
  })

this.customerReportService.getNumOfAllRiskyCustomers().subscribe((response : any) =>{
  if(response.message == true){
    this.numOfAllRiskyCustomers = response.count ;
  }
})
this.customerReportService.getNumOfAllBlockedCustomers().subscribe((response : any) =>{
  if(response.message == true){
    this.numOfAllBlockedCustomers = response.count ;
  }
})


}

}
