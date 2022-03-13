import { Component, Input, OnInit } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  products = products;

  // @ts-ignore
  @Input showingCategory: string;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  liked(product: Product) {
    if(!product.liked) {
      product.likes += 1
    }
    else {
      product.likes -= 1
    }
    
    product.liked = !product.liked
  }

  remove(product: Product) {
    // this.products.splice(product.id - 1, 1)
    product.removed = true;
  }
}
