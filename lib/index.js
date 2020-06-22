import * as validators from './validators.js';

const combine = (...validators)=>{
	return validators.reduce((prevValidator, validator)=>{
		return prevValidator && validator;
	})
}

const validate = (...params)=>{
	for(let dataObj of params){
		
		let isDefined = validators.isDefined(dataObj.data.param);

		if(dataObj.required){
			if(!isDefined){return {status: false, err: `${dataObj.name}: is undefined`};}

			if(!dataObj.valid(dataObj.data.param, dataObj.data.options)){
				return {status: false, err: `${dataObj.name}: is invalid`};
			}
		}
		else{
			if(isDefined){
				if(!dataObj.valid(dataObj.data.param, dataObj.data.options)){
					return {status: false, err: `${dataObj.name}: is invalid`};
				}
			}
		}

	}

	return {status: true};
}

const Validator = {
	...validators,
	combine,
	validate
}

export default Validator