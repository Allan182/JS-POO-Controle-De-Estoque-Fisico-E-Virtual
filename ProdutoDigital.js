import { Produto } from "./Produto.js"


export class ProdutoDigital extends Produto {
    #tamanho;
    #formato;
    #linkDownload;

    constructor(nome, preco, descricao, tamanho, formato, linkDownload) {
        super(nome, preco, descricao);
        this.#tamanho = tamanho;
        this.#formato = formato;
        this.#linkDownload = linkDownload;
    }

    get tamanho() {
        return this.#tamanho;
    }

    set tamanho(tamanho) {
        if (tamanho != undefined) {
            this.#tamanho = tamanho;
        }
    }
    get formato() {
        return this.#formato;
    }

    set formato(formato) {
        if (formato != undefined) {
            this.#formato = formato;
        }
    }

    get linkDownload() {
        return this.#linkDownload;
    }

    set linkDownload(linkDownload) {
        if (linkDownload != undefined) {
            this.#linkDownload = linkDownload;
        }
    }


}