/**
 * 
 */
class DataHelper {
    
    constructor () {
	throw new Error ('DataHelper não pode ser instanciada');
    }
    
//  assumindo que a data chega aqui como uma string no formato aaaa-mm-dd
    static textoParaData (texto){

	let validador = new RegExp('^\\d{4}-\\d{2}-\\d{2}$');
//	if (!/\d{4}-\d{2}-\d{2}/.test(texto)) {
	if (!validador.test(texto)) {	    
	    throw new Error(`"${texto}" não é uma data válida.`);
	}
	
//	console.log(typeof(this._inputData.value));
//	let data = new Date(this._inputData.value.split('-'));
//	let data = new Date(texto.replace(/-/g, ','));
//	let data = new Date(x
//	            .map(function(item, indice) {
//	                return item - indice % 2;
//	            }));
	let data = new Date(...texto.split('-')
	            .map((item, indice) => item - indice % 2));
	return data;
    }
    
    static dataParaTexto(data) {
	
	return `${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`;
    }
}