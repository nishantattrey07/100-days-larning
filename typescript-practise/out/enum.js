"use strict";
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["OK"] = 200] = "OK";
    ResponseStatus[ResponseStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    ResponseStatus[ResponseStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(ResponseStatus || (ResponseStatus = {}));
console.log(ResponseStatus.OK);
console.log(ResponseStatus.NOT_FOUND);
console.log(ResponseStatus.INTERNAL_SERVER_ERROR);
console.log(ResponseStatus.OK);
console.log(ResponseStatus.OK);
console.log(ResponseStatus.OK);
