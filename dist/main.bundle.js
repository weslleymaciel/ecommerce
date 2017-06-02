webpackJsonp([1,4],{

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoComponent; });
var ProdutoComponent = (function () {
    function ProdutoComponent(params) {
        if (params && params != undefined) {
            this.titulo = params.titulo ? params.titulo : 'Títudo do produto';
            this.imgSmall = params.imgSmall ? params.imgSmall : '../img/img-64-64.png';
            this.imgMedium = params.imgMedium ? params.imgMedium : '../img/img-171-180.png';
            this.imgLarge = params.imgLarge ? params.imgLarge : '../img/img-242-200.png';
            this.imgSlide = params.imgSlide ? params.imgSlide : '../img/img-Slide.png';
            this.preco = params.preco ? params.preco : 'R$ 100,00';
            this.descricao = params.descricao ? params.descricao : 'Descrição do produto.';
            this.boolCarrinho = params.boolCarrinho ? params.boolCarrinho : false;
            this.id = params.id ? params.id : 0;
        }
    }
    ProdutoComponent.prototype.setId = function (_id) {
        this.id = _id;
    };
    ProdutoComponent.prototype.getId = function () {
        return this.id;
    };
    ProdutoComponent.prototype.setTitulo = function (_titulo) {
        this.titulo = _titulo;
    };
    ProdutoComponent.prototype.getTitulo = function () {
        return this.titulo;
    };
    ProdutoComponent.prototype.setImgSmall = function (_imgSmall) {
        this.imgSmall = _imgSmall;
    };
    ProdutoComponent.prototype.getImgSmall = function () {
        return this.imgSmall;
    };
    ProdutoComponent.prototype.setImgMedium = function (_imgMedium) {
        this.imgMedium = _imgMedium;
    };
    ProdutoComponent.prototype.getImgMedium = function () {
        return this.imgMedium;
    };
    ProdutoComponent.prototype.setImgLarge = function (_imgLarge) {
        this.imgLarge = _imgLarge;
    };
    ProdutoComponent.prototype.getImgLarge = function () {
        return this.imgLarge;
    };
    ProdutoComponent.prototype.setImgSlide = function (_imgSlide) {
        this.imgSlide = _imgSlide;
    };
    ProdutoComponent.prototype.getImgSlide = function () {
        return this.imgSlide;
    };
    ProdutoComponent.prototype.setPreco = function (_preco) {
        this.preco = _preco;
    };
    ProdutoComponent.prototype.getPreco = function () {
        return this.preco;
    };
    ProdutoComponent.prototype.setDescricao = function (_descricao) {
        this.descricao = _descricao;
    };
    ProdutoComponent.prototype.getDescricao = function () {
        return this.descricao;
    };
    ProdutoComponent.prototype.setBoolCarrinho = function (_boolCarrinho) {
        this.boolCarrinho = _boolCarrinho;
    };
    ProdutoComponent.prototype.getBoolCarrinho = function () {
        return this.boolCarrinho;
    };
    return ProdutoComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/ecommerce/src/produto.component.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalService; });
var LocalService = (function () {
    function LocalService() {
    }
    LocalService.prototype.getListaProdutos = function () {
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
    };
    return LocalService;
}());
//# sourceMappingURL=C:/xampp/htdocs/ecommerce/src/local.service.js.map

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 346;


