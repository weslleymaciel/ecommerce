import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProdutosService {
  url:string = '';
  
  constructor(
    private http: Http
  ) { }

  getListaProdutos() {
    return [
      { "titulo": "Película De Gel Frontal Iphone 7 Plus + Fibra De Carbono Top", "preco": "R$ 17,85", "descricao": "Se trata de uma película de gel macia, protege a tela mais do que película de vidro, ao sofrer um impacto, a película por ser macia absorve a energia do impacto impedindo-á que chegue até a tela principal. Não trinca que nem a película de vidro, fica melhor para mexer no aparelho porque o touch não fica com aquela oleosidade, sendo assim, ao tocar você sentirá a tela macia e a resposta do touch não será influenciada pela película, funcionará normalmente.", "boolCarrinho": false },
      { "titulo": "Iphone 6 16gb Apple Tela 4,7 Garantia + 2 Brindes", "preco": "R$ 1.576,80", "descricao": "Com tecnologia criada para dar segurança e praticidade, o iPhone 6 iOS 8 4G + Wi-Fi Câmera 8MP Apple permite que você acesse seu smartphone de uma forma muito mais rápida, segura e bem personalizada e, você ainda ganha em estilo e sofisticação.", "boolCarrinho": true },
      { "titulo": "Telefone Sem Fio Elgin Tsf 7600 - Laranja - Original", "preco": "R$ 138,80", "descricao": "O telefone sem fio Elgin TSF-7600 é um aparelho compacto de uso residencial que traz como principais características: a função viva-voz, identificador de chamadas que pode ser visto no display com luz interna. Além disso, é um telefone com tecnologia DECT6.0 com frequência de 1.9 GHz que oferece alcance de 300 metros, com área livre e cobre 50 metros com bloqueio. Possui campainha com 6 níveis de volume e 10 toques para o usuário personalizar o aparelho.", "boolCarrinho": true },
      { "titulo": "Óculos Box Vr 2.0 Realidade Virtual 3d Android Ios Controle", "preco": "R$ 24,00", "descricao": "É um ótimo complemento e estendendo dispositivo da Rede Set-top Caixa e trazer-lhe maravilhosa experiência de assistir filmes e jogar jogos. Materiais: Utiliza ABS e 42 mm lente esférica resina material sem estimulação folha de plástico, ambiental.Oferece-lhe Super 3D efeito de imagem e sensação maravilhosa.Simulando distância de visualização: oferecer-lhe um 1000polegadas tela grande a uma distância de 3 m.Fácil de colocar o seu telefone inteligente para os óculos 3D (facilmente puxar o telefone inteligente caixa de armazenamento para fora, A colocar o seu telefone inteligente no mesmo).", "boolCarrinho": false },
      { "titulo": "Celular Samsung Galaxy J1 Mini Dual Chip 8gb Wi-fi 2 Câmeras", "preco": "R$ 349,98", "descricao": "Smartphone Samsung Galaxy J1 Mini com Android 5.1 8GB 3G Wi-FI Câmera 5MP. Compre aqui pelo menor preço!Conhecida mundialmente pela quantidade impressionante de aparelhos que possui, a linha Galaxy ficou ainda maior! O Samsung Galaxy J1 Mini é um excelente aparelho que, além de um lindo design, conta com toda a tecnologia que consagrou esta linha.Possui display de 4.0 com ótima resolução e processador Quad-Core, que permite desempenho superior na hora de abrir e gerenciar aplicativos. Conta com câmera principal de 5 MP e frontal VGA para quem não dispensa uma boa foto.", "boolCarrinho": false },
      { "titulo": "Miniatura Fusca The Beetle Volkswagen 1:43", "preco": "R$ 27,99", "descricao": "FABRICANTE: Volkswagen. DESENHADO EM: Alemanha. FABRICADO EM: China sob supervisão da Volkswagen. MODELO: 5C1 099 300 PXP. COR: Amarelo Conforme fotos. MATERIAL: METAL. ESCALA: 1:43. MEDIDAS APROXIMADAS: 99,8 x 40,9 x 34,9 em mm. MEDIDAS DA CAIXA de Acrílico: 16,3 X 7,5 X 8,9 EM CM. PESO COM CAIXA: 216 gramas.", "boolCarrinho": true },
      { "titulo": "Robô Droid Sphero Bb-8 Star Wars Original App Enable", "preco": "R$ 699,90", "descricao": "Conheça BB-8 - o Droid ativado por App que é tão autêntico quanto avançado. BB-8 tem algo diferente de qualquer outro robô - uma personalidade adaptável que muda como você joga. Com base em suas interações, BB-8 vai mostrar uma gama de expressões e até mesmo animar quando você dá comandos de voz. Definí-lo para patrulhar e observar o seu Droid e explorar de forma autónoma, fazer a sua própria aventura e orientar BB-8 mesmo, ou criar e exibir gravações holográficas (Somente vistas na tela do seu Smartphone).", "boolCarrinho": true },
      { "titulo": "Novo Fidget Hand Spinner Abec Anti Stress Ansiedade Com Led", "preco": "R$ 25,99", "descricao": "Você está sempre brincando, tocando em algo esta sempre com coisas em suas mãos? devido ao estres e ansiedade? Esta sempre mexendo em algo como canetas, isqueiro, ou outros objetos? Não consegue DESGRUDAR DO CELULAR?Não consegue deixar a mão desocupada? Esta tentando parar de fumar e devido a isso esta muito nervoso? Pois então o hand spinner vai te ajudar!!!", "boolCarrinho": true },
      { "titulo": "Kit 01 Magic Pad ( 01 Suporte Magnético 3m )", "preco": "R$ 10,99", "descricao": "Esse produto é ótimo para evitar que seus objetos caiam do painel do carro durante a movimentação. Este surpreendente tapete Anti Slip Pad é confeccionado em gel aderente ideal para manter seus itens em segurança, evitando que escorreguem pelo painel do carro. O antiderrapante foi projetado para ser utilizado no painel do carro, caminhões, barcos etc.. fixando itens como o celular, chaves, moedas entre outros objetos.", "boolCarrinho": true }
    ];
  }
  
  getProdutos(): Observable<any[]> {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  create(name: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, { name }, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
    
  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
    
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}