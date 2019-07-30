import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userId = 1;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.route.params.subscribe((data) => {
    //   this.userId = data.userId;
    // });
  }
  toAccounts() {
    this.router.navigate([`${1}/accounts`]);
  }

}
