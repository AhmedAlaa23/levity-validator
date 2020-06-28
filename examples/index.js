import Validator from '../lib/index.js';

let str = "Test1235";

let isValid = Validator.isAlphaNum(str);

console.log(isValid); // true

// ==========================

// any RegExp
let isValidPattern = Validator.isPattern("test","^[a-zA-Z]+$");
console.log(isValidPattern); // true

// =====================

// any Text
let isValidText = Validator.isText("Hello اهلا 😀", {min: 2});
console.log('isValidText', isValidText); // true

// ========================= high order validators

let isValidUsername = Validator.isUsername("David_123");
console.log(isValidUsername); // true

//=====================

let isValidPass = Validator.isPass("Pass123!#@\"'` p.s\g/ps");
console.log("isValidPass", isValidPass); // true

// ==================== Operations

let isAllValid = Validator.multiple(Validator.isAlphaNum("test123"), Validator.isAlpha("test"));

console.log(isAllValid); // true

// ====================

// optional: changing the error messages
Validator.errMsgs.isInvalid = '$ Is Wrong !';

let validate = Validator.validate( {valid: Validator.isAlpha, data: {value: "Test", options: {min: 3}}, name: 'firstName', required: true} );
console.log(validate); // true


// // ====================== To-DO

// let isAllValid = Validator.combine("test", {valid: Validator.isAlphaNum}, {valid: Validator.isAlpha, options: {min: 3}} );

// console.log(isAllValid);