/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(455);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/xampp/htdocs/ecommerce/src/main.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_produto_produto_component__ = __webpack_require__(201);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.totalValor = "R$ 100,00";
        this.totalCarrinho = 10;
        this.boolVitrine = true;
        this.boolCarrinho = false;
        this.produtosGlobal = [];
        this.produtosGlobal = [
            new __WEBPACK_IMPORTED_MODULE_1__scripts_produto_produto_component__["a" /* ProdutoComponent */]({ "titulo": "Película De Gel Frontal Iphone 7 Plus + Fibra De Carbono Top", "preco": "R$ 17,85", "descricao": "Se trata de uma película de gel macia, protege a tela mais do que película de vidro, ao sofrer um impacto, a película por ser macia absorve a energia do impacto impedindo-á que chegue até a tela principal. Não trinca que nem a película de vidro, fica melhor para mexer no aparelho porque o touch não fica com aquela oleosidade, sendo assim, ao tocar você sentirá a tela macia e a resposta do touch não será influenciada pela película, funcionará normalmente.", "boolCarrinho": false, "id": 0 }),
            new __WEBPACK_IMPORTED_MODULE_1__scripts_produto_produto_component__["a" /* ProdutoComponent */]({ "titulo": "Iphone 6 16gb Apple Tela 4,7 Garantia + 2 Brindes", "preco": "R$ 1.576,80", "descricao": "Com tecnologia criada para dar segurança e praticidade, o iPhone 6 iOS 8 4G + Wi-Fi Câmera 8MP Apple permite que você acesse seu smartphone de uma forma muito mais rápida, segura e bem personalizada e, você ainda ganha em estilo e sofisticação.", "boolCarrinho": true, "id": 1 }),
            new __WEBPACK_IMPORTED_MODULE_1__scripts_produto_produto_component__["a" /* ProdutoComponent */]({ "titulo": "Telefone Sem Fio Elgin Tsf 7600 - Laranja - Original", "preco": "R$ 138,80", "descricao": "O telefone sem fio Elgin TSF-7600 é um aparelho compacto de uso residencial que traz como principais características: a função viva-voz, identificador de chamadas que pode ser visto no display com luz interna. Além disso, é um telefone com tecnologia DECT6.0 com frequência de 1.9 GHz que oferece alcance de 300 metros, com área livre e cobre 50 metros com bloqueio. Possui campainha com 6 níveis de volume e 10 toques para o usuário personalizar o aparelho.", "boolCarrinho": true, "id": 2 }),
            new __WEBPACK_IMPORTED_MODULE_1__scripts_produto_produto_component__["a" /* ProdutoComponent */]({ "titulo": "Óculos Box Vr 2.0 Realidade Virtual 3d Android Ios Controle", "preco": "R$ 24,00", "descricao": "É um ótimo complemento e estendendo dispositivo da Rede Set-top Caixa e trazer-lhe maravilhosa experiência de assistir filmes e jogar jogos. Materiais: Utiliza ABS e 42 mm lente esférica resina material sem estimulação folha de plástico, ambiental.Oferece-lhe Super 3D efeito de imagem e sensação maravilhosa.Simulando distância de visualização: oferecer-lhe um 1000polegadas tela grande a uma distância de 3 m.Fácil de colocar o seu telefone inteligente para os óculos 3D (facilmente puxar o telefone inteligente caixa de armazenamento para fora, A colocar o seu telefone inteligente no mesmo).", "boolCarrinho": false, "id": 3 }),
            new __WEBPACK_IMPORTED_MODULE_1__scripts_produto_produto_component__["a" /* ProdutoComponent */]({ "titulo": "Celular Samsung Galaxy J1 Mini Dual Chip 8gb Wi-fi 2 Câmeras", "preco": "R$ 349,98", "descricao": "Smartphone Samsung Galaxy J1 Mini com Android 5.1 8GB 3G Wi-FI Câmera 5MP. Compre aqui pelo menor preço!Conhecida mundialmente pela quantidade impressionante de aparelhos que possui, a linha Galaxy ficou ainda maior! O Samsung Galaxy J1 Mini é um excelente aparelho que, além de um lindo design, conta com toda a tecnologia que consagrou esta linha.Possui display de 4.0 com ótima resolução e processador Quad-Core, que permite desempenho superior na hora de abrir e gerenciar aplicativos. Conta com câmera principal de 5 MP e frontal VGA para quem não dispensa uma boa foto.", "boolCarrinho": false, "id": 4 }),
            new __WEBPACK_IMPORTED_MODULE_1__scripts_produto_produto_component__["a" /* ProdutoComponent */]({ "titulo": "Miniatura Fusca The Beetle Volkswagen 1:43", "preco": "R$ 27,99", "descricao": "FABRICANTE: Volkswagen. DESENHADO EM: Alemanha. FABRICADO EM: China sob supervisão da Volkswagen. MODELO: 5C1 099 300 PXP. COR: Amarelo Conforme fotos. MATERIAL: METAL. ESCALA: 1:43. MEDIDAS APROXIMADAS: 99,8 x 40,9 x 34,9 em mm. MEDIDAS DA CAIXA de Acrílico: 16,3 X 7,5 X 8,9 EM CM. PESO COM CAIXA: 216 gramas.", "boolCarrinho": true, "id": 5 }),
            new __WEBPACK_IMPORTED_MODULE_1__scripts_produto_produto_component__["a" /* ProdutoComponent */]({ "titulo": "Robô Droid Sphero Bb-8 Star Wars Original App Enable", "preco": "R$ 699,90", "descricao": "Conheça BB-8 - o Droid ativado por App que é tão autêntico quanto avançado. BB-8 tem algo diferente de qualquer outro robô - uma personalidade adaptável que muda como você joga. Com base em suas interações, BB-8 vai mostrar uma gama de expressões e até mesmo animar quando você dá comandos de voz. Definí-lo para patrulhar e observar o seu Droid e explorar de forma autónoma, fazer a sua própria aventura e orientar BB-8 mesmo, ou criar e exibir gravações holográficas (Somente vistas na tela do seu Smartphone).", "boolCarrinho": true, "id": 6 }),
            new __WEBPACK_IMPORTED_MODULE_1__scripts_produto_produto_component__["a" /* ProdutoComponent */]({ "titulo": "Novo Fidget Hand Spinner Abec Anti Stress Ansiedade Com Led", "preco": "R$ 25,99", "descricao": "Você está sempre brincando, tocando em algo esta sempre com coisas em suas mãos? devido ao estres e ansiedade? Esta sempre mexendo em algo como canetas, isqueiro, ou outros objetos? Não consegue DESGRUDAR DO CELULAR?Não consegue deixar a mão desocupada? Esta tentando parar de fumar e devido a isso esta muito nervoso? Pois então o hand spinner vai te ajudar!!!", "boolCarrinho": true, "id": 7 }),
            new __WEBPACK_IMPORTED_MODULE_1__scripts_produto_produto_component__["a" /* ProdutoComponent */]({ "titulo": "Kit 01 Magic Pad ( 01 Suporte Magnético 3m )", "preco": "R$ 10,99", "descricao": "Esse produto é ótimo para evitar que seus objetos caiam do painel do carro durante a movimentação. Este surpreendente tapete Anti Slip Pad é confeccionado em gel aderente ideal para manter seus itens em segurança, evitando que escorreguem pelo painel do carro. O antiderrapante foi projetado para ser utilizado no painel do carro, caminhões, barcos etc.. fixando itens como o celular, chaves, moedas entre outros objetos.", "boolCarrinho": true, "id": 8 })
        ];
    }
    AppComponent.prototype.paginaInicial = function () {
        this.boolVitrine = true;
        this.boolCarrinho = false;
    };
    AppComponent.prototype.paginaCarrinho = function () {
        this.boolVitrine = false;
        this.boolCarrinho = true;
    };
    AppComponent.prototype.handleTotalValor = function (totalValor) {
        this.totalValor = totalValor;
    };
    AppComponent.prototype.handleTotalCarrinho = function (totalCarrinho) {
        this.totalCarrinho = totalCarrinho;
    };
    AppComponent.prototype.handleProdutos = function (produtos) {
        this.produtosGlobal = produtos;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(619),
            styles: [__webpack_require__(615)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/ecommerce/src/app.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scripts_vitrine_vitrine_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scripts_carrinho_carrinho_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scripts_services_produtos_service__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__scripts_slide_slide_component__ = __webpack_require__(460);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__scripts_vitrine_vitrine_component__["a" /* VitrineComponent */],
                __WEBPACK_IMPORTED_MODULE_6__scripts_carrinho_carrinho_component__["a" /* CarrinhoComponent */],
                __WEBPACK_IMPORTED_MODULE_8__scripts_slide_slide_component__["a" /* SlideComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__scripts_services_produtos_service__["a" /* ProdutosService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/xampp/htdocs/ecommerce/src/app.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/xampp/htdocs/ecommerce/src/environment.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_SharedService__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_local_service__ = __webpack_require__(202);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarrinhoComponent = (function () {
    function CarrinhoComponent() {
        this.totalValorEmitter = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* EventEmitter */]();
        this.totalCarrinhoEmitter = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* EventEmitter */]();
        this.produtosEmitter = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* EventEmitter */]();
        this.serviceProdutos = new __WEBPACK_IMPORTED_MODULE_2__services_local_service__["a" /* LocalService */]();
        this.pagina = 0;
        this.itensPagina = 5;
        this.maxPag = 0;
        this.totalValor = "R$ 100,00";
        this.totalCarrinho = 100;
        this.mensagemErro = "";
        this.indexStart = 0;
        this.indexEnd = 0;
        this.setListaProdutos();
    }
    CarrinhoComponent.prototype.ngOnInit = function () {
        this.setListaProdutos();
    };
    CarrinhoComponent.prototype.setListaProdutos = function () {
        this.produtos = __WEBPACK_IMPORTED_MODULE_0__global_SharedService__["a" /* produtosGlobal */];
        this.controlaPaginacao("atualiza");
    };
    CarrinhoComponent.prototype.totalValorAtualizado = function () {
        this.totalValorEmitter.emit(this.totalValor);
    };
    CarrinhoComponent.prototype.totalCarrinhoAtualizado = function () {
        this.totalCarrinhoEmitter.emit(this.totalCarrinho);
    };
    CarrinhoComponent.prototype.produtosAtualizado = function () {
        this.produtosEmitter.emit(this.produtos);
    };
    CarrinhoComponent.prototype.controlaPaginacao = function (botao) {
        this.maxPag = Math.floor(Number(this.produtos.length) / this.itensPagina);
        if (botao == "anterior") {
            if (this.pagina > 0) {
                this.pagina--;
            }
        }
        else if (botao == "proximo") {
            if (this.pagina < this.maxPag - 1) {
                this.pagina++;
            }
        }
        else if (botao == "atualiza") {
            this.setTotal();
        }
        this.indexStart = this.pagina * this.itensPagina;
        this.indexEnd = this.pagina * this.itensPagina + this.itensPagina;
        if (this.indexEnd > this.produtos.length) {
            this.indexEnd = this.produtos.length;
        }
    };
    CarrinhoComponent.prototype.setTotal = function () {
        this.totalCarrinho = 0;
        var precoTotal = 0;
        for (var _i = 0, _a = this.produtos; _i < _a.length; _i++) {
            var produto = _a[_i];
            if (produto.getBoolCarrinho()) {
                var preco = produto.getPreco().replace("R", "").replace("$", "").replace(".", "").replace(",", ".");
                precoTotal += Number(preco);
                this.totalCarrinho++;
            }
        }
        this.totalValor = this.dinheiro(String(precoTotal.toFixed(2)));
        this.totalValorAtualizado();
        this.totalCarrinhoAtualizado();
        this.produtosAtualizado();
    };
    CarrinhoComponent.prototype.dinheiro = function (valor) {
        valor = valor.replace(/\D/g, '');
        valor = valor.replace(/(\d{1,2})$/, ',$1');
        valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        valor = valor != '' ? 'R$ ' + valor : '';
        return valor;
    };
    CarrinhoComponent.prototype.removeItem = function (item) {
        //this.produtos.splice(index, 1);
        item.setBoolCarrinho(false);
        this.controlaPaginacao("atualiza");
    };
    CarrinhoComponent.prototype.carrinhoVazio = function () {
        for (var _i = 0, _a = this.produtos; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.getBoolCarrinho()) {
                return false;
            }
        }
        return true;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], CarrinhoComponent.prototype, "totalValorEmitter", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* EventEmitter */]) === 'function' && _b) || Object)
    ], CarrinhoComponent.prototype, "totalCarrinhoEmitter", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* EventEmitter */]) === 'function' && _c) || Object)
    ], CarrinhoComponent.prototype, "produtosEmitter", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], CarrinhoComponent.prototype, "produtos", void 0);
    CarrinhoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["U" /* Component */])({
            selector: 'carrinho',
            template: __webpack_require__(620),
            styles: [__webpack_require__(616)]
        }), 
        __metadata('design:paramtypes', [])
    ], CarrinhoComponent);
    return CarrinhoComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/xampp/htdocs/ecommerce/src/carrinho.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__produto_produto_component__ = __webpack_require__(201);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return produtosGlobal; });

