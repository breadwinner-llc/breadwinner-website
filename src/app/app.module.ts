import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { PlatformSelectComponent } from './post/platform-select/platform-select.component';
import { AccountsAddComponent } from './accounts/accounts-add/accounts-add.component';
import { AccountsEditComponent } from './accounts/accounts-edit/accounts-edit.component';
import { ReactiveFormsModule} from '@angular/forms';
import { AccountsComponent } from './accounts/accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PostComponent,
    PlatformSelectComponent,
    AccountsAddComponent,
    AccountsEditComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
