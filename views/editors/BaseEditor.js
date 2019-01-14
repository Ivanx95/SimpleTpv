'use strict'

require('../../utils/ViewExceptions.js');

module.exports = class BaseEditor { 	constructor(component){
		
		var editors = component;
		if(editors.lenght>1){
			throw new ViewInitializeException('many editors not supported yet');
		}
		this.editor = editors;
		this.fields = component.querySelectorAll('input');
		this.model;

	}

	getValue(){
		var fieldArray =  Array.from(this.fields) ;


		var model = {};
		fieldArray.forEach(function (values) {
			model[values.name] = values.value;
		});
		this.model = model;

		return model;
	}
}