var produtosGlobal = [
    new __WEBPACK_IMPORTED_MODULE_0__produto_produto_component__["a" /* ProdutoComponent */]({ "titulo": "Película De Gel Frontal Iphone 7 Plus + Fibra De Carbono Top", "preco": "R$ 17,85", "descricao": "Se trata de uma película de gel macia, protege a tela mais do que película de vidro, ao sofrer um impacto, a película por ser macia absorve a energia do impacto impedindo-á que chegue até a tela principal. Não trinca que nem a película de vidro, fica melhor para mexer no aparelho porque o touch não fica com aquela oleosidade, sendo assim, ao tocar você sentirá a tela macia e a resposta do touch não será influenciada pela película, funcionará normalmente.", "boolCarrinho": false }),
    new __WEBPACK_IMPORTED_MODULE_0__produto_produto_component__["a" /* ProdutoComponent */]({ "titulo": "Iphone 6 16gb Apple Tela 4,7 Garantia + 2 Brindes", "preco": "R$ 1.576,80", "descricao": "Com tecnologia criada para dar segurança e praticidade, o iPhone 6 iOS 8 4G + Wi-Fi Câmera 8MP Apple permite que você acesse seu smartphone de uma forma muito mais rápida, segura e bem personalizada e, você ainda ganha em estilo e sofisticação.", "boolCarrinho": true }),
    new __WEBPACK_IMPORTED_MODULE_0__produto_produto_component__["a" /* ProdutoComponent */]({ "titulo": "Telefone Sem Fio Elgin Tsf 7600 - Laranja - Original", "preco": "R$ 138,80", "descricao": "O telefone sem fio Elgin TSF-7600 é um aparelho compacto de uso residencial que traz como principais características: a função viva-voz, identificador de chamadas que pode ser visto no display com luz interna. Além disso, é um telefone com tecnologia DECT6.0 com frequência de 1.9 GHz que oferece alcance de 300 metros, com área livre e cobre 50 metros com bloqueio. Possui campainha com 6 níveis de volume e 10 toques para o usuário personalizar o aparelho.", "boolCarrinho": true }),
    new __WEBPACK_IMPORTED_MODULE_0__produto_produto_component__["a" /* ProdutoComponent */]({ "titulo": "Óculos Box Vr 2.0 Realidade Virtual 3d Android Ios Controle", "preco": "R$ 24,00", "descricao": "É um ótimo complemento e estendendo dispositivo da Rede Set-top Caixa e trazer-lhe maravilhosa experiência de assistir filmes e jogar jogos. Materiais: Utiliza ABS e 42 mm lente esférica resina material sem estimulação folha de plástico, ambiental.Oferece-lhe Super 3D efeito de imagem e sensação maravilhosa.Simulando distância de visualização: oferecer-lhe um 1000polegadas tela grande a uma distância de 3 m.Fácil de colocar o seu telefone inteligente para os óculos 3D (facilmente puxar o telefone inteligente caixa de armazenamento para fora, A colocar o seu telefone inteligente no mesmo).", "boolCarrinho": false }),
    new __WEBPACK_IMPORTED_MODULE_0__produto_produto_component__["a" /* ProdutoComponent */]({ "titulo": "Celular Samsung Galaxy J1 Mini Dual Chip 8gb Wi-fi 2 Câmeras", "preco": "R$ 349,98", "descricao": "Smartphone Samsung Galaxy J1 Mini com Android 5.1 8GB 3G Wi-FI Câmera 5MP. Compre aqui pelo menor preço!Conhecida mundialmente pela quantidade impressionante de aparelhos que possui, a linha Galaxy ficou ainda maior! O Samsung Galaxy J1 Mini é um excelente aparelho que, além de um lindo design, conta com toda a tecnologia que consagrou esta linha.Possui display de 4.0 com ótima resolução e processador Quad-Core, que permite desempenho superior na hora de abrir e gerenciar aplicativos. Conta com câmera principal de 5 MP e frontal VGA para quem não dispensa uma boa foto.", "boolCarrinho": false }),
    new __WEBPACK_IMPORTED_MODULE_0__produto_produto_component__["a" /* ProdutoComponent */]({ "titulo": "Miniatura Fusca The Beetle Volkswagen 1:43", "preco": "R$ 27,99", "descricao": "FABRICANTE: Volkswagen. DESENHADO EM: Alemanha. FABRICADO EM: China sob supervisão da Volkswagen. MODELO: 5C1 099 300 PXP. COR: Amarelo Conforme fotos. MATERIAL: METAL. ESCALA: 1:43. MEDIDAS APROXIMADAS: 99,8 x 40,9 x 34,9 em mm. MEDIDAS DA CAIXA de Acrílico: 16,3 X 7,5 X 8,9 EM CM. PESO COM CAIXA: 216 gramas.", "boolCarrinho": true }),
    new __WEBPACK_IMPORTED_MODULE_0__produto_produto_component__["a" /* ProdutoComponent */]({ "titulo": "Robô Droid Sphero Bb-8 Star Wars Original App Enable", "preco": "R$ 699,90", "descricao": "Conheça BB-8 - o Droid ativado por App que é tão autêntico quanto avançado. BB-8 tem algo diferente de qualquer outro robô - uma personalidade adaptável que muda como você joga. Com base em suas interações, BB-8 vai mostrar uma gama de expressões e até mesmo animar quando você dá comandos de voz. Definí-lo para patrulhar e observar o seu Droid e explorar de forma autónoma, fazer a sua própria aventura e orientar BB-8 mesmo, ou criar e exibir gravações holográficas (Somente vistas na tela do seu Smartphone).", "boolCarrinho": true }),
    new __WEBPACK_IMPORTED_MODULE_0__produto_produto_component__["a" /* ProdutoComponent */]({ "titulo": "Novo Fidget Hand Spinner Abec Anti Stress Ansiedade Com Led", "preco": "R$ 25,99", "descricao": "Você está sempre brincando, tocando em algo esta sempre com coisas em suas mãos? devido ao estres e ansiedade? Esta sempre mexendo em algo como canetas, isqueiro, ou outros objetos? Não consegue DESGRUDAR DO CELULAR?Não consegue deixar a mão desocupada? Esta tentando parar de fumar e devido a isso esta muito nervoso? Pois então o hand spinner vai te ajudar!!!", "boolCarrinho": true }),
    new __WEBPACK_IMPORTED_MODULE_0__produto_produto_component__["a" /* ProdutoComponent */]({ "titulo": "Kit 01 Magic Pad ( 01 Suporte Magnético 3m )", "preco": "R$ 10,99", "descricao": "Esse produto é ótimo para evitar que seus objetos caiam do painel do carro durante a movimentação. Este surpreendente tapete Anti Slip Pad é confeccionado em gel aderente ideal para manter seus itens em segurança, evitando que escorreguem pelo painel do carro. O antiderrapante foi projetado para ser utilizado no painel do carro, caminhões, barcos etc.. fixando itens como o celular, chaves, moedas entre outros objetos.", "boolCarrinho": true })
];
//# sourceMappingURL=C:/xampp/htdocs/ecommerce/src/SharedService.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutosService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProdutosService = (function () {
    function ProdutosService(http) {
        this.http = http;
        this.url = '';
    }
    ProdutosService.prototype.getListaProdutos = function () {
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
    };
    ProdutosService.prototype.getProdutos = function () {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProdutosService.prototype.create = function (name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url, { name: name }, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProdutosService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    ProdutosService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ProdutosService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === 'function' && _a) || Object])
    ], ProdutosService);
    return ProdutosService;
    var _a;
}());
//# sourceMappingURL=C:/xampp/htdocs/ecommerce/src/produtos.service.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__produto_produto_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_local_service__ = __webpack_require__(202);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SlideComponent = (function () {
    function SlideComponent() {
        this.serviceProdutos = new __WEBPACK_IMPORTED_MODULE_2__services_local_service__["a" /* LocalService */]();
        this.produtos = [];
    }
    SlideComponent.prototype.ngOnInit = function () {
        this.setListaProdutos();
    };
    SlideComponent.prototype.setListaProdutos = function () {
        var lista = this.serviceProdutos.getListaProdutos();
        this.produtos = [];
        for (var i = 0; i < 20; i++) {
            this.produtos.push(new __WEBPACK_IMPORTED_MODULE_1__produto_produto_component__["a" /* ProdutoComponent */]({ "titulo": "Titulo" + i, "preco": "R$ 17,85", "descricao": "Se trata de uma película de gel macia, protege a tela mais do que película de vidro, ao sofrer um impacto, a película por ser macia absorve a energia do impacto impedindo-á que chegue até a tela principal. Não trinca que nem a película de vidro, fica melhor para mexer no aparelho porque o touch não fica com aquela oleosidade, sendo assim, ao tocar você sentirá a tela macia e a resposta do touch não será influenciada pela película, funcionará normalmente.", "boolCarrinho": true }));
        }
        //    for (let item of lista) {
        //      //this.produtosTodos.push(new ProdutoComponent(item));
        //      this.produtos.push(new ProdutoComponent(item));
        //    }
    };
    SlideComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'slide',
            template: __webpack_require__(621),
            styles: [__webpack_require__(617)]
        }), 
        __metadata('design:paramtypes', [])
    ], SlideComponent);
    return SlideComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/ecommerce/src/slide.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_local_service__ = __webpack_require__(202);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VitrineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VitrineComponent = (function () {
    function VitrineComponent() {
        this.totalValorEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.totalCarrinhoEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.produtosEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.serviceProdutos = new __WEBPACK_IMPORTED_MODULE_1__services_local_service__["a" /* LocalService */]();
        //produtos: ProdutoComponent[] = [];
        this.pagina = 0;
        this.itensPagina = 4;
        this.maxPag = 0;
        this.totalValor = "R$ 100,00";
        this.totalCarrinho = 100;
        this.indexStart = 0;
        this.indexEnd = 0;
    }
    VitrineComponent.prototype.ngOnInit = function () {
        this.setListaProdutos();
    };
    VitrineComponent.prototype.setListaProdutos = function () {
        //    this.produtos = this.produtos = produtosGlobal;;
        this.controlaPaginacao("atualiza");
    };
    VitrineComponent.prototype.totalValorAtualizado = function () {
        this.totalValorEmitter.emit(this.totalValor);
    };
    VitrineComponent.prototype.totalCarrinhoAtualizado = function () {
        this.totalCarrinhoEmitter.emit(this.totalCarrinho);
    };
    VitrineComponent.prototype.produtosAtualizado = function () {
        this.produtosEmitter.emit(this.produtos);
    };
    VitrineComponent.prototype.controlaPaginacao = function (botao) {
        this.maxPag = Math.floor(Number(this.produtos.length) / this.itensPagina);
        if (botao == "anterior") {
            if (this.pagina > 0) {
                this.pagina--;
            }
        }
        else if (botao == "proximo") {
            if (this.pagina < this.maxPag) {
                this.pagina++;
            }
        }
        else if (botao == "atualiza") {
            this.setTotal();
        }
        this.indexStart = this.pagina * this.itensPagina;
        this.indexEnd = this.pagina * this.itensPagina + this.itensPagina;
        if (this.indexEnd > this.produtos.length) {
            this.indexEnd = this.produtos.length;
        }
    };
    VitrineComponent.prototype.setTotal = function () {
        this.totalCarrinho = 0;
        var precoTotal = 0;
        for (var _i = 0, _a = this.produtos; _i < _a.length; _i++) {
            var produto = _a[_i];
            if (produto.getBoolCarrinho()) {
                var preco = produto.getPreco().replace("R", "").replace("$", "").replace(".", "").replace(",", ".");
                precoTotal += Number(preco);
                this.totalCarrinho++;
            }
        }
        this.totalValor = this.dinheiro(String(precoTotal.toFixed(2)));
        this.totalValorAtualizado();
        this.totalCarrinhoAtualizado();
        this.produtosAtualizado();
    };
    VitrineComponent.prototype.dinheiro = function (valor) {
        valor = valor.replace(/\D/g, '');
        valor = valor.replace(/(\d{1,2})$/, ',$1');
        valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        valor = valor != '' ? 'R$ ' + valor : '';
        return valor;
    };
    VitrineComponent.prototype.removeItem = function (item) {
        //this.produtos.splice(index, 1);
        item.setBoolCarrinho(false);
        this.controlaPaginacao("atualiza");
    };
    VitrineComponent.prototype.adicionarItem = function (item) {
        //this.produtos.splice(index, 1);
        item.setBoolCarrinho(true);
        this.controlaPaginacao("atualiza");
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], VitrineComponent.prototype, "totalValorEmitter", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _b) || Object)
    ], VitrineComponent.prototype, "totalCarrinhoEmitter", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _c) || Object)
    ], VitrineComponent.prototype, "produtosEmitter", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], VitrineComponent.prototype, "produtos", void 0);
    VitrineComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'vitrine',
            template: __webpack_require__(622),
            styles: [__webpack_require__(618)]
        }), 
        __metadata('design:paramtypes', [])
    ], VitrineComponent);
    return VitrineComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/xampp/htdocs/ecommerce/src/vitrine.component.js.map

/***/ }),

/***/ 615:
/***/ (function(module, exports) {

module.exports = ".nav-link{\r\n\tfont-size: 20px;\t\r\n}\r\n.corpo{\r\n\tmargin-top: 50px;\r\n\tpadding-top: 20px;\r\n}\r\n.rodape{\r\n    margin-top: 20px;\r\n    text-align: center;\r\n    color: #888;\r\n}"

/***/ }),

/***/ 616:
/***/ (function(module, exports) {

module.exports = ".fita{\r\n\tbackground: #F2F3F7;\r\n}"

/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 618:
/***/ (function(module, exports) {

module.exports = ".descricao{\r\n\toverflow-y: scroll;\r\n    height: 100px;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 5px;\r\n  height: 5px;\r\n}\r\n::-webkit-scrollbar-button {\r\n  width: 0px;\r\n  height: 0px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n  background: #C0C0C0;\r\n  border: 0px none #ffffff;\r\n  border-radius: 21px;\r\n}\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #C0C0C0;\r\n}\r\n::-webkit-scrollbar-thumb:active {\r\n  background: #C0C0C0;\r\n}\r\n::-webkit-scrollbar-track {\r\n  background: #F1F1F1;\r\n  border: 0px none #ffffff;\r\n  border-radius: 100px;\r\n}\r\n::-webkit-scrollbar-track:hover {\r\n  background: #F1F1F1;\r\n}\r\n::-webkit-scrollbar-track:active {\r\n  background: #F1F1F1;\r\n}\r\n::-webkit-scrollbar-corner {\r\n  background: transparent;\r\n}"

/***/ }),

/***/ 619:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n          \t<a (click)=\"paginaInicial()\" class=\"navbar-brand\">\r\n\t          \t<img src=\"../img/logo.png\" style=\"margin-top:-10px;\"> \r\n\t       \t\t<span style=\"position:relative;left: 50px;top: -25px;font-size: 20px;\">\r\n\t       \t\t\tE-Commerce\r\n\t       \t\t</span>\r\n       \t\t</a>\r\n        </div>\r\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n            <li class=\"col-lg-12\">\r\n\t            <button (click)=\"paginaCarrinho()\" class=\"btn btn-primary\" style=\"margin-top:7px; width:100%;\" type=\"button\">\r\n\t  \t\t\t\t<i class=\"fa fa-shopping-cart\"></i> Carrinho \r\n\t  \t\t\t\t<span class=\"badge\">{{totalCarrinho}}</span>\r\n\t\t\t\t</button>\r\n\t\t\t</li>\r\n          </ul>\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n          <li class=\"col-lg-12\">\r\n            \t<a class=\"nav-link\">{{totalValor}}</a>\r\n            </li>\r\n           </ul>\r\n          <form class=\"navbar-form navbar-right\" >\r\n          \t<div class=\"input-group\">\r\n\t\t        <input type=\"text\" class=\"form-control\" placeholder=\"Pesquisar\">\r\n\t\t        <span class=\"input-group-btn\">\r\n\t\t            <button class=\"btn btn-default\" type=\"button\"><i class=\"fa fa-search\"></i></button>\r\n\t\t        </span>\r\n\t\t    </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n    \r\n\t<div class=\"container corpo\">\r\n\t  \t<vitrine *ngIf=\"boolVitrine\" (produtosEmitter)=\"handleProdutos($event)\" [(produtos)]=\"produtosGlobal\" (totalValorEmitter)=\"handleTotalValor($event)\" (totalCarrinhoEmitter)=\"handleTotalCarrinho($event)\">Carregando...</vitrine>\r\n\t  \t<carrinho *ngIf=\"boolCarrinho\" (produtosEmitter)=\"handleProdutos($event)\" [(produtos)]=\"produtosGlobal\" (totalValorEmitter)=\"handleTotalValor($event)\" (totalCarrinhoEmitter)=\"handleTotalCarrinho($event)\">Carregando...</carrinho>\r\n\t\t\r\n\t\t<div *ngIf=\"boolVitrine\" class=\"well well-sm rodape\"> &copy; 2017 E-Commerce </div>\r\n\t</div>"

/***/ }),

/***/ 620:
/***/ (function(module, exports) {

module.exports = "<h3>Carrinho de compras</h3>\r\n<hr>\r\n<div class=\"panel-group\" id=\"accordion\">\r\n\t<div *ngFor=\"let produto of produtos; let i = index\">\r\n\t\t<div *ngIf=\"produto.getBoolCarrinho()\" class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\"\r\n\t\t\t\tstyle=\"height: 50px;\">\r\n\t\t\t\t<h4 class=\"panel-title\" style=\"margin-top: 8px;\">\r\n\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\thref=\"#collapse{{i}}\"> <b>{{produto.getTitulo()}}</b> -\r\n\t\t\t\t\t\t{{produto.getPreco()}}\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</h4>\r\n\t\t\t\t<div style=\"margin-top: -27px; float: right;\">\r\n\t\t\t\t\t<button (click)=\"removeItem(produto)\" class=\"btn btn-danger\"\r\n\t\t\t\t\t\ttype=\"button\">Remover</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"collapse{{i}}\" class=\"panel-collapse collapse\">\r\n\t\t\t\t<div class=\"panel-body\">\r\n\r\n\t\t\t\t\t<div class=\"media-left\">\r\n\t\t\t\t\t\t<a> <img class=\"media-object\"\r\n\t\t\t\t\t\t\tsrc=\"{{produto.getImgSmall()}}\">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t<h6 class=\"media-heading\">{{produto.getDescricao()}}</h6>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div *ngIf=\"carrinhoVazio()\" class=\"well well-sm\" style=\"height: 45px; text-align:center;\">\r\n\t<span style=\"color:#888;\">Nenhum item adicionado no carrinho!</span>\r\n</div>\r\n\r\n<div class=\"well well-sm\" style=\"height: 45px;\">\r\n\t<b><span style=\"float: left; margin-left: 10px; font-size: 20px;\">Total</span></b>\r\n\t<b><span style=\"float: right; margin-right: 10px; font-size: 20px;\">{{totalValor}}</span></b>\r\n</div>\r\n\r\n<!-- \r\n<div class=\"row\">\r\n\t<nav aria-label=\"Parginação\">\r\n\t\t<ul class=\"pager\">\r\n\t\t\t<li [attr.class]=\"pagina > 0 ? 'previous' : 'previous disabled'\"><a\r\n\t\t\t\t(click)=\"controlaPaginacao('anterior')\">Anterior</a></li>\r\n\t\t\t<li [attr.class]=\"pagina < maxPag-1 ? 'next' : 'next disabled'\"><a\r\n\t\t\t\t(click)=\"controlaPaginacao('proximo')\">Próximo</a></li>\r\n\t\t</ul>\r\n\t</nav>\r\n</div>\r\n -->"

/***/ }),

/***/ 621:
/***/ (function(module, exports) {

module.exports = "\n\n\n<div id=\"carousel-example-generic\" class=\"carousel slide\"\n\tdata-ride=\"carousel\">\n\t<ol class=\"carousel-indicators\">\n\t\t<li *ngFor=\"let produto of produtos; let i = index;\"\n\t\t\tdata-target=\"#carousel-example-generic\" [attr.data-slide-to]=\"i\"\n\t\t\t[attr.class]=\"first ? 'active':''\"></li>\n\t</ol>\n\n\t<div class=\"carousel-inner\" role=\"listbox\">\n\t\t<div *ngFor=\"let produto of produtos; let i = index;\"\n\t\t\t[attr.class]=\"first ? 'item active' : 'item'\">\n\t\t\t<img src=\"{{produto.getImgSlide()}}\">\n\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t<h4>produto.getTitulo()</h4>\n\t\t\t\t<h3>produto.getPreco()</h3>\n\t\t\t\t<p>produto.getDescricao()</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!-- Controls -->\n\t<a class=\"left carousel-control\" href=\"#carousel-example-generic\"\n\t\trole=\"button\" data-slide=\"prev\"> <span\n\t\tclass=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span> <span\n\t\tclass=\"sr-only\">Anterior</span>\n\t</a> <a class=\"right carousel-control\" href=\"#carousel-example-generic\"\n\t\trole=\"button\" data-slide=\"next\"> <span\n\t\tclass=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span> <span\n\t\tclass=\"sr-only\">Próximo</span>\n\t</a>\n</div>"

/***/ }),

/***/ 622:
/***/ (function(module, exports) {

module.exports = "<h3>Produtos E-Commerce</h3>\n<hr>\n<div class=\"row\">\n  <div *ngFor=\"let produto of (produtos ? produtos.slice(indexStart,indexEnd): []); let i = index\" class=\"col-xs-6 col-md-3\">\n    <div class=\"thumbnail\">\n      <img src=\"{{produto.getImgLarge()}}\">\n      <div class=\"caption\">\t\n      \t<h4>{{produto.getTitulo()}}</h4>\n        <h3>{{produto.getPreco()}}</h3>\n        <p class=\"descricao\">{{produto.getDescricao()}}</p>\n        <p>\n        \t<a *ngIf=\"!produto.getBoolCarrinho()\" (click)=\"adicionarItem(produto)\" class=\"btn btn-primary\" role=\"button\">Adicionar no carrinho</a>\n        \t<a *ngIf=\"produto.getBoolCarrinho()\" (click)=\"removeItem(produto)\"  class=\"btn btn-danger\" role=\"button\">Remover do carrinho</a> \n       \t</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n\t<nav aria-label=\"Parginação\">\n\t\t<ul class=\"pager\">\n\t\t\t<li [attr.class]=\"pagina > 0 ? 'previous' : 'previous disabled'\"><a (click)=\"controlaPaginacao('anterior')\">Anterior</a></li>\n\t\t\t<li [attr.class]=\"pagina < maxPag ? 'next' : 'next disabled'\"><a (click)=\"controlaPaginacao('proximo')\">Próximo</a></li>\n\t\t</ul>\n\t</nav>\n</div>\n\n"

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(347);


/***/ })

},[644]);
//# sourceMappingURL=main.bundle.map