import { SysSetupAuthGuardService } from "./../../authentication/services/sys-setup-auth-guard.service";
import { AuthGuardService } from "./../../authentication/services/auth-guard.service";
import { Routes, RouterModule } from "@angular/router";
import { ProductUnitComponent } from './product-unit/product-unit.component';
import { ProductMaterialFormComponent } from './product-material/product-material-form/product-material-form.component';
import { ProductMaterialComponent } from './product-material/product-material.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { WaysOfDeliveryComponent } from './ways-of-delivery/ways-of-delivery.component';
import { ProvinceComponent } from './province/province.component';
import { ReasonOfReturnOrderComponent } from './reason-of-return-order/reason-of-return-order.component';
import { ReasonOfCancelOrderComponent } from './reason-of-cancel-order/reason-of-cancel-order.component';
import { CodeNumberComponent } from './code-numbers/code-numbers.component';
import { TypesComponent } from './types/types.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryTypesComponent } from './category-types/category-types.component';

const routes: Routes = [
  {
    path: "sys-setup",
    children: [
      {
        path: "manage-code-number",
        component: CodeNumberComponent,
        data: { 
          title: "Aluminum Store Manager » System Setup » Code Number", 
          PageTitle: "Manage Code Number", 
          Breadcrumb: 'System Setup'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "manage-types",
        component: TypesComponent,
        data: { 
          title: "Aluminum Store Manager » System Setup » Types", 
          PageTitle: "Manage Types", 
          Breadcrumb: 'System Setup'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "manage-categories",
        component: CategoriesComponent,
        data: { 
          title: "Aluminum Store Manager » System Setup » Categories", 
          PageTitle: "Manage Categories", 
          Breadcrumb: 'System Setup'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
     
      {
        path: "manage-category-types",
        component: CategoryTypesComponent,
        data: { 
          title: "Aluminum Store Manager » System Setup » Category Types", 
          PageTitle: "Manage Category Types", 
          Breadcrumb: 'System Setup'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      
     
      {
        path: "manage-payment-methods",
        component: PaymentMethodsComponent,
        data: { 
          title: "Aluminum Store Manager » System Setup » Payment Methods", 
          PageTitle: "Manage Payment Methods", 
          Breadcrumb: 'System Setup'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "manage-ways-of-delivery",
        component: WaysOfDeliveryComponent,
        data: { 
          title: "Aluminum Store Manager » System Setup » Ways Of Delivery", 
          PageTitle: "Manage Ways Of Delivery", 
          Breadcrumb: 'System Setup'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "manage-province",
        component: ProvinceComponent,
        data: { 
          title: "Aluminum Store Manager » System Setup » Province", 
          PageTitle: "Manage Province", 
          Breadcrumb: 'System Setup'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "manage-return-reasons",
        component: ReasonOfReturnOrderComponent,
        data: { 
          title: "RxP CMS Manager » System Setup » Return Reasons", 
          PageTitle: "Manage Return Reasons", 
          Breadcrumb: 'System Setup'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "manage-cancel-reasons",
        component: ReasonOfCancelOrderComponent,
        data: { 
          title: "RxP CMS Manager » System Setup » Cancel Reasons", 
          PageTitle: "Manage Cancel Reasons", 
          Breadcrumb: 'System Setup'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
