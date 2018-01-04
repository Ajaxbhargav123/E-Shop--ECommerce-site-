import { UserService } from './user.service';
import { AppUser } from './models/app-user';
import { Injectable } from '@angular/core'; 
import * as firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private auth:AngularFireAuth,private route:ActivatedRoute,private userservices:UserService) {
    this.user$ = auth.authState;
       }
    
    login(){
     let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')||'/';
     localStorage.setItem('returnUrl',returnUrl);
      this.auth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
logout(){
  this.auth.auth.signOut();
}

get appUser$():Observable<AppUser>
{
  return this.user$.switchMap(user=>
    {
      if(user) return this.userservices.get(user.uid);
      return Observable.of(null);
  
});
}
}