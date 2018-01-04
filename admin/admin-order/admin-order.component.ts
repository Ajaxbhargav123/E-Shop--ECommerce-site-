import { OrderService } from './../../order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit {
orders$;
  constructor(private orderService:OrderService) { this.orders$ = orderService.getOrder() }

  ngOnInit() {
  }

}
