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
//	console.log('construtor');
    }
    
    adiciona (event) {
	event.preventDefault();
	
// 	assumindo que a data chega aqui como uma string no formato aaaa-mm-dd
//	console.log(typeof(this._inputData.value));
//	let data = new Date(this._inputData.value.split('-'));
//	let data = new Date(this._inputData.value.replace(/-/g, ','));
//	let data = new Date(...this._inputData
//	            .value.split('-')
//	            .map(function(item, indice) {
//	                return item - indice % 2;
//	            }));
	let data = new Date(...this._inputData
	            .value.split('-')
	            .map((item, indice) => item - indice % 2)
	           );
	
	let nova = new Negociacao(
		data, 
		this._inputQuantidade.value, 
		this._inputValor.value);
	
	console.log(nova);
	
	this.montaLinhaGrid(nova);
	
	this._inputData.focus();
    }
    
    montaLinhaGrid (negociacao) {
	
	var linha = document.createElement('tr');
	
	var colunaData = document.createElement('td');
	colunaData.textContent = negociacao.data;
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