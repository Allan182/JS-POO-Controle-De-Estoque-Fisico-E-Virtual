import { Estoque } from "./Estoque.js";
import { ProdutoFisico } from "./ProdutoFisico.js"
import { ProdutoDigital } from "./ProdutoDigital.js"
import { Vendas } from "./Vendas.js";
import { Cliente } from "./Cliente.js";

const estoque = new Estoque;
const produtoFisico = new ProdutoFisico("Arroz", 10, "Sepé", "10Kg", 1.70, 2.20, 5);
const produtoDigital = new ProdutoDigital("MotherBoard", "R$10,00", "Melhor placa mãe da Shoope", 1.70, "AM4", "https://shoope.com/placamaefurtada.com")
const cliente = new Cliente("Allan");
let searchProductDigital;
let searchProductFisico;

try {

    estoque.adicionaProduto(produtoDigital, 20);
    let venda = new Vendas(estoque);
    venda.realizarVenda(produtoDigital, 5, cliente);

    estoque.adicionaProduto(produtoFisico, 25);
    venda = new Vendas(estoque);
    venda.realizarVenda(produtoFisico, 5, cliente);

    estoque.alterarQuantidade(produtoDigital, 10); // Alterando a qtd do Objeto produtoDigital no estoque ;

    searchProductDigital = estoque.buscarProduto("MotherBoard"); // Procurando produto por String, acessando o estoque e pergutando produto.nome == string passada
    searchProductFisico = estoque.buscarProduto("Arroz");   // Procurando produto por String, acessando o estoque e pergutando produto.nome == string passada

    venda.buscarVenda("Allan");


    // --> ERROS Abaixo provocados Intencionalmente para serem tratados !! <-- //

    estoque.buscarProduto("naoExisto123");
    estoque.adicionaProduto("naoSouUmaInstancia123", 10);
    estoque.alterarQuantidade(produtoFisico, 9999) // qtd maior do que existe em estoque sendo um tratamento de numeros negativos. para não ter -5 produtoFisico em estoque. 

} catch (error) {
    error.message = console.log(error.name);
} finally {
    console.log(estoque);
}









