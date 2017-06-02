export class ProdutoComponent {
  private titulo: string;
  private imgSmall: string;
  private imgMedium: string;
  private imgLarge: string;
  private imgSlide: string;
  private preco: string;
  private descricao: string;
  private boolCarrinho: boolean;
  private id: number;

  constructor(params) {
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

  public setId(_id) {
    this.id = _id;
  }
  public getId() {
    return this.id;
  }

  public setTitulo(_titulo) {
    this.titulo = _titulo;
  }
  public getTitulo() {
    return this.titulo;
  }

  public setImgSmall(_imgSmall) {
    this.imgSmall = _imgSmall;
  }
  public getImgSmall() {
    return this.imgSmall;
  }

  public setImgMedium(_imgMedium) {
    this.imgMedium = _imgMedium;
  }
  public getImgMedium() {
    return this.imgMedium;
  }

  public setImgLarge(_imgLarge) {
    this.imgLarge = _imgLarge;
  }
  public getImgLarge() {
    return this.imgLarge;
  }

  public setImgSlide(_imgSlide) {
    this.imgSlide = _imgSlide;
  }
  public getImgSlide() {
    return this.imgSlide;
  }

  public setPreco(_preco) {
    this.preco = _preco;
  }
  public getPreco() {
    return this.preco;
  }

  public setDescricao(_descricao) {
    this.descricao = _descricao;
  }
  public getDescricao() {
    return this.descricao;
  }

  public setBoolCarrinho(_boolCarrinho) {
    this.boolCarrinho = _boolCarrinho;
  }
  public getBoolCarrinho() {
    return this.boolCarrinho;
  }
}
