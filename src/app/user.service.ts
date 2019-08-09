
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {Injectable} from '@angular/core';
import {Post} from './interfaces/post.interface';
import {AccountInterface} from './interfaces/account.interface';

@Injectable()
export class UserService {
  userId;
  userAccounts: AccountInterface[] = [{id: 1, name: 'Ebay', userName: 'pdurgin', password: 'da174ero', amountEarned: 50.00, selected: true},
    {id: 1, name: 'Ebay', userName: 'pdurgin', password: 'da174ero', amountEarned: 80.00, selected: false}];
  post = {} as Post;
  constructor(public afAuth: AngularFireAuth) {
  }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
          this.userId = res.user.uid;
        }, err => reject(err));
    });
  }

  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
          this.userId = res.user.uid;
        }, err => reject(err));
    });
  }
}
