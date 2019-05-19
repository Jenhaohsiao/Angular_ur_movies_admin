import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { AdvertisingListComponent } from './advertising/advertising-list/advertising-list.component';
import { AdvertisingDetailComponent } from './advertising/advertising-detail/advertising-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'advertisings/list',
    component: AdvertisingListComponent
  },
  {
    path: 'advertisings/:id/edit',
    component: AdvertisingDetailComponent
  },

  {
    path: 'advertisings/new',
    component: AdvertisingDetailComponent
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
