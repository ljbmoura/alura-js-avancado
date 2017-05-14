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
	
//	this._listaNegociacoes = new ListaNegociacoes(this, function (modelo) {
//	this._listaNegociacoes = new ListaNegociacoes(function (modelo) {
////	    console.log(this);
//	    this._negociacoesView.update(modelo);
//	});

//	this._listaNegociacoes = new ListaNegociacoes(modelo =>
//		this._negociacoesView.update(modelo));
	let self = this;
	this._listaNegociacoes = new ListaNegociacoes(
		// padrão de projeto Observer
		function (modelo) {
	    		self._negociacoesView.update(modelo)
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
	
//	this._negociacoesView.update(this._listaNegociacoes);
	this._mensagemView.update(this._mensagem);
	this._limpaFormulario();
    }
    
    apaga(event) {
//	event.preventDefault();
	this._listaNegociacoes.esvazia();
//	this._negociacoesView.update(this._listaNegociacoes);
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
    
//    montaLinhaGrid (negociacao) {
//	
//	var linha = document.createElement('tr');
//	
//	var colunaData = document.createElement('td');
//	colunaData.textContent = DataHelper.dataParaTexto(negociacao.data);
//	linha.appendChild(colunaData);
//
//	var colunaQuant = document.createElement('td');
//	colunaQuant.textContent = negociacao.quantidade;
//	linha.appendChild(colunaQuant);
//
//	var colunaValor = document.createElement('td');
//	colunaValor.textContent = negociacao.valor;
//	linha.appendChild(colunaValor);
//	
//	var colunaVolume = document.createElement('td');
//	colunaVolume.textContent = negociacao.volume;
//	linha.appendChild(colunaVolume);
//
//	this._corpoTabela.appendChild(linha);
//
//    }
}