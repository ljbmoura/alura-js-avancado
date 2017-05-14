/**
 * 
 */
class ListaNegociacoes {
    
    constructor (funcaoArmadilha){
//    constructor (contexto, funcaoArmadilha){
	this._negociacoes = [];
	this._funcaoArmadilha = funcaoArmadilha;
//	this._contexto = contexto;
    }
    
    adiciona (negociacao) {
	this._negociacoes.push(negociacao);
	this._funcaoArmadilha(this); // padrão de projeto Observer
//	Reflect.apply(this._funcaoArmadilha, this._contexto, [this]);
    }

    esvazia () {
	this._negociacoes = [];
	this._funcaoArmadilha(this); // padrão de projeto Observer
//	Reflect.apply(this._funcaoArmadilha, this._contexto, [this]);
    }
    
    get negociacoes () {
	return [].concat(this._negociacoes);
    }
}