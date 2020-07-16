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

### validate(...dataToVerify)

**data: one or multiple objects**
**every object contains: {valid: validator, data: {value: varData, options: {}, name: 'str', required: true}}**

**valid (validator): the validator function**
**value (any): the data to validate**
**options (object): the validator options**

**returns object {status: true|false [,err: 'err msg']}**

**examples:**

```javascript
validator.validate( {valid: validator.isAlpha, data: {value: "Test", options: {min: 3}}, name: 'firstName', required: true} );
// {status: true}

validator.validate( {valid: validator.isAlpha, data: {value: "David3", name: 'FirstName', required: true} );
// {status: false, err: 'FirstName is Invalid'}
```