import * as validators from './validators.js';
import {errMsgs, bindErrMsgs} from './errMsgs.js';

const multiple = (...validators)=>{
	return validators.reduce((prevValidator, validator)=>{
		return prevValidator && validator;
	})
}

const validate = (paramsObj)=>{
	for(let [paramName, paramData] of Object.entries(paramsObj)){
		let value = paramData.value;
		let isDefined = validators.isDefined(value);
		
		if(paramData.required){
			if(!isDefined){return {status: false, paramName, err: bindErrMsgs('isUndefined', paramName)};}
	
			if(!paramData.valid){
				return {status: false, paramName, err: bindErrMsgs('isInvalid', paramName)};
			}
		}
		else{
			if(isDefined){
				if(!paramData.valid){
					return {status: false, paramName, err: bindErrMsgs('isInvalid', paramName)};
				}
			}
		}
	}

	return {status: true};
}

export {multiple, validate}