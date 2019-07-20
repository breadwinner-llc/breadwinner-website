import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AccountsEditComponent} from "./accounts/accounts-edit/accounts-edit.component";
import {AccountsAddComponent} from "./accounts/accounts-add/accounts-add.component";
import {PostComponent} from "./post/post.component";
import {PlatformSelectComponent} from "./post/platform-select/platform-select.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'accounts-add',
        component: AccountsAddComponent
      },
      {
        path: 'accounts-edit',
        component: AccountsEditComponent
      },
      {
        path: 'post',
        component: PostComponent,
        children: [
          {
            path: 'platform-select',
            component: PlatformSelectComponent
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
