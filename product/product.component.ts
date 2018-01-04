import { product } from './../models/product';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import  'rxjs/add/operator/switchMap';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit , OnDestroy {
products:product[];
filteredProducts:product[];
category:string;
cart:any;
subscription:Subscription;

  constructor(route:ActivatedRoute, private shoppingCartService:ShoppingCartService, productServices:ProductService) { 

    
  productServices.getAll().switchMap(products=>
    {
      this.products=products;
    return route.queryParamMap;
  })
 .subscribe(parms=>{
    this.category=parms.get("category");
    this.filteredProducts=(this.category)?
    this.products.filter(p=>p.category=== this.category) :
    this.products;
    });
 
  }

 async ngOnInit(){
 this.subscription = (await this.shoppingCartService.getCart())
 .subscribe(cart=>this.cart=cart);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
