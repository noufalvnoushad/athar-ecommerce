import { Routes } from '@angular/router';
import { Products } from './pages/products/products';
import { Categories } from './pages/categories/categories';
import { ProductDetails } from './pages/product-details/product-details';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
  path: '',
  component: Home
  },
  {
    path: 'products',
    component: Products
  },
  {
  path: 'categories',
  component: Categories
  },
  {
  path: 'products/:id',
  component: ProductDetails
}
];