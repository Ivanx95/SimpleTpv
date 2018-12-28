'use strict'

require('../utils/ViewExceptions.js');

module.exports = class Catalogo { 	constructor(component){
		
		var editors = component;
		if(editors.lenght>1){
			throw new ViewInitializeException('many editors not supported yet');
		}
		this.editor = editors;
		this.fields = component.querySelectorAll('input');

	}

	getValue(){
		return  Array.from(this.fields).reduce(function (values) {
			return {[values.name]:values.value};
		})
	}
}

