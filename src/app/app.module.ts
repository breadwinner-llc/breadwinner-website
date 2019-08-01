import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { PlatformSelectComponent } from './post/platform-select/platform-select.component';
import { ReactiveFormsModule} from '@angular/forms';
import { AccountsComponent } from './accounts/accounts.component';
import {UserService} from './user.service';
import { AccountFormComponent } from './accounts/account-form/account-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PostComponent,
    PlatformSelectComponent,
    AccountsComponent,
    AccountFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
