import {Injectable} from '@angular/core';
import {Post} from './interfaces/post.interface';
import {AccountInterface} from './interfaces/account.interface';

@Injectable()
export class UserService {
  userId = 0;
  userAccounts: AccountInterface[] = [{id: 1, name: 'Ebay', userName: 'pdurgin', password: 'da174ero', amountEarned: 50.00, selected: true},
    {id: 1, name: 'Ebay', userName: 'pdurgin', password: 'da174ero', amountEarned: 80.00, selected: false}];
  post = {} as Post;
  constructor() {}

}
