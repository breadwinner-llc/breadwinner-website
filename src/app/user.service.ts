
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {Injectable} from '@angular/core';
import {Post} from './interfaces/post.interface';
import {AccountInterface} from './interfaces/account.interface';

@Injectable()
export class UserService {
  userId;
  userPlatforms: AccountInterface[] = [];
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
          this.getPlatforms();
        }, err => reject(err));
    });
  }
  createPlatform(data: AccountInterface) {
    firebase.firestore().collection('users').add({
      password: data.password,
      platform: data.name,
      userId: this.userId,
      usernameOrEmail: data.userName,
      selected: false
    })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      })
    this.getPlatforms();
  }
  getPlatforms() {
    this.userPlatforms = [];
    const usersRef = firebase.firestore().collection('users');
    const query = usersRef.where('userId', '==', this.userId).get().then( snapshot => {
      snapshot.forEach(doc => {
        const data = doc.data();
        this.userPlatforms.push({id: doc.id, name: data.platform, userName: data.usernameOrEmail, password: data.password,
          selected: data.selected, amountEarned: 0});
        console.log(this.userPlatforms);
      });
    });
  }
  getPlatformById(id: string): AccountInterface {
    for (const platform of this.userPlatforms) {
      if (platform.id === id) {
        return platform;
      }
    }
  }
  updatePlatform(data: AccountInterface) {
    const account = {password: data.password, usernameOrEmail: data.userName, selected: data.selected};
    firebase.firestore().collection('users').doc(data.id).update(account);
    this.getPlatforms();
  }
}
