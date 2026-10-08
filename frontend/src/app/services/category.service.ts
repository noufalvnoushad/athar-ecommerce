import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = 'http://localhost:5001/api/categories';

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(this.apiUrl);
  }
}