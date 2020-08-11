import * as validators from './validators.js';
import {errMsgs, bindErrMsgs} from './errMsgs.js';

const multiple = (...validators)=>{
	return validators.reduce((prevValidator, validator)=>{
		return prevValidator && validator;
	})
}

// {valid: validator.isText, value: account.name, params: {min:3, max:255}, required, convertStrToNum}

const validate = (paramsObj)=>{
	for(let [paramName, paramData] of Object.entries(paramsObj)){
		let valid = paramData.valid;
		let value = paramData.value;
		let params = paramData.params;

		let isDefined = validators.isDefined(value);
		
		if(paramData.convertStrToNum && typeof(value) === 'string'){
			if( !isNaN(Number(value)) ){
				value = Number(value);
			}
		}

		if(paramData.required){
			if(!isDefined){return {status: false, paramName, err: bindErrMsgs('isUndefined', paramName)};}
	
			if( !valid(value, params) ){
				return {status: false, paramName, err: bindErrMsgs('isInvalid', paramName)};
			}
		}
		else{
			if(isDefined){
				if( !valid(value, params) ){
					return {status: false, paramName, err: bindErrMsgs('isInvalid', paramName)};
				}
			}
		}
	}

	return {status: true};
}

// const validate = (paramsObj)=>{
// 	for(let [paramName, paramData] of Object.entries(paramsObj)){
// 		let value = paramData.value;
// 		let isDefined = validators.isDefined(value);
		
// 		if(paramData.required){
// 			if(!isDefined){return {status: false, paramName, err: bindErrMsgs('isUndefined', paramName)};}
	
// 			if(!paramData.valid){
// 				return {status: false, paramName, err: bindErrMsgs('isInvalid', paramName)};
// 			}
// 		}
// 		else{
// 			if(isDefined){
// 				if(!paramData.valid){
// 					return {status: false, paramName, err: bindErrMsgs('isInvalid', paramName)};
// 				}
// 			}
// 		}
// 	}

// 	return {status: true};
// }

export {multiple, validate}