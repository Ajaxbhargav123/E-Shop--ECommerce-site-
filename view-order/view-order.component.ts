import { product } from './../models/product';
import { Order } from './../models/order';
import {OrderService} from './../order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
  cart$;
  constructor(private _order:OrderService) { }

 async ngOnInit() {
  this.cart$= this._order.getOrder();

  }

}
