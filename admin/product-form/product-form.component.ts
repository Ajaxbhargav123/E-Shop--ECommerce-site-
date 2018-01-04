import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
 categories$;
 product= {};
 id;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private categoryService:CategoryService,
    private priductservice:ProductService) 
    { 
    this.categories$=categoryService.getAll();
    this.id=this.route.snapshot.paramMap.get('id');
    if(this.id)
    this.priductservice.get(this.id).take(1).subscribe(p=>this.product=p);
    }

  ngOnInit() {
  }
save(product){
  if(this.id)
  this.priductservice.update(this.id,product);
  else
this.priductservice.create(product);
this.router.navigate(['/admin/admin-product']);
}
delete(){
  if(!confirm("are u sure you want to delete"))
  return;
    this.priductservice.delete(this.id);
    this.router.navigate(['/admin/admin-product']);
  }
}
