import { NgModule } from "@angular/core";
import { routing } from "./sys-setup.routing";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule, MatNativeDateModule, MatProgressSpinnerModule, MatProgressBarModule,MatSelectModule } from "@angular/material";
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
import { ProductUnitComponent } from './product-unit/product-unit.component';
import { ProductUnitFormComponent } from './product-unit/product-unit-form/product-unit-form.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ProductMaterialComponent } from './product-material/product-material.component';
import { ProductMaterialFormComponent } from './product-material/product-material-form/product-material-form.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { PaymentMethodsFormComponent } from './payment-methods/payment-methods-form/payment-methods-form.component';
import { WaysOfDeliveryComponent } from './ways-of-delivery/ways-of-delivery.component';
import { WaysOfDeliveryFormComponent } from './ways-of-delivery/ways-of-delivery-form/ways-of-delivery-form.component';
import { ProvinceComponent } from './province/province.component';
import { ProvinceFormComponent } from './province/province-form/province-form.component';
import { ReasonOfReturnOrderComponent } from './reason-of-return-order/reason-of-return-order.component';
import { ReasonOfCancelOrderComponent } from './reason-of-cancel-order/reason-of-cancel-order.component';
import { ReturnFormComponent } from './reason-of-return-order/return-form/return-form.component';
import { CancelFormComponent } from './reason-of-cancel-order/cancel-form/cancel-form.component';
import { CodeNumberComponent } from './code-numbers/code-numbers.component';
import { CodeNumberFormComponent } from './code-numbers/code-numbers-form/code-numbers-form.component';
import { TypesComponent } from './types/types.component';
import {TypeFormComponent } from './types/types-form/types-form.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import { CategoryTypesComponent } from './category-types/category-types.component';
import { CategoryTypesFormComponent } from './category-types/category-types-form/category-types-form.component';
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
    MatSelectModule,
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
    ColorPickerModule
  ],
  declarations: [
  CategoriesComponent,
  CategoriesFormComponent,
  ProductUnitComponent,
  ProductUnitFormComponent,
  TypesComponent,
  TypeFormComponent,
  ProductMaterialComponent,
  ProductMaterialFormComponent,
  CodeNumberComponent,
  CodeNumberFormComponent,
  CategoryTypesComponent,
  CategoryTypesFormComponent,
  PaymentMethodsComponent,
  PaymentMethodsFormComponent,
  WaysOfDeliveryComponent,
  WaysOfDeliveryFormComponent,
  ProvinceComponent,
  ProvinceFormComponent,
  ReasonOfReturnOrderComponent,
  ReasonOfCancelOrderComponent,
  ReturnFormComponent,
  CancelFormComponent,
  
],
  entryComponents: [
    CategoriesFormComponent,
    ProductUnitFormComponent,
    TypeFormComponent,
    ProductMaterialFormComponent,
    CodeNumberFormComponent,
    CategoryTypesFormComponent,
    PaymentMethodsFormComponent,
    WaysOfDeliveryFormComponent,
    ProvinceFormComponent,
    ReturnFormComponent,
    CancelFormComponent
  ]
  
})
export class SysSetupModule {}
