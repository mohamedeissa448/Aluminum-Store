import { NgModule } from "@angular/core";
import { routing } from "./reports.routing";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule, MatNativeDateModule, MatProgressSpinnerModule, MatProgressBarModule, MatToolbarModule, MatSelectModule, MatAutocompleteModule } from "@angular/material";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDividerModule } from "@angular/material/divider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from '@angular/material';
import {MatSliderModule} from '@angular/material/slider';
import { StoreReportComponent } from './store-report/store-report.component';
import { CustomerFirstReportComponent } from './customer-first-report/customer-first-report.component';
import { CustomerSecondReportComponent } from './customer-second-report/customer-second-report.component';
import { CustomerThirdReportComponent } from './customer-third-report/customer-third-report.component';
import { AffiliateSellerReportOneComponent } from './affiliate-seller-report-one/affiliate-seller-report-one.component';
import { AffiliateSellerSecondReportComponent } from './affiliate-seller-second-report/affiliate-seller-second-report.component';
import { AffiliateSellerThirdReportComponent } from './affiliate-seller-third-report/affiliate-seller-third-report.component';
import { SupplierFirstReportComponent } from './supplier-first-report/supplier-first-report.component';
import { SupplierSecondReportComponent } from './supplier-second-report/supplier-second-report.component';
import { SupplierThirdReportComponent } from './supplier-third-report/supplier-third-report.component';
import { SupplierFourthReportComponent } from './supplier-fourth-report/supplier-fourth-report.component';
import { SupplierFifthReportComponent } from './supplier-fifth-report/supplier-fifth-report.component';
import { ProductFirstReportComponent } from './product-first-report/product-first-report.component';
import { ProductSecondReportComponent } from './product-second-report/product-second-report.component';
import { ProductThirdReportComponent } from './product-third-report/product-third-report.component';
import { EmployeeFirstReportComponent } from './employee-first-report/employee-first-report.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatSnackBarModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    routing,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
    MatToolbarModule, 
    MatSelectModule,
    MatChipsModule,
    MatSliderModule,
    MatAutocompleteModule
  ],
  declarations: [
StoreReportComponent,
CustomerFirstReportComponent,
CustomerSecondReportComponent,
CustomerThirdReportComponent,
AffiliateSellerReportOneComponent,
AffiliateSellerSecondReportComponent,
AffiliateSellerThirdReportComponent,
SupplierFirstReportComponent,
SupplierSecondReportComponent,
SupplierThirdReportComponent,
SupplierFourthReportComponent,
SupplierFifthReportComponent,
ProductFirstReportComponent,
ProductSecondReportComponent,
ProductThirdReportComponent,
EmployeeFirstReportComponent,
],
  entryComponents: [
  ]
})
export class ReportsModule {}
