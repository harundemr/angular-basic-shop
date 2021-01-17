import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryAddReactiveComponent } from './category-add-reactive/category-add-reactive.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { ProductAddClassicComponent } from './product-add-classic/product-add-classic.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "products", component: ProductComponent },
  { path: "p/c/:categoryId", component: ProductComponent },
  { path: "product-add-classic", component: ProductAddClassicComponent, canActivate:[LoginGuard] },
  { path: "category-add-reactive", component: CategoryAddReactiveComponent, canActivate:[LoginGuard] },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
