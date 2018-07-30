import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { MaterialModule } from '../material.module';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerComponent } from './manager.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, ManagerRoutingModule, MaterialModule, FlexLayoutModule],
  declarations: [
    ManagerHomeComponent,
    ManagerComponent,
    UserManagementComponent,
    ReceiptLookupComponent,
  ],
})
export class ManagerModule {}
