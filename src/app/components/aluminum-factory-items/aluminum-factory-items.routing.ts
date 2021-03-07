import { AuthGuardService } from "./../../authentication/services/auth-guard.service";
import { Routes, RouterModule } from "@angular/router";
import { ManageFactoryItemsComponent } from './manage-aluminum-factory-items/manage-aluminum-factory-items.component';

const routes: Routes = [
  {
    path: "aluminum-factory",
    children: [
      
      {
        path: "manage-aluminum-factory-items",
        component:  ManageFactoryItemsComponent,
        data: { 
          title: "Aluminum Store Manager Factory Items » Manage Factory Items", 
          PageTitle: "Manage Factory Items", 
          Breadcrumb: 'Factory Items'
        },
        canActivate: [AuthGuardService]
      },
       
    ]
  }
];

export const routing = RouterModule.forChild(routes);
