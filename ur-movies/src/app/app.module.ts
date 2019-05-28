import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule } from '@angular/common/http';

import { AdvertisingListComponent } from './advertising/advertising-list/advertising-list.component';
import { AdvertisingDetailComponent } from './advertising/advertising-detail/advertising-detail.component';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartSaleComponent } from './chart/chart-sale/chart-sale.component';
import { ChartProductComponent } from './chart/chart-product/chart-product.component';
import { ChartOrderComponent } from './chart/chart-order/chart-order.component';
import { ChartCustomerComponent } from './chart/chart-customer/chart-customer.component';
import { ChartKeyPointComponent } from './chart/chart-key-point/chart-key-point.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    CustomerComponent,
    AdvertisingListComponent,
    AdvertisingDetailComponent,
    DashboardComponent,
    ChartSaleComponent,
    ChartProductComponent,
    ChartOrderComponent,
    ChartCustomerComponent,
    ChartKeyPointComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
