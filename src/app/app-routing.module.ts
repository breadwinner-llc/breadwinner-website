import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AccountsEditComponent} from './accounts/accounts-edit/accounts-edit.component';
import {AccountsAddComponent} from './accounts/accounts-add/accounts-add.component';
import {PostComponent} from './post/post.component';
import {PlatformSelectComponent} from './post/platform-select/platform-select.component';
import {AccountsComponent} from './accounts/accounts.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: ':userId',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: PostComponent
      },
      {
        path: 'platform-select',
        component: PlatformSelectComponent
      },
      {
        path: 'accounts',
        component: AccountsComponent,
        children: [
          {
            path: 'add',
            component: AccountsAddComponent
          },
          {
            path: ':accountId/edit',
            component: AccountsEditComponent
          }
          ],
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
