import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.css'
})
export class Categories {

  categories: any[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe((data: any) => {
      console.log(data);
      this.categories = data.categories;
    });
  }
}