export class Cliente { 
    #nome;
    constructor(nome) {
        this.#nome = nome;
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        if (nome != undefined) {
            this.#nome = nome;
        }
    }

}