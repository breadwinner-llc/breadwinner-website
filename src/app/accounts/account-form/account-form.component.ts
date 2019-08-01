import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {FormControl, FormGroup} from '@angular/forms';
import {AccountInterface} from '../../interfaces/account.interface';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
  accountId = null;
  isEdit = false;
  accountForm;
  account  = {} as AccountInterface;
  show = true;
  constructor(private route: ActivatedRoute, private location: Location ) { }

  ngOnInit() {
    this.route.params.subscribe( (data) => {
      console.log(data)
      this.accountId = data.accountsId;
    });
    if (this.accountId != null) {
      this.isEdit = true;
      this.account = {id: 1, name: 'Ebay', userName: 'pdurgin', password: 'da174ero'};
    }
    this.initAccountForm();
  }
  initAccountForm() {
    this.accountForm = new FormGroup( {
      name: new FormControl(this.account.name),
      userName: new FormControl(this.account.userName),
      password: new FormControl(this.account.password)
    });
    this.disableSelect();
  }
  disableSelect() {
    if (this.isEdit) {
      this.accountForm.controls.name.disable();
    }
  }
  onSave() {
    console.log('Saved!');
  }
  onCancel() {
    this.location.back();
  }

}
