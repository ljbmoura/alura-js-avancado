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
	this._corpoTabela = qs('.table tbody');
	this._negociacoes = new ListaNegociacoes();
//	console.log('construtor');
    }
    
    adiciona (event) {
//	console.info(event.type);
	event.preventDefault();
	
	let nova = this._criaNegociacao();
	
	this._negociacoes.adiciona(nova);
	console.info(this._negociacoes);
	
	this.montaLinhaGrid(nova);
//	this._limpaFormulario();
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
    
    montaLinhaGrid (negociacao) {
	
	var linha = document.createElement('tr');
	
	var colunaData = document.createElement('td');
	colunaData.textContent = DataHelper.dataParaTexto(negociacao.data);
	linha.appendChild(colunaData);

	var colunaQuant = document.createElement('td');
	colunaQuant.textContent = negociacao.quantidade;
	linha.appendChild(colunaQuant);

	var colunaValor = document.createElement('td');
	colunaValor.textContent = negociacao.valor;
	linha.appendChild(colunaValor);
	
	var colunaVolume = document.createElement('td');
	colunaVolume.textContent = negociacao.volume;
	linha.appendChild(colunaVolume);

	this._corpoTabela.appendChild(linha);

    }
}