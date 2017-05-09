/**
 * 
 */
class NegociacoesView {
    
    constructor (elementoDOM) {
	this._elementoDOM = elementoDOM;
    }
    
    _template (modelo) {
	
	let cabecalho = ` 
	<table class="table table-hover table-bordered">
	    <thead>
		<tr>
			<th>DATA</th>
				<th>QUANTIDADE</th>
				<th>VALOR</th>
				<th>VOLUME</th>
			</tr>
	    </thead>`;
		
	
	let linhas = 
	    `<tbody>
		${modelo.negociacoes.map(negociacao => {
		return `
			<tr>
				<td>${DataHelper.dataParaTexto(negociacao.data)}</td>
				<td>${negociacao.quantidade}</td>
				<td>${negociacao.valor}</td>
    				<td>${negociacao.volume}</td>
			</tr>
		`}).join('')}
	    </tbody>`;
		
//	let rodape = 
//	    	`<tfoot>
//			<td colspan='3'></td>
//			<td>${
//			(function () {
//				let total = 0;
//				modelo.negociacoes.forEach(negociacao => total += negociacao.volume);
//				return total; 
//			})()}
//			</td>
//		</tfoot>
//	</table>`;
	let rodape = 
    	    `<tfoot>
		<td colspan='3'></td>
		<td>${modelo.negociacoes.reduce(function (total, negociacao) {
			return (total + negociacao.volume);
		}, 0.00)}
		</td>
	    </tfoot>
	</table>`;
	
	return cabecalho + linhas + rodape; 
    }
    
    update (listaNegociacoes) {
	
	this._elementoDOM.innerHTML = this._template(listaNegociacoes);
	
    }
}