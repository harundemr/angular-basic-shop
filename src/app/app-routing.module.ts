import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryAddReactiveComponent } from './category-add-reactive/category-add-reactive.component';
import { ProductAddClassicComponent } from './product-add-classic/product-add-classic.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: "products", component: ProductComponent },
  { path: "", redirectTo: "products", pathMatch: "full" },
  { path: "products/c/:categoryId", component: ProductComponent },
  { path: "product-add-classic", component: ProductAddClassicComponent },
  { path: "category-add-reactive", component: CategoryAddReactiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
