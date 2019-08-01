import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PostInterface} from '../interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']

})
export class PostComponent implements OnInit {

  postForm;
  post: PostInterface;
  clothingSizes = ['XS', 'S', 'M', 'L', 'XL'];
  shoesSizes = this.setShoeSizes();

  constructor() { }

  ngOnInit() {
    this.initPostForm();
  }

  initPostForm() {
    this.postForm = new FormGroup( {
      productTitle: new FormControl(null, [Validators.required]),
      condition: new FormControl(null, [Validators.required]),
      boxCondition: new FormControl(null, [Validators.required]),
      size: new FormControl(null, [Validators.required]),
      photos: new FormControl(null, [Validators.required]),
      amountEarned: new FormControl(null, [Validators.required]),
      lb: new FormControl(null, [Validators.required]),
      oz: new FormControl(null, [Validators.required]),
      length: new FormControl(null, [Validators.required]),
      width: new FormControl(null, [Validators.required]),
      height: new FormControl(null, [Validators.required])
    });
  }

  setShoeSizes() {
    const sizes = [];
    for ( let x = 0; x <= 16; x++){
      sizes.push(x.toString());
    }
    return sizes;
  }

  submitPostForm() {

  }

}
