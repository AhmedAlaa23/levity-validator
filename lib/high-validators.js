import * as validators from './validators.js';

const isUsername = (str="", options={min: 1, max: 15, hasUnderscore: true, hasDot: false})=>{
	if(options.min < 1){console.error("isUsername: can't have min value less than 1"); return false;}

	if(options.hasUnderscore && options.hasDot){
		return validators.isAlphaNumUnderscoreDot(str, {min: options.min, max:options.max});
	}
	else if(options.hasDot && !options.hasUnderscore){
		return validators.isAlphaNumDot(str, {min: options.min, max:options.max});
	}
	else if(!options.hasDot && !options.hasUnderscore){
		return validators.isAlphaNum(str, {min: options.min, max:options.max});
	}

	return validators.isAlphaNumUnderscore(str, {min: options.min, max: options.max});
}

const isPass = (str="", options={min: 6, max: 255})=>{
	if(options.min < 1){console.error("isPass: can't have min value less than 1"); return false;}

	if(!validators.checkStringLength(str, options.min, options.max)){return false;}

	return validators.isPattern(str, "^[a-zA-Z0-9 !#$%&\"'`()*+-,\./:;<=>?@[\\]^_{|}~]+$", {min: options.min, max: options.max});
}

export {isUsername, isPass}