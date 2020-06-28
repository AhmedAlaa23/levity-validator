# levity-validator
## Javascript Data Validation Library

## Installation and Usage

### Server Side

```
$ npm install levity-validator
```

```
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

`
**isAlpha(str [,options])**

**only letters**

options defaults: options={min: 0, max: 10000, locale: 'en-US', case: '*'} 
locale: ['en-US','all'] - all for any letters in any language
case: ['upper','lower','*'] - * for incase sensitive
`

`
**isAlphaNum(str [,options])**

**only letters and numbers**

options defaults: options={min: 0, max: 10000, locale: 'en-US', case: '*'} 
locale: ['en-US','all'] - all for any letters in any language
case: ['upper','lower','*'] - * for incase sensitive
`
