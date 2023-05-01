import { Produto } from "./Produto.js";
import { ProductNoExist, ProductInvalid, NumberIsNegative, InvalidQtd } from './Error.js'; 

export class Estoque {

    #arrayProdutosQtd;

    constructor() {
        this.#arrayProdutosQtd = [];
    }

    get arrayProdutosQtd() {
        return this.#arrayProdutosQtd;
    }


    adicionaProduto(produto, quantidade = 1) {
        if (produto instanceof Produto) {

            let produtoExistente = this.verificaProduto(); // Verifica  o Produto especifico e retorna o elemento caso exista;

            if (produtoExistente != undefined) { // Caso retorne algum elemento, acrescenta a quantidade, caso o metodo retorne undefined ou seja se o produto não existe, cria o objeto no else e acrescenta no vetor.
                produtoExistente.quantidade += quantidade;
            } else {
                const objProduto = {
                    produto: produto,
                    quantidade: quantidade
                }
                this.#arrayProdutosQtd.push(objProduto);
            }
        } else {
            throw new ProductInvalid();
        }
    }

    alterarQuantidade(produto, quantidade) { // Aqui o parametro produto recebe o objeto Produto completo como parametro 
        if (produto instanceof Produto) {
            for (let i = 0; i < this.#arrayProdutosQtd.length; i++) {

                if (this.#arrayProdutosQtd[i].produto.nome == produto.nome) {
                    let verificaNegativo = Number(this.#arrayProdutosQtd[i].quantidade - quantidade);
                    if (verificaNegativo >= 0) {
                        this.arrayProdutosQtd[i].quantidade -= quantidade;
                        return true;
                    } else {
                        throw new InvalidQtd();
                    }
                }
            }
        }
    }

    buscarProduto(produto) { // Aqui o parametro produto recebe uma string para verificar se o produto.nome == string passada
        for (let i = 0; i < this.#arrayProdutosQtd.length; i++) {
            if (this.#arrayProdutosQtd[i].produto.nome == produto) {
                return this.#arrayProdutosQtd[i].produto; // Para a estrutura de repetição caso encontre
            }
        } throw new ProductNoExist(); // caso tenha percorrido todo o for e não dado nenhum return, aciona o içamento
    }

    verificaProduto(produto) {

        return this.#arrayProdutosQtd.find(p => p.produto == produto);
    }

}


