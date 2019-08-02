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
  boxConditions = ['Good Condition', 'Damaged Box', 'No Original Box', 'Missing Lid'];
  public imagePath;
  imgURL: any;
  public message: string;

  constructor() { }

  ngOnInit() {
    this.initPostForm();
  }

  initPostForm() {
    this.postForm = new FormGroup( {
      productTitle: new FormControl('', [Validators.required]),
      condition: new FormControl('', [Validators.required]),
      boxCondition: new FormControl('', [Validators.required]),
      size: new FormControl('', [Validators.required]),
      photos: new FormControl('', [Validators.required]),
      amountEarned: new FormControl('', [Validators.required]),
      lb: new FormControl('', [Validators.required]),
      oz: new FormControl('', [Validators.required]),
      length: new FormControl('', [Validators.required]),
      width: new FormControl('', [Validators.required]),
      height: new FormControl('', [Validators.required])
    });
  }

  setShoeSizes() {
    const sizes = [];
    for ( let x = 0; x <= 16; x++){
      sizes.push(x.toString());
    }
    return sizes;
  }

  preview(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      this.imgURL = reader.result;
    };
  }

  submitPostForm() {

  }

}
