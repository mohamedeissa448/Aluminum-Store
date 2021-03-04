import { ManageAffiliateSellerAuthGuardService } from "./../../authentication/services/manage-affiliate-seller-auth-guard.service";
import { AuthGuardService } from "./../../authentication/services/auth-guard.service";
import { Routes, RouterModule } from "@angular/router";
import { ManageBromoCodeComponent } from './manage-bromo-code/manage-bromo-code.component';

const routes: Routes = [
  {
    path: "bromo-code",
    children: [
      
      {
        path: "manage-bromo-code",
        component: ManageBromoCodeComponent ,
        data: { 
          title: "Ogat Store Manager » BromoCode » Manage BromoCode", 
          PageTitle: "Manage BromoCode", 
          Breadcrumb: 'BromoCode'
        },
        canActivate: [AuthGuardService]
      },
       
    ]
  }
];

export const routing = RouterModule.forChild(routes);
