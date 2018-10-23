import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { VariantComponent } from './variant/variant.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


import {ModalModule} from 'ngx-bootstrap';

const routes: Routes = [
  {path: '', redirectTo:'/home' , pathMatch:'full'},
  {path: 'home',component: HomeComponent},
  {path: 'category',component: CategoryComponent},
  {path: 'variant',component: VariantComponent},
  {path: 'product',component: ProductComponent},
  {path: '**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot()
  ],
  exports: [RouterModule],
  declarations: [CategoryComponent, ProductComponent, VariantComponent, PageNotFoundComponent, LoginComponent]
})
export class AppRouterModule { }
