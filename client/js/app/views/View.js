/**
 * 
 */
class View {

    constructor (elementoDOM) {
	this._elementoDOM = elementoDOM;
    }
        
    update (modelo) {
	this._elementoDOM.innerHTML = this.template(modelo);
    }
    
    template(modelo) {
	throw new Error('A subclasse precisa definir o método _template.');
    }
}