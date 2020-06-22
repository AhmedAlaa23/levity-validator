import Validator from '../lib/index.js';

let str = "Test1235";

let isValid = Validator.isAlphaNum(str);

console.log(isValid);

// ======================

let isCombineValid = Validator.combine(Validator.isAlphaNum("test123"), Validator.isAlpha("test"));

console.log(isCombineValid);

// =====================

let validate = Validator.validate( {valid: Validator.isAlpha, data: {param: 'test', options: {min: 3}}, name: 'firstName', required: true} );

console.log(validate);