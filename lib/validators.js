const alphaLowerLocaleRegExpUni = {
	"*": "\p{Ll}\p{M}",
	"en-US": "a-z",
}

const alphaUpperLocaleRegExpUni = {
	"*": "\p{Lu}\p{M}",
	"en-US": "A-Z",
}

const alphaLocaleRegExpUni = {
	"*": "\p{L}\p{M}",
	"en-US": "a-zA-Z",
}

const isString = (data)=>{
	return typeof(data) === 'string'? true:false;
}

const isEmptyString = (str)=>{
	return str===""? true:false;
}

const checkStringLengthRange = (str, min, max)=>{
	let strLength = str.length;

	if(strLength >= min && strLength <= max){
		return true;
	}

	return false;
}

// locale ['en-US', '*']
const isAlphaUpper = (str="", locale='en-US')=>{
	let regExpPattern = alphaLocaleRegExpUni[locale] || locale;
	let re = new RegExp(`[^${regExpPattern}]+`, 'ug');
  return !re.test(str);
}

const isAlphaLower = (str, locale='en-US')=>{
	let regExpPattern = alphaLowerLocaleRegExpUni[locale] || locale;
	let re = new RegExp(`[^${regExpPattern}]+`, 'ug');
  return !re.test(str);
}

const isAlphaUpperLower = (str, locale='en-US')=>{
	let regExpPattern = alphaUpperLocaleRegExpUni[locale] || locale;
	let re = new RegExp(`[^${regExpPattern}]+`, 'ug');
  return !re.test(str);
}

// Letters
// locale: ['en-US','all'], case: ['upper','lower','*']
const isAlpha = (str="", options={locale: 'en-US', case: '*', min: 0, max: 10000})=>{
	
	if(!isString(str)){return false;}

	if(!checkStringLengthRange(str, options.min, options.max)){return false;}

	if(options.case === 'upper'){
		return isAlphaUpper(str, locale);
	}
	else if(options.case === 'lower'){
		return isAlphaLower(str, locale);
	}
	else{
		return isAlphaUpperLower(str, locale);
	}
}

const isStringNum = (str="", options={min: 0, max: 10000, locale: 'en-US'})=>{
	if(!isString(str)){return false;}
	
	if(!checkStringLengthRange(str, options.min, options.max)){return false;}

	let re = new RegExp('[^\\p{N}]+', 'ug');
  return !re.test(str);
}

const isAlphaNum = (str="", options={min: 0, max: 10000, locale: 'en-US'})=>{
	if(!isString(str)){return false;}
	if(!checkStringLengthRange(str, options.min, options.max)){return false;}

	let regExpPattern = alphaLocaleRegExpUni[locale] || locale;
	let re = new RegExp(`[^${regExpPattern}\\p{N}]+`, 'ug');
  return !re.test(str);
}

// =====================================

const checkNumRange = (num, min, max)=>{
	if(max !== null){
		if(num > max){return false;}
	}
	if(min !== null){
		if(num < min){return false;}
	}

	return true;
}

const isNum = (num, options={min: null, max: null})=>{
	if( !typeof(num)==='number' || isNaN(num) ){return false;}

	if(!checkNumRange(num, options.min, options.max)){return false;}

	return true;
}

const isInt = (num=0, options={min: null, max: null})=>{
	if( !Number.isInteger(num) ){return false;}

	if(!checkNumRange(num, options.min, options.max)){return false;}

	return true;
}

export {isString, isAlpha, isAlphaNum, isNum, isInt};