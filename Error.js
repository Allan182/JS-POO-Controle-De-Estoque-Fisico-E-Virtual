export class NumberIsInteger extends Error {
    constructor(message) {
        super(message);
        this.name = "Error! Number is not Integer.";
    }
}

export class NickRepeatError extends Error {
    constructor(message) {
        super(message);
        this.name = "NickRepeatError !!!";
    }
}

export class MedidasInvalidas extends Error {
    constructor(message) {
        super(message);
        this.name = "Error! O Último ponto não coincide com o primeiro !!!";
    }
}

export class InvalidNumberPoints extends Error {
    constructor(message) {
        super(message);
        this.name = "Error! Número de Pontos Invalidos !!!";
    }
}

export class NumberIsNegative extends Error {
    constructor(message) {
        super(message);
        this.name = "Error! Number is Negative or Invalid.";
    }
}

export class ProductInvalid extends Error {
    constructor(message) {
        super(message);
        this.name = "Error! Product is Invalid.";
    }
}

export class ProductNoExist extends Error {
    constructor(message) {
        super(message);
        this.name = "Error! Product not exist.";
    }
}

export class InvalidQtd extends Error {
    constructor(message) {
        super(message);
        this.name = "Error! Invalid Quantity.";
    }
}

export class invalidParameters extends Error {
    constructor(message) {
        super(message);
        this.name = "Error! Invalid Parameters.";
    }
}

export class invalidPerson extends Error {
    constructor(message) {
        super(message);
        this.name = "Error! Person Invalid.";
    }
}


export class invalidSearch extends Error {
    constructor(message) {
        super(message);
        this.name = "Error! InvalidSearch. Client Don't Buy Products!";
    }
}
