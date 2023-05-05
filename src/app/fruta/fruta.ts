export class Fruta {
    constructor(
        private _nombre:string,
        private _valor:number,
        private _peso:number,
        private _lugar:Array<string>,
        private _validado:boolean
    ) {}
    
    public crearManzana() {
        this._nombre = "Manzana";
        this._valor = 3;
        this._peso = 1.0;
        this._lugar = ["Chile","Argentina"];
        this._validado = false;
    }

    get nombre() : string {
        return this._nombre;
    }

    get valor() : number {
        return this._valor;
    }

    get peso() : number {
        return this._peso;
    }
    
    get lugares() : Array<string> {
        return this._lugar;
    }

    get validado() : boolean {
        return this._validado;
    }
}