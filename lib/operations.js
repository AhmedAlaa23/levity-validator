import * as validators from './validators.js';
import {errMsgs, bindErrMsgs} from './errMsgs.js';

const multiple = (...validators)=>{
	return validators.reduce((prevValidator, validator)=>{
		return prevValidator && validator;
	})
}

const validate = (...params)=>{
	for(let dataObj of params){
		
		let value = dataObj.data.value;

		let isDefined = validators.isDefined(value);

		if(dataObj.required){
			if(!isDefined){return {status: false, err: bindErrMsgs('isUndefined', dataObj.name)};}

			if(!dataObj.valid(value, dataObj.data.options)){
				return {status: false, err: bindErrMsgs('isInvalid', dataObj.name)};
			}
		}
		else{
			if(isDefined){
				if(!dataObj.valid(value, dataObj.data.options)){
					return {status: false, err: bindErrMsgs('isInvalid', dataObj.name)};
				}
			}
		}

	}

	return {status: true};
}

export {multiple, validate}