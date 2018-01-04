import { ShoppingCartService } from './shopping-cart.service';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { AdminAuthGaurd } from './admin-auth-gaurd.service';
import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {CustomFormsModule} from 'ng2-validation';
import {DataTableModule} from 'angular-4-data-table'

import {environment} from './../environments/environment';

import {AuthService} from './auth.service';
import {AuthGaurd} from './auth-gaurd.service';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {BsNavbarComponent} from './bs-navbar/bs-navbar.component'
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-order/my-order.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductFilterComponent } from './product/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { OrderService } from './order.service';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ViewOrderComponent } from './view-order/view-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductComponent,
    AdminOrderComponent,
    LoginComponent,
    BsNavbarComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    ViewOrderComponent
  ],
  imports: [
    CustomFormsModule,
    DataTableModule,
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
    {path:'',component:ProductComponent},
    {path:'product',component:ProductComponent},
    {path:'check-out',component:CheckOutComponent, canActivate:[AuthGaurd]},
    {path:'my-order',component:MyOrdersComponent},
    {path:'order-success/:id',component:OrderSuccessComponent,canActivate:[AuthGaurd]},
    {path:'shopping-cart',component:ShoppingCartComponent,canActivate:[AuthGaurd]},
    {path:'admin/admin-order',component:AdminOrderComponent ,canActivate:[AuthGaurd,AdminAuthGaurd]},
    {path:'admin/admin-product',component:AdminProductComponent ,canActivate:[AuthGaurd,AdminAuthGaurd]},
    {path:'admin/product-form/:id',component:ProductFormComponent ,canActivate:[AuthGaurd,AdminAuthGaurd]},
{path:'vieworder/view-order',component:ViewOrderComponent},
    {path:'admin/admin-form',component:ProductFormComponent ,canActivate:[AuthGaurd,AdminAuthGaurd]},
    {path:'login',component:LoginComponent}
    ])
  ],
  providers: [ 
    AuthService,
    AuthGaurd,
    UserService,
    AdminAuthGaurd,
    CategoryService,
   ProductService,
   ShoppingCartService,
   OrderService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
