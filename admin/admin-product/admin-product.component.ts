import { ProductComponent } from './../../product/product.component';
import {product} from './../../models/product'
import { DataTableModule } from 'angular-4-data-table';
import { ProductService } from './../../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {DataTableResource} from 'angular-4-data-table';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit , OnDestroy {
  products:product[];
  items:product[]=[];
  subscription:Subscription;
  itemCount:number;
  tableResource:DataTableResource<product>;
  constructor(private productService:ProductService) 
  {
  this.subscription=this.productService.getAll().subscribe(products=>
    {
      this.products=products;
     this.InitilizeTable(products);
    });
  }

private InitilizeTable(products:product[]){
  this.tableResource=new DataTableResource(products);
  this.tableResource.query({offset:0}).then(items=>this.items=items);
  this.tableResource.count().then(count=>this.itemCount=count);
}

reloadItem(params){
  if(!this.tableResource) return;
  this.tableResource.query(params)
  .then(items=>this.items=items);
}
  ngOnInit() {
  }
  ngOnDestroy(){
this.subscription.unsubscribe();
  }
filter(query:string){
 let filterProduct=(query)?
 this.products.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())):
 this.products;

 this.InitilizeTable(filterProduct);
}
}
