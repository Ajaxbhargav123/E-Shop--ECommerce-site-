import { Injectable } from '@angular/core';
import {CanActivate,Router,RouterStateSnapshot} from '@angular/router';
import 'rxjs/add/operator/map';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGaurd implements CanActivate  {

  constructor(private auth:AuthService, private router:Router) {
    
   }

  canActivate(router,state:RouterStateSnapshot){
   return this.auth.user$.map(user=>{
      if(user)
      return true;
      this.router.navigate(['/login'],{queryParams :{returnUrl:state.url }});
      return false;
    });
  }
}
