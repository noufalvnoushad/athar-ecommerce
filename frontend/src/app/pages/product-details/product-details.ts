import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {

  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {

    const productId = this.route.snapshot.paramMap.get('id');

    if (productId) {
      this.productService.getProductById(productId).subscribe((data: any) => {

        console.log(data);

        this.product = data.product;

      });
    }
  }
}
