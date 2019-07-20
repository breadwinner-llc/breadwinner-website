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
        path: '',
        component: PostComponent
      },
      {
        path: 'platform-select',
        component: PlatformSelectComponent
      },
      {
        path: 'accounts-add',
        component: AccountsAddComponent
      },
      {
        path: 'accounts-edit',
        component: AccountsEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
