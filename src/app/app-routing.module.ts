import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderListComponent } from './list/order-list/order-list.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'', component: OrderListComponent, pathMatch: 'full'}])],
  exports: [RouterModule]
})

export class AppRoutingModule { }
