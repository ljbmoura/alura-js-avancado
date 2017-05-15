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
	
	this._negociacoesView = new NegociacoesView(qs('#negociacoesView'));
	this._listaNegociacoes = new Bind(
		new ListaNegociacoes(),
		this._negociacoesView,
		['adiciona','esvazia']);
//	this._listaNegociacoes = ProxyFactory.create (
//		new ListaNegociacoes()
//		,['adiciona', 'esvazia']
//		, (modelo) => this._negociacoesView.update(modelo));
//	this._negociacoesView.update(this._listaNegociacoes);
	
	this._mensagemView = new MensagemView(qs('#mensagemView'));
	this._mensagem = new Bind (
		new Mensagem(),
		this._mensagemView,
		['texto']);
//	this._mensagem = ProxyFactory.create(
//		new Mensagem()
//		, ['texto']
//		, modelo => this._mensagemView.update(modelo));
//	this._mensagemView.update(this._mensagem);
	
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

	this._limpaFormulario();
    }
    
    apaga(event) {
	this._listaNegociacoes.esvazia();
	this._mensagem.texto = 'Negociações apagadas com sucesso.';
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