import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PostComponent} from './post/post.component';
import {PlatformSelectComponent} from './post/platform-select/platform-select.component';
import {AccountsComponent} from './accounts/accounts.component';
import {LoginComponent} from './login/login.component';
import {AccountFormComponent} from './accounts/account-form/account-form.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'post',
        children: [
          {
            path: '',
            component: PostComponent,
          },
          {
            path: 'platforms',
            component: PlatformSelectComponent
          }
        ]
      },
      {
        path: 'accounts',
        children: [
          {
            path: '',
            component: AccountsComponent
          },
          {
            path: 'add',
            component: AccountFormComponent
          },
          {
            path: ':accountsId/edit',
            component: AccountFormComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
