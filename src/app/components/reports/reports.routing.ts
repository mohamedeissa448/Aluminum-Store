import { SysSetupAuthGuardService } from "./../../authentication/services/sys-setup-auth-guard.service";
import { AuthGuardService } from "./../../authentication/services/auth-guard.service";
import { Routes, RouterModule } from "@angular/router";
import { StoreReportComponent } from './store-report/store-report.component';
import { CustomerFirstReportComponent } from './customer-first-report/customer-first-report.component';
import { CustomerSecondReportComponent } from './customer-second-report/customer-second-report.component';
import { CustomerThirdReportComponent } from './customer-third-report/customer-third-report.component';
import { AffiliateSellerReportOneComponent } from './affiliate-seller-report-one/affiliate-seller-report-one.component';
import { AffiliateSellerSecondReportComponent } from './affiliate-seller-second-report/affiliate-seller-second-report.component';
import { AffiliateSellerThirdReportComponent } from './affiliate-seller-third-report/affiliate-seller-third-report.component';
import { SupplierFirstReportComponent } from './supplier-first-report/supplier-first-report.component';
import { SupplierFifthReportComponent } from './supplier-fifth-report/supplier-fifth-report.component';
import { SupplierFourthReportComponent } from './supplier-fourth-report/supplier-fourth-report.component';
import { SupplierThirdReportComponent } from './supplier-third-report/supplier-third-report.component';
import { SupplierSecondReportComponent } from './supplier-second-report/supplier-second-report.component';
import { ProductFirstReportComponent } from './product-first-report/product-first-report.component';
import { ProductSecondReportComponent } from './product-second-report/product-second-report.component';
import { ProductThirdReportComponent } from './product-third-report/product-third-report.component';
import { EmployeeFirstReportComponent } from './employee-first-report/employee-first-report.component';

const routes: Routes = [
  {
    path: "reports",
    children: [
      
      {
        path: "store-quantities",
        component:  StoreReportComponent,
        data: { 
          title: "Ogat Store Manager » Report » Manage Store Report", 
          PageTitle: "Manage Store Report", 
          Breadcrumb: 'Report'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "customer-report-1",
        component:  CustomerFirstReportComponent,
        data: { 
          title: "Ogat Store Manager » Report » Manage Customer report 1", 
          PageTitle: "Manage Customer report 1", 
          Breadcrumb: 'Customer report 1'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "customer-report-2",
        component:  CustomerSecondReportComponent,
        data: { 
          title: "Ogat Store Manager » Report » Manage Customer report 2", 
          PageTitle: "Manage Customer report 2", 
          Breadcrumb: 'Customer report 2'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "customer-report-3",
        component:  CustomerThirdReportComponent,
        data: { 
          title: "Ogat Store Manager » Report » Manage Customer report 3", 
          PageTitle: "Manage Customer report 3", 
          Breadcrumb: 'Customer report 3'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "affiliate-seller-report-1",
        component:  AffiliateSellerReportOneComponent,
        data: { 
          title: "Ogat Store Manager » Report » Manage Seller report 1", 
          PageTitle: "Manage Seller report 1", 
          Breadcrumb: 'Seller report 1'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "affiliate-seller-report-2",
        component:  AffiliateSellerSecondReportComponent,
        data: { 
          title: "Ogat Store Manager » Report » Manage Seller report 2", 
          PageTitle: "Manage Seller report 2", 
          Breadcrumb: 'Seller report 2'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "affiliate-seller-report-3",
        component:  AffiliateSellerThirdReportComponent,
        data: { 
          title: "Ogat Store Manager » Report » Manage Seller report 3", 
          PageTitle: "Manage Seller report 3", 
          Breadcrumb: 'Seller report 3'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "supplier-report-1",
        component:  SupplierFirstReportComponent,
        data: { 
          title: "Ogat Store Manager » Report » Manage Supplier report 1", 
          PageTitle: "Manage Supplier report 1", 
          Breadcrumb: 'Supplier report 1'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "supplier-report-2",
        component:  SupplierSecondReportComponent,
        data: { 
          title: "Ogat Store Manager » Report » Manage Supplier report 2", 
          PageTitle: "Manage Supplier report 2", 
          Breadcrumb: 'Supplier report 2'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "supplier-report-3",
        component:  SupplierThirdReportComponent,
        data: { 
          title: "Ogat Store Manager » Report » Manage Supplier report 3", 
          PageTitle: "Manage Supplier report 3", 
          Breadcrumb: 'Supplier report 3'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "supplier-report-4",
        component:  SupplierFourthReportComponent,
        data: { 
          title: "Ogat Store Manager » Report » Manage Supplier report 4", 
          PageTitle: "Manage Supplier report 4", 
          Breadcrumb: 'Supplier report 4'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },{
        path: "supplier-report-5",
        component:  SupplierFifthReportComponent,
        data: { 
          title: "Ogat Store Manager » Report » Manage Supplier report 5", 
          PageTitle: "Manage Supplier report 5", 
          Breadcrumb: 'Supplier report 5'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "product-report-1",
        component:  ProductFirstReportComponent,
        data: { 
          title: "Ogat Store Manager » Report » Manage Product report 1", 
          PageTitle: "Manage Product report 1", 
          Breadcrumb: 'Product report 1'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "product-report-2",
        component:  ProductSecondReportComponent,
        data: { 
          title: "Ogat Store Manager » Report » Manage Product report 2", 
          PageTitle: "Manage Product report 2", 
          Breadcrumb: 'Product report 2'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "product-report-3",
        component:  ProductThirdReportComponent,
        data: { 
          title: "Ogat Store Manager » Report » Manage Product report 3", 
          PageTitle: "Manage Product report 3", 
          Breadcrumb: 'Product report 3'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },
      {
        path: "employee-report-1",
        component:  EmployeeFirstReportComponent,
        data: { 
          title: "Ogat Store Manager » Report » Manage Employee report 3", 
          PageTitle: "Manage Employee report 3", 
          Breadcrumb: 'Employee report 3'
        },
        canActivate: [AuthGuardService, SysSetupAuthGuardService]
      },

      
       
    ]
  }
];

export const routing = RouterModule.forChild(routes);
