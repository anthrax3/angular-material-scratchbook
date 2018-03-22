import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrdersService } from './orders.service';
import { MaterialAppModule } from '../ngmaterial.module';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MaterialAppModule,
  ],
  declarations: [OrderListComponent],
  providers: [OrdersService]
})
export class OrdersModule { }
