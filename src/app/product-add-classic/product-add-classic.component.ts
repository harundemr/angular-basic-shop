import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../category/category';
import { Product } from '../product/product';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-add-classic',
  templateUrl: './product-add-classic.component.html',
  styleUrls: ['./product-add-classic.component.css'],
  providers: [CategoryService, ProductService]
})
export class ProductAddClassicComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private productServirce: ProductService,
    private alertifyService: AlertifyService
  ) { }
  model: Product = new Product();
  categories!: Category[];
  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(data => {
      this.categories = data;
    })
  }

  add(form: NgForm) {
    this.productServirce.addProduct(this.model).subscribe(data=>{
      this.alertifyService.success(data.name + "eklendi.")
    });

  }
}
