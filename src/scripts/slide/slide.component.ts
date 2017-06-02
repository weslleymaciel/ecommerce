import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ProdutoComponent } from '../produto/produto.component';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  serviceProdutos: LocalService = new LocalService();
  produtos: ProdutoComponent[] = [];

  constructor() {

  }

  ngOnInit() {
    this.setListaProdutos();
  }

  setListaProdutos() {
    let lista = this.serviceProdutos.getListaProdutos();
    this.produtos = [];

    for (let i = 0; i < 20; i++) {
      this.produtos.push(new ProdutoComponent({ "titulo": "Titulo" + i, "preco": "R$ 17,85", "descricao": "Se trata de uma película de gel macia, protege a tela mais do que película de vidro, ao sofrer um impacto, a película por ser macia absorve a energia do impacto impedindo-á que chegue até a tela principal. Não trinca que nem a película de vidro, fica melhor para mexer no aparelho porque o touch não fica com aquela oleosidade, sendo assim, ao tocar você sentirá a tela macia e a resposta do touch não será influenciada pela película, funcionará normalmente.", "boolCarrinho": true }));
    }

    //    for (let item of lista) {
    //      //this.produtosTodos.push(new ProdutoComponent(item));
    //      this.produtos.push(new ProdutoComponent(item));
    //    }

  }

}
