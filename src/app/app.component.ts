import { Component } from '@angular/core';
import {UserService} from './user.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private titleService: Title) { this.setTitle(); }

  public setTitle() {
    this.titleService.setTitle( 'copyt' );
  }
}
