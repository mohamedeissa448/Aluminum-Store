import { NgModule } from "@angular/core";
import { routing } from "./customer.routing";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule, MatNativeDateModule, MatProgressSpinnerModule, MatProgressBarModule, MatToolbarModule, MatSelectModule } from "@angular/material";
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
import {MatAutocompleteModule} from "@angular/material";
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { BillingAddressFormComponent } from './billing-address-form/billing-address-form.component';
import { ShippingAddressFormComponent } from './shipping-address-form/shipping-address-form.component';
import { ChangeCustomerStatusComponent } from './change-customer-status/change-customer-status.component';
import { ShowCustomerOrdersComponent } from './show-customer-orders/show-customer-orders.component';

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
  ManageCustomerComponent,  
  CustomerFormComponent,
  BillingAddressFormComponent, 
  ShippingAddressFormComponent, 
  ChangeCustomerStatusComponent,
   ShowCustomerOrdersComponent
],
  entryComponents: [
    CustomerFormComponent,
    BillingAddressFormComponent,
    ShippingAddressFormComponent ,
    ChangeCustomerStatusComponent ,
    ShowCustomerOrdersComponent
  ]
})
export class CustomerModule {}
