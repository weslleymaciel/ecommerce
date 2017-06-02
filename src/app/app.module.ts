import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VitrineComponent } from '../scripts/vitrine/vitrine.component';
import { CarrinhoComponent } from '../scripts/carrinho/carrinho.component';
import { ProdutosService } from '../scripts/services/produtos.service';
import { SlideComponent } from '../scripts/slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    VitrineComponent,
    CarrinhoComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
