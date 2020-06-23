const errMsgs = {
	'isUndefined': '$: is undefined', 
	'isInvalid': '$: is invalid', 
}

const bindErrMsgs = (errMsg, variableName)=>{
	return errMsgs[errMsg].replace('$', variableName);
}

export {errMsgs, bindErrMsgs}