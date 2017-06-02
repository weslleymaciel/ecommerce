import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CarrinhoComponent } from './carrinho.component';

@NgModule({
  declarations: [
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [CarrinhoComponent]
})
export class CarrinhoModule { }
