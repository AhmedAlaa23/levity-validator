import * as validators from './validators.js';
import * as highValidators from './high-validators.js';
import {multiple, validate} from './operations.js';
import {errMsgs} from './errMsgs.js';

const Validator = {
	...validators,
	...highValidators,
	multiple,
	validate,
	errMsgs
}

export default Validator