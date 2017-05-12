/**
 * 
 */
class Mensagem {
    constructor(textoPadrao = '') {
	this._texto = textoPadrao;
    }
    
    get texto() {
	return this._texto;
    }
    
    set texto(texto) {
	this._texto = texto;
    }
}