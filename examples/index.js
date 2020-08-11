import validator from '../lib/index.js';

let isValid = validator.isAlphaNum("Test1234");
// console.log(isValid); // true

let isAlphaNumSpace = validator.isAlphaNumSpace("User name 3", {min: 3, max: 255, locale: '*'});
// console.log('isAlphaNumSpace', isAlphaNumSpace); // true

let isNum = validator.isNum("240", {min: -1000, max: 10000});
// console.log('isNum', isNum); // false

// ==========================

// any RegExp
let isValidPattern = validator.isPattern("test","^[a-zA-Z]+$");
// console.log(isValidPattern); // true

// =====================

// any Text
let isValidText = validator.isText("Hello اهلا 😀", {min: 2});
// console.log('isValidText', isValidText); // true

// is one of array values (case sensitive)
let isOneOf = validator.isOneOf("Pewdiepie", ['Casey','David','Pewdiepie']);
// console.log('isOneOf', isOneOf); // true

// just like === operator
let isEqualTo = validator.isEqualTo('David', 'David');
// console.log('isEqualTo', isEqualTo); // true

// ========================= high order validators

let isValidUsername = validator.isUsername("David_123");
// console.log(isValidUsername); // true

//=====================

let isValidPass = validator.isPass("Pass123!#@\"'` p.s\g/ps");
// console.log("isValidPass", isValidPass); // true

//=====================

let isValidEmail = validator.isEmail("test.test123+test@test.com");
// console.log("isValidEmail", isValidEmail); // true

// ==================== Operations

let isAllValid = validator.multiple(validator.isAlphaNum("test123"), validator.isAlpha("test"));
// console.log(isAllValid); // true

// ====================

// optional: changing the error messages
validator.errMsgs.isInvalid = '$ Is Wrong !';

let trueValidate = validator.validate({
	firstName: {valid: validator.isAlpha, value: 'David', params: {min: 3}, required: true},
	age: {valid: validator.isInt, value: 25, params: {min: 1, max: 100}}
});
// console.log(trueValidate); // {status: true}

// this one with a parameter that is not required so it can be undefined and still true
let trueValidate2 = validator.validate({
	firstName: {valid: validator.isAlpha, value: 'David', params: {min: 3}, required: true},
	age: {valid: validator.isInt, value: undefined, params: {min: 1, max: 100}}	
});
// console.log('trueValidate2', trueValidate2); // {status: true}

// this one with a parameter age that can be converted form str to number and still true
let trueValidate3 = validator.validate({
	firstName: {valid: validator.isAlpha, value: 'David', params: {min: 3}, required: true},
	age: {valid: validator.isInt, value: '25', params: {min: 1, max: 100}, convertStrToNum: true}
});
// console.log('trueValidate2', trueValidate2); // {status: true}

let falseValidate = validator.validate({
	firstName: {valid: validator.isAlpha, value: 'David4', params: {min: 3}, required: true},
	age: {valid: validator.isInt, value: '25', params: {min: 1, max: 100}, convertStrToNum: true}	
});
// console.log('falseValidate', falseValidate); // {status: false, param: 'firstName, err: 'firstName is Wrong !'}

// // ====================== To-DO

// let isAllValid = validator.combine("test", {valid: validator.isAlphaNum}, {valid: validator.isAlpha, options: {min: 3}} );

// console.log(isAllValid);
