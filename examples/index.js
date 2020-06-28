import validator from '../lib/index.js';

let isValid = validator.isAlphaNum("Test1234");

console.log(isValid); // true

// ==========================

// any RegExp
let isValidPattern = validator.isPattern("test","^[a-zA-Z]+$");
console.log(isValidPattern); // true

// =====================

// any Text
let isValidText = validator.isText("Hello اهلا 😀", {min: 2});
console.log('isValidText', isValidText); // true

// ========================= high order validators

let isValidUsername = validator.isUsername("David_123");
console.log(isValidUsername); // true

//=====================

let isValidPass = validator.isPass("Pass123!#@\"'` p.s\g/ps");
console.log("isValidPass", isValidPass); // true

//=====================

let isValidEmail = validator.isEmail("test.test123+test@test.com");
console.log("isValidEmail", isValidEmail); // true

// ==================== Operations

let isAllValid = validator.multiple(validator.isAlphaNum("test123"), validator.isAlpha("test"));

console.log(isAllValid); // true

// ====================

// optional: changing the error messages
validator.errMsgs.isInvalid = '$ Is Wrong !';

let validate = validator.validate( {valid: validator.isAlpha, data: {value: "Test", options: {min: 3}}, name: 'firstName', required: true} );
console.log(validate); // true

// // ====================== To-DO

// let isAllValid = validator.combine("test", {valid: validator.isAlphaNum}, {valid: validator.isAlpha, options: {min: 3}} );

// console.log(isAllValid);
