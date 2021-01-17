import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../category/category';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-add-reactive',
  templateUrl: './category-add-reactive.component.html',
  styleUrls: ['./category-add-reactive.component.css'],
  providers: [CategoryService]
})
export class CategoryAddReactiveComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private alertifyService: AlertifyService
  ) { }

  model: Category = new Category();
  categoryAddForm!: FormGroup;


  ngOnInit(): void {
    this.categoryAddForm = this.formBuilder.group({
      name: new FormControl(this.model.name, [Validators.required])
    });
  }

  add() {
    if (this.categoryAddForm!.valid) {
      this.model = Object.assign({}, this.categoryAddForm!.value)
    }

    this.categoryService.addCategory(this.model).subscribe(data => {
      this.alertifyService.success(data.name + "kategorisi eklendi.");
    })
  }

  get name() { return this.categoryAddForm.get('name'); }

}
