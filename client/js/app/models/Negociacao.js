/**
 * Representa uma negociação do mundo real
 */
class Negociacao {
    
    constructor(data, quantidade, valor)
    {
	this._data = new Date(data.getTime());
	this._quantidade = quantidade;
	this._valor = valor;
	Object.freeze(this);
    }
    
    /**
     * @returns o volume da negociação, correspondendo ao valor multiplicado
     *          pela quantidade
     */
    get volume () {
	return (this._quantidade * this._valor).toFixed(2);
    }

    get data() {
	return new Date(this._data.getTime());
    }
    
    get quantidade() {
	return this._quantidade;
    }
    
    get valor() {
	return this._valor;
    }
}