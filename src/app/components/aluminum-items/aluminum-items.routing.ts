import { AuthGuardService } from "./../../authentication/services/auth-guard.service";
import { Routes, RouterModule } from "@angular/router";
import { AluminumItemsComponent } from './aluminum-items.component';
import { ManageAluminumItemAuthGuardService } from './../../authentication/services/aluminum-item-auth-guard.service';

const routes: Routes = [
  {
    path: "aluminum",
    children: [
      
      {
        path: "manage-aluminum-items",
        component: AluminumItemsComponent,
        data: { 
          title: "Aluminum Store Manager » Media » Manage Aluminum Items", 
          PageTitle: "Manage Aluminum Items", 
          Breadcrumb: 'Aluminum Items'
        },
        canActivate: [AuthGuardService, ManageAluminumItemAuthGuardService]
      },
       
    ]
  }
];

export const routing = RouterModule.forChild(routes);
