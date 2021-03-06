﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './component/app.component';
import { ProductDetailComponent } from './component/product-detail.component';
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
//import {InMemoryProductService} from "./mock/in-memory-product.service";
//import {ProductService} from "./service/product.service";
import {UserService} from "./service/user.service";


@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule
  ],
  declarations: [
      AppComponent,
      ProductDetailComponent
  ],
    providers: [UserService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
