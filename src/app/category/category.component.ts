import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from './category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
  ) { }
  title = "Kategory Listesi";
  categories: Category[] = [];

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(data => {
      this.categories = data;
    })

    this.activatedRoute.params.subscribe(e => {
      console.log("test"+e.categoryId)
    })
  }

}
