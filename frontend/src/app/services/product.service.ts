import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:5001/api/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.apiUrl);
  }
  
  getProductById(id: string) {
  return this.http.get(`${this.apiUrl}/${id}`);
}
}