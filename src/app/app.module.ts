import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ProductAddClassicComponent } from './product-add-classic/product-add-classic.component';
import { CategoryAddReactiveComponent } from './category-add-reactive/category-add-reactive.component';
import { LoginComponent } from './login/login.component';
import { AccountService } from './services/account.service';
import { AlertifyService } from './services/alertify.service';
import { LoginGuard } from './login/login.guard';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductAddClassicComponent,
    CategoryAddReactiveComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AccountService,AlertifyService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
