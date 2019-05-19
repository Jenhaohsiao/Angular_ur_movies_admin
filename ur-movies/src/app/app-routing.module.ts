import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { AdvertisingListComponent } from './advertising/advertising-list/advertising-list.component';
import { AdvertisingEditComponent } from './advertising/advertising-edit/advertising-edit.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'advertising-list',
    component: AdvertisingListComponent
  },
  {
    path: 'advertising-edit',
    component: AdvertisingEditComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
