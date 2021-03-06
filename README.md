# levity-validator
## Javascript Data Validation Library

## Installation and Usage

### Server Side

```
$ npm install levity-validator
```

```javascript
import validator from 'levity-validator';

let isValid = validator.isAlphaNum("Test1234");

console.log(isValid); // true
```

### Client Side

*Working on it*

## Documentation

- [Validators](README.md#Validators) 
- [Operations](README.md#Operations)

## Validators

### isAlpha(str [,options])

**only letters**

options defaults: options={min: 0, max: 10000, locale: 'en-US', case: '*'}<br>
locale: ['en-US','*'] - * for any letters in any language<br>
case: ['upper','lower','*'] - * for upper and lower case<br>

<hr>

### isAlphaNum(str [,options])

**only letters and numbers**

options defaults: options={min: 0, max: 10000, locale: 'en-US', case: '*'}<br>
locale: ['en-US','*'] - * for any letters in any language<br>
case: ['upper','lower','*'] - * for upper and lower case<br>

<hr>

### isAlphaNumSpace(str [,options])

**only letters and numbers and spaces**

options defaults: options={min: 0, max: 10000, locale: 'en-US', case: '*'}<br>
locale: ['en-US','*'] - * for any letters in any language<br>
case: ['upper','lower','*'] - * for upper and lower case<br>

<hr>

### isUsername(str [,options])

**only letters and numbers [underscores, dots]**

options defaults: options={min: 1, max: 15, hasUnderscore: true, hasDot: false}<br>
options.hasUnderscore: to allow underscores
options.hasDot: to allow dots

<hr>

### isPass(str [,options])

**letters + numbers + spaces + !#$%&"'`()*+-,./:;<=>?@[\]^_{|}~**

options defaults: options={min: 6, max: 255}<br>

<hr>

### isEmail(str)

**Matches any Email**
**Max Length: 10000 character**

<hr>

### isText(str [,options])

**Letters and Numbers from any language + Spaces + Punctuation + Marks (e.g. accents, umlauts, ...)**

options defaults: options={min: 0, max: 10000}

<hr>

### isPattern(str, pattern [,options])

**true if the str matches the pattern**

pattern (string): regular expression (RegExp)<br>
options defaults: options={min: 0, max: 10000}

<hr>

### isStringNum(str [,options])

**String that only contains numbers from any language**

options defaults: options={min: 0, max: 10000}

<hr>

### isNum(num [,options])

**Numbers without NaN or -NaN**
**(variables with type numbers not strings that contains numbers)**
**examples: 4,-20,1.5,-2.5**

options defaults: options={min: null, max: null}

<hr>

### isInt(num [,options])

**Integers**
**examples: 4,-20**

options defaults: options={min: null, max: null}

<hr>

### isDefined(data)

**check if variable is defined**

<hr>

### isString(data)

**check if variable is string**

<hr>

### isEmptyString(str)

**check if string is empty**

<hr>

### isOneOf(data, includeArray)

**Checks if the data is one of the array values**

```Javascript
let isOneOf = validator.isOneOf("Pewdiepie", ['Casey','David','Pewdiepie']);
console.log('isOneOf', isOneOf); // true
```

<hr>

### isEqualTo(data, value)

**just like === operator**

```Javascript
let isEqualTo = validator.isEqualTo('David', 'David');
console.log('isEqualTo', isEqualTo); // true
```

<hr>

### isArray(data, [,options])

**Check it data is array and checks it's length**

```Javascript
let isArray = validator.isArray([1,2,3], {min: 1, max: 5});
console.log('isArray', isArray); // true
```

<hr>

### isArrayEvery(array, conditionFunction)

**Check if every item in the array meet the condition function**

```Javascript
let isArrayEvery = validator.isArrayEvery([1,2,3,4], (item)=>item<5);
console.log('isArrayEvery', isArrayEvery); // true
```

<hr>

### isArraySome(array, conditionFunction)

**Check if any one of the array items meets the condition function**

```Javascript
let isArraySome = validator.isArraySome([1,2,3,4], (item)=>item==3);
console.log('isArraySome', isArraySome); // true
```

<hr>

### checkStringLength(str [, min, max])

**check if string is empty**

min (int): default: 0<br>
max (int): default: null (for any max length)<br>

## Operations

### multiple(...validators)

**examples:**

```javascript
validator.multiple(validator.isAlphaNum("test123"), validator.isAlpha("test")); // true
```

<hr>

### validate({})

**data: object**
**the object keys contains: {value: dataToVerify, valid: validator [,required: false]}**

**valid (validator): the validator function**
**value (any): the data to validate**
**params (any): the validator function params (second argument)**
**required (boolean): is the parameter required, default false (optional)**
**convertStrToNum (boolean): if the value is string and can be converted to number then it will convert it, default false (optional)**

**returns object {status: true|false [,paramName: 'paramName', err: 'err msg']}**

**examples:**

```javascript
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

```