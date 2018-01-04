import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../shopping-cart.service';
import { AppUser } from './../models/app-user';
import { Component, OnInit } from '@angular/core';
import {AuthService} from './../auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
appUser: AppUser;
cart$:Observable<ShoppingCart>;
  constructor(private auth:AuthService, private shoppingCartServices:ShoppingCartService) { }

async ngOnInit(){
  this.auth.appUser$.subscribe(appUser=>this.appUser=appUser);
 this.cart$ = await this.shoppingCartServices.getCart();
}

  logout(){
this.auth.logout();
  }

}
