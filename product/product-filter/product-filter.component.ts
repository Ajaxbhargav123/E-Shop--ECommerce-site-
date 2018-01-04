import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  category$;
  @Input('category') category;
  constructor(category:CategoryService) { 
    this.category$=category.getAll();
  }

  ngOnInit() {
  }

}
