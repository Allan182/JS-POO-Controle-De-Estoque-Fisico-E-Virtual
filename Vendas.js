/* realizarVenda que recebe o nome do produto, a quantidade a ser vendida e o cliente 
(um objeto que represente o comprador) e realiza a venda. Caso o produto não exista no estoque, 
deve-se retornar uma mensagem de erro. Caso a quantidade a ser vendida seja maior do que a
 quantidade em estoque, deve-se retornar uma mensagem de erro.*/

import { Cliente } from "./Cliente.js";
import { Produto } from "./Produto.js";
import { ProductInvalid, InvalidQtd, invalidParameters, invalidPerson, invalidSearch } from './Error.js';
import { Estoque } from "./Estoque.js";


export class Vendas {

    static #vendas = [];
    static #estoque;

    constructor(estoque) {

        if (estoque instanceof Estoque) {
            Vendas.#estoque = estoque;
        }

    }

    get vendas() {
        return Vendas.#vendas;
    }

    set vendas(vendas) {
        if (vendas != undefined) {
            Vendas.#vendas = vendas;
        }
    }

    get estoque() {
        return Vendas.#estoque;
    }

    set estoque(estoque) {
        if (estoque != undefined) {
            Vendas.#estoque = estoque;
        }
    }

    realizarVenda(produto, quantidade, cliente) {
        if (cliente instanceof Cliente && produto instanceof Produto) {

            let produtoExistente = Vendas.#estoque.arrayProdutosQtd.find(p => p.produto == produto);


            if (produtoExistente != undefined) {
                if (Vendas.#estoque.alterarQuantidade(produto, quantidade) == true) {
                    const objProduto = {
                        produto: produto,
                        quantidade: quantidade,
                        cliente: cliente
                    }
                    Vendas.#vendas.push(objProduto);

                } else {
                    throw new InvalidQtd();
                }
            } else {
                throw new ProductInvalid();
            }
        } else {
            throw new invalidParameters();
        }
        Vendas.#estoque = [];
    }


    buscarVenda(cliente) {

        if (cliente != undefined) {

            let i = Vendas.#vendas.filter(e => e.cliente.nome == cliente); // retorna um array, com as vendas ou um array vazio caso não encontre. Verificando o tamanho do vetor analiso se ele efetuou vendas ou não

            if (i.length > 0) {
                return i;
            }

            throw new invalidSearch();

        } else {
            throw new invalidParameters();
        }

    }




}