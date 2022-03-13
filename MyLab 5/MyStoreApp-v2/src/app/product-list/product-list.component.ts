import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
  categoryType: string[];
  showingCategory: string;
  

  constructor() {
    this.categoryType = ['Mac', 'iPhone', 'iPad', 'Apple Watch']
    this.showingCategory = ''
  }

  selectCategory(index: number) {
    this.showingCategory = this.categoryType[index]
    console.log(this.showingCategory)
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/