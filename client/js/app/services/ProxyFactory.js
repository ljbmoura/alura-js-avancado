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
		    		Reflect.apply(target[prop], target, arguments);
		    		console.info(`acaoAdicional executada após executar "${prop}" `);
		    		return acaoAdicional(target);
		    	    }
		    	}
		    	
//		    	console.log(`get propriedade ${prop} interceptada`);
		    	return Reflect.get(target, prop, receiver);
		    },
		
		    set: function(target, prop, value, receiver) {
			console.log(`set propriedade "${prop}" interceptada`);
		    	if (metodosAlvo.includes(prop)) {
		    	    target[prop] = value; 
//		    	    Reflect.set(target, prop, value, receiver);
		    	    acaoAdicional(target);
		    	    console.info(`acaoAdicional executada após set "${prop}" `);
		    	}
		    	return Reflect.set(target, prop, value, receiver);
		    }
		}
	); 
    }
    
    static _ehFuncao(func) {
	 return (typeof(func) == typeof(Function));
    }
    
}