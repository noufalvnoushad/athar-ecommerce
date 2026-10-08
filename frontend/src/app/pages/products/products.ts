import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data: any) => {
      console.log(data);
      this.products = data.products;
    });
  }
}