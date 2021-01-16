import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddClassicComponent } from './product-add-classic/product-add-classic.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: "products", component: ProductComponent },
  { path: "", redirectTo: "products", pathMatch: "full" },
  { path: "products/c/:categoryId", component: ProductComponent },
  { path: "product-add-classic", component: ProductAddClassicComponent },
  { path: "product-add-reactive", component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
