export class Produto {

    #nome;
    #preco;
    #descricao;

    constructor(nome, preco, descricao) {

        //  this.constructor.name == "Produto"

        if (this.constructor != Produto) {
            this.#nome = nome;
            this.#preco = preco;
            this.#descricao = descricao;
        } else {
            throw new TypeError("O Objeto instânciado pertence a uma classe Abstrata !!!");
        }
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        if (nome != undefined) {
            this.#nome = nome;
        }
    }

    get preco() {
        return this.#preco;
    }

    set preco(preco) {
        if (preco != undefined) {
            this.#preco = preco;
        }
    }

    get descricao() {
        return this.#descricao;
    }

    set descricao(descricao) {
        if (descricao != undefined) {
            this.#descricao = descricao;
        }
    }

}

