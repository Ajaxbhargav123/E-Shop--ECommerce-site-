import { AuthService } from './../auth.service';
import { OrderService } from './../order.service';
import { Component } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { product } from './../models/product';

@Component({
  selector: 'my-orders',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrdersComponent {
  orders$;
  products:product[];
  cart:any;
  
  constructor(
    private authService: AuthService,
    private orderService: OrderService) { 
    this.orders$ = authService.user$.switchMap(u => orderService.getOrdersByUser(u.uid));
  }
}
