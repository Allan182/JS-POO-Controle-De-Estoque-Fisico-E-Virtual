import { Produto } from "./Produto.js"


export class ProdutoFisico extends Produto {
    #peso;
    #altura;
    #largura;
    #comprimento;

    constructor(nome, preco, descricao, peso, altura, largura, comprimento) {
        super(nome, preco, descricao);
        this.#peso = peso;
        this.#altura = altura;
        this.#largura = largura;
        this.#comprimento = comprimento;
    }

    get peso() {
        return this.#peso;
    }

    set peso(peso) {
        if (peso != undefined) {
            this.#peso = peso;
        }
    }

    get altura() {
        return this.#altura;
    }

    set altura(altura) {
        if (altura != undefined) {
            this.#altura = altura;
        }
    }

    get largura() {
        return this.#largura;
    }

    set largura(largura) {
        if (largura != undefined) {
            this.#largura = largura;
        }
    }

    get comprimento() {
        return this.#comprimento;
    }

    set comprimento(comprimento) {
        if (comprimento != undefined) {
            this.#comprimento = comprimento;
        }
    }

}