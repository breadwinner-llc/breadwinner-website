import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Post} from '../interfaces/post.interface';
import {Router} from '@angular/router';
import {UserService} from '../user.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']

})
export class PostComponent implements OnInit {

  postForm;
  post = {} as Post;
  clothingSizes = ['XS', 'S', 'M', 'L', 'XL'];
  shoesSizes = this.setShoeSizes();
  boxConditions = ['Good Condition', 'Damaged Box', 'No Original Box', 'Missing Lid'];
  public imagePath;
  imgURLS: any = [];
  public message: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.initPostForm();
  }

  initPostForm() {
    this.postForm = new FormGroup( {
      productTitle: new FormControl('', [Validators.required]),
      condition: new FormControl('', [Validators.required]),
      boxCondition: new FormControl('', [Validators.required]),
      clothingSize: new FormControl('', ),
      shoeSize: new FormControl('', ),
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
    for ( let x = 1; x <= 16; x = x + .5) {
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
      this.imgURLS.push(reader.result);
    };
  }

  submitPostForm() {
    if (this.postForm.valid) {
      this.post.productTitle = this.postForm.value.productTitle;
      this.post.condition = this.postForm.value.condition;
      this.post.boxCondition = this.postForm.value.boxCondition;
      this.post.clothingSize = this.postForm.value.clothingSize;
      this.post.shoeSize = this.postForm.value.shoeSize;
      this.post.photos = this.imgURLS;
      this.post.amountEarned = this.postForm.value.amountEarned;
      this.post.lb = this.postForm.value.lb;
      this.post.oz = this.postForm.value.oz;
      this.post.length = this.postForm.value.length;
      this.post.width = this.postForm.value.width;
      this.post.height = this.postForm.value.height;
      this.userService.post = this.post;
      this.router.navigate([`home/post/platforms`]);
    }
  }

}
