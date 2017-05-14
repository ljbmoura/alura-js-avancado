/**
 * 
 */
class NegociacaoController {
    
    constructor()
    {
	let qs = document.querySelector.bind(document);
	this._inputData = qs('#data');
	this._inputQuantidade = qs('#quantidade');
	this._inputValor = qs('#valor');
	
	self = this;
	this._listaNegociacoes = new Proxy(
		new ListaNegociacoes(), 
		{
		    get (target, prop, receiver) {
//		    get: function(target, prop, receiver) {
		
		    	if (['adiciona', 'esvazia'].includes(prop) 
		    		&& typeof(target[prop]) == typeof(Function)) {
		    	    return function () {
		    		console.log(`funcao/método "${prop}" interceptada`);
		    		Reflect.apply(target[prop], target, arguments);
		    		self._negociacoesView.update(target);
		    	    }
		    	}
//		    	console.log(`propriedade ${prop} lida`);
		    	return Reflect.get(target, prop, receiver);
		    }
		}
	);
	    
	this._mensagem = new Mensagem();

	this._negociacoesView = new NegociacoesView(qs('#negociacoesView'));
	this._negociacoesView.update(this._listaNegociacoes);
	
	this._mensagemView = new MensagemView(qs('#mensagemView'));
	this._mensagemView.update(this._mensagem);
	
	this._inputData.value = '2016-02-29';
	this._inputQuantidade.value = 2;
	this._inputValor.value = 10.25;
    }
    
    adiciona (event) {
//	console.info(event.type);
	event.preventDefault();
	
	let nova = this._criaNegociacao();
	
	this._listaNegociacoes.adiciona(nova);	
	this._mensagem.texto = 'Negociação adicionada com sucesso';

	this._mensagemView.update(this._mensagem);
	this._limpaFormulario();
    }
    
    apaga(event) {
	this._listaNegociacoes.esvazia();
	this._mensagem.texto = 'Negociações apagadas com sucesso.';
	this._mensagemView.update(this._mensagem);
    }
    
    _criaNegociacao() {
	
	return new Negociacao(
		DataHelper.textoParaData(this._inputData.value), 
		this._inputQuantidade.value, 
		this._inputValor.value);
    }
    
    _limpaFormulario (){
	this._inputData.value = '';
	this._inputQuantidade.value = 0;
	this._inputValor.value = 0.0;
	
	this._inputData.focus();
    }
}