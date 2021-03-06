const alphaLowerLocaleRegExpUni = {
	"*": "\\p{Ll}\\p{M}",
	"en-US": "a-z",
}

const alphaUpperLocaleRegExpUni = {
	"*": "\\p{Lu}\\p{M}",
	"en-US": "A-Z",
}

const alphaLocaleRegExpUni = {
	"*": "\\p{L}\\p{M}",
	"en-US": "a-zA-Z",
}

const isDefined = (data)=>{
	return typeof(data) !== 'undefined'? true:false;
}

const isString = (data)=>{
	return typeof(data) === 'string'? true:false;
}

const isEmptyString = (str)=>{
	return str===""? true:false;
}

const checkStringLength = (str, min=0, max=null)=>{
	if(min < 0){min=0;}
	if(max === undefined){max=null;}

	let strLength = str.length;

	if(min !== 0){
		if(strLength < min){return false;}
	}
	if(max !== null){
		if(strLength > max){return false;}
	}

	return true;
}

// locale ['en-US', '*']
const isAlphaUpper = (str="", locale='en-US')=>{
	let regExpPattern = alphaUpperLocaleRegExpUni[locale] || locale;
	let re = new RegExp(`^[${regExpPattern}]+$`, 'ug');
  return re.test(str);
}

const isAlphaLower = (str, locale='en-US')=>{
	let regExpPattern = alphaLowerLocaleRegExpUni[locale] || locale;
	let re = new RegExp(`^[${regExpPattern}]+$`, 'ug');
  return re.test(str);
}

const isAlphaUpperLower = (str, locale='en-US')=>{
	let regExpPattern = alphaLocaleRegExpUni[locale] || locale;
	let re = new RegExp(`^[${regExpPattern}]+$`, 'ug');
  return re.test(str);
}

// Letters
// locale: ['en-US','all'], case: ['upper','lower','*']
const isAlpha = (str="", options={min: 0, max: 10000, locale: 'en-US', case: '*'})=>{
	if(!options.min){options.min = 0;}
	if(!isString(str)){return false}

	if(!checkStringLength(str, options.min, options.max)){return false;}

	if(options.case === 'upper'){
		return isAlphaUpper(str, options.locale);
	}
	else if(options.case === 'lower'){
		return isAlphaLower(str, options.locale);
	}
	else{
		return isAlphaUpperLower(str, options.locale);
	}

}

const isStringNum = (str="", options={min: 0, max: 10000, locale: 'en-US'})=>{
	if(!options.min){options.min = 0;}
	if(!isString(str)){return false;}
	
	if(!checkStringLength(str, options.min, options.max)){return false;}

	let re = new RegExp('^[\\p{N}]+$', 'ug');
  return re.test(str);
}

const isAlphaNum = (str="", options={min: 0, max: 10000, locale: 'en-US'})=>{
	if(!options.min){options.min = 0;}
	if(!isString(str)){return false;}
	if(!checkStringLength(str, options.min, options.max)){return false;}

	let regExpPattern = alphaLocaleRegExpUni[options.locale || 'en-US'];
	let re = new RegExp(`^[${regExpPattern}\\p{N}]+$`, 'ug');
  return re.test(str);
}

const isAlphaNumSpace = (str="", options={min: 0, max: 10000, locale: 'en-US'})=>{
	if(!options.min){options.min = 0;}
	if(!isString(str)){return false;}
	if(!checkStringLength(str, options.min, options.max)){return false;}

	let regExpPattern = alphaLocaleRegExpUni[options.locale || 'en-US'];
	let re = new RegExp(`^[${regExpPattern}\\p{N}\\s]+$`, 'ug');
	return re.test(str);
}

const isAlphaNumUnderscore = (str="", options={min: 0, max: 10000})=>{
	if(!options.min){options.min = 0;}
	if(!isString(str)){return false;}
	if(!checkStringLength(str, options.min, options.max)){return false;}

	let regExpPattern = alphaLocaleRegExpUni['en-US'];
	let re = new RegExp(`^[${regExpPattern}\\p{N}_]+$`, 'ug');
  return re.test(str);
}

const isAlphaNumDot = (str="", options={min: 0, max: 10000, locale: 'en-US'})=>{
	if(!options.min){options.min = 0;}
	if(!isString(str)){return false;}
	if(!checkStringLength(str, options.min, options.max)){return false;}

	let regExpPattern = alphaLocaleRegExpUni['en-US'];
	let re = new RegExp(`^[${regExpPattern}\\p{N}\\.]+$`, 'ug');
	return re.test(str);
}

const isAlphaNumUnderscoreDot = (str="", options={min: 0, max: 10000, locale: 'en-US'})=>{
	if(!options.min){options.min = 0;}
	if(!isString(str)){return false;}
	if(!checkStringLength(str, options.min, options.max)){return false;}

	let regExpPattern = alphaLocaleRegExpUni['en-US'];
	let re = new RegExp(`^[${regExpPattern}\\p{N}_\\.]+$`, 'ug');
	return re.test(str);
}

const isText = (str, options={min: 0, max: null})=>{
	if(!options.min){options.min = 0;}
	if(!isString(str)){return false;}

	if(!checkStringLength(str, options.min, options.max)){return false;}
	
	let re = /^[\p{L}\p{N}\s\p{P}\p{S}\p{M}]+$/ug;

	if(options.min===0 && str.length===0){return true;}
	return re.test(str);
}

// =====================================

const checkNumRange = (num, min, max)=>{
	if(min !== null){
		if(num < min){return false;}
	}
	if(max !== null){
		if(num > max){return false;}
	}

	return true;
}

const isNum = (num, options={min: null, max: null})=>{
	if( typeof(num)!=='number' || isNaN(num) ){return false;}

	if(!checkNumRange(num, options.min, options.max)){return false;}

	return true;
}

const isInt = (num=0, options={min: null, max: null})=>{
	if( !Number.isInteger(num) ){return false;}

	if(!checkNumRange(num, options.min, options.max)){return false;}

	return true;
}

// ========================

const isPattern = (str, pattern, options={min: 0, max: null})=>{
	if(!isString(str)){return false;}

	if(!checkStringLength(str, options.min, options.max)){return false;}
	
	let re = new RegExp(pattern, 'ug');
  return re.test(str);
}

// =========================
const isOneOf = (data, allowedValues=[])=>{
	if(!Array.isArray(allowedValues)){
		console.trace(`Error: ${allowedValues} is not a function`);
		return false;
	}

	let isIncluded = allowedValues.includes(data);
  return isIncluded;
}

const isEqualTo = (data, value)=>{
	let isEqual = data===value? true:false;
  return isEqual;
}

const isArray = (data, options={min: 0, max: null})=>{
	if( !Array.isArray(data) ){
		return false;
	}

	if(data.length < options.min){
		return false;
	}
	
	if(options.max !== null){
		if(data.length > options.max){
			return false;
		}
	}

  return true;
}

function isArrayEvery(arr, conditionFun){
	if(!isArray(arr)){
		return false;
	}

	let result = arr.every((item)=>{
		return conditionFun(item);
	})

	return result;
}

function isArraySome(arr, conditionFun){
	if(!isArray(arr)){
		return false;
	}

	let result = arr.some((item)=>{
		return conditionFun(item);
	})

	return result;
}

function isObject(obj){
	return obj?.constructor === Object
}

export
{isDefined,
isString, isAlpha, isAlphaNum, isAlphaNumSpace, isStringNum, checkStringLength,
isAlphaNumUnderscore, isAlphaNumDot, isAlphaNumUnderscoreDot, isEmptyString, isText,
isNum, isInt,
isPattern,
isOneOf, isEqualTo, isArray, isArrayEvery, isArraySome, isObject};