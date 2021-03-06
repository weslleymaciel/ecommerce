import { produtosGlobal } from '../global/SharedService';
import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { ProdutoComponent } from '../produto/produto.component';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  @Output() totalValorEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() totalCarrinhoEmitter: EventEmitter<number> = new EventEmitter<number>();
  @Output() produtosEmitter: EventEmitter<any> = new EventEmitter<any>();

  @Input() produtos;

  serviceProdutos: LocalService = new LocalService();

  pagina: number = 0;
  itensPagina: number = 5;
  maxPag: number = 0;
  totalValor: string = "R$ 100,00";
  totalCarrinho: number = 100;
  mensagemErro: string = "";
  indexStart: number = 0;
  indexEnd: number = 0;

  constructor() {
    this.setListaProdutos();
  }

  ngOnInit() {
    this.setListaProdutos();
  }

  setListaProdutos() {
    this.produtos = produtosGlobal;

    this.controlaPaginacao("atualiza");
  }

  totalValorAtualizado() {
    this.totalValorEmitter.emit(this.totalValor);
  }

  totalCarrinhoAtualizado() {
    this.totalCarrinhoEmitter.emit(this.totalCarrinho);
  }

  produtosAtualizado() {
    this.produtosEmitter.emit(this.produtos);
  }

  controlaPaginacao(botao) {

    this.maxPag = Math.floor(Number(this.produtos.length) / this.itensPagina);

    if (botao == "anterior") {
      if (this.pagina > 0) {
        this.pagina--;
      }
    } else if (botao == "proximo") {
      if (this.pagina < this.maxPag - 1) {
        this.pagina++;
      }
    } else if (botao == "atualiza") {
      this.setTotal();
    }

    this.indexStart = this.pagina * this.itensPagina;
    this.indexEnd = this.pagina * this.itensPagina + this.itensPagina;

    if (this.indexEnd > this.produtos.length) {
      this.indexEnd = this.produtos.length;
    }
  }

  setTotal() {
    this.totalCarrinho = 0;
    let precoTotal: number = 0;

    for (let produto of this.produtos) {
      if (produto.getBoolCarrinho()) {
        let preco = produto.getPreco().replace("R", "").replace("$", "").replace(".", "").replace(",", ".");
        precoTotal += Number(preco);
        this.totalCarrinho++;
      }
    }

    this.totalValor = this.dinheiro(String(precoTotal.toFixed(2)));

    this.totalValorAtualizado();
    this.totalCarrinhoAtualizado();
    this.produtosAtualizado();
  }

  dinheiro(valor: string) {
    valor = valor.replace(/\D/g, '');
    valor = valor.replace(/(\d{1,2})$/, ',$1');
    valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    valor = valor != '' ? 'R$ ' + valor : '';
    return valor;
  }

  removeItem(item) {
    //this.produtos.splice(index, 1);
    item.setBoolCarrinho(false);
    this.controlaPaginacao("atualiza");
  }

  carrinhoVazio() {
    for (let item of this.produtos) {
      if (item.getBoolCarrinho()) {
        return false;
      }
    }
    return true;
  }

}
