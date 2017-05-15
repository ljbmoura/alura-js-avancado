/**
 * 
 */

class ProxyFactory {
    
    static create (objetoAlvo, metodosAlvo, acaoAdicional) {
	
	return new Proxy(
		objetoAlvo, 
		{
		    get: function(target, prop, receiver) {
		    	if (metodosAlvo.includes(prop) 
		    		&& ProxyFactory._ehFuncao(target[prop])) {
		    	    return function () {
		    		console.log(`execução método "${prop}" interceptada`);
		    		let retorno = Reflect.apply(target[prop], target, arguments);
		    		console.info(`acaoAdicional executada após executar "${prop}" `);
		    		acaoAdicional(target);
		    		return retorno;
		    	    }
		    	}
//		    	console.log(`get propriedade ${prop} interceptada`);
		    	return Reflect.get(target, prop, receiver);
		    },
		
		    set: function(target, prop, value, receiver) {
			console.log(`set propriedade "${prop}" interceptada`);
			let retorno = Reflect.set(target, prop, value, receiver);
		    	if (metodosAlvo.includes(prop)) {
		    	    acaoAdicional(target);
		    	    console.info(`acaoAdicional executada após set "${prop}" `);
		    	}
		    	return retorno;
		    }
		}
	); 
    }
    
    static _ehFuncao(func) {
	 return (typeof(func) == typeof(Function));
    }
    
}