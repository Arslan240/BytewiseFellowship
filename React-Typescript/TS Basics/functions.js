"use strict";
// Typescript only enforces types at compile time and not at runtime. At the end the typescript compiles to js. Because browsers can only understand javascript.
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = exports.introduce = exports.fetchData = exports.printFormat = exports.format = exports.addStrings = void 0;
function addNumbers(a, b) {
    return a * b;
}
exports.default = addNumbers;
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = ""; }
    return str1 + str2;
};
exports.addStrings = addStrings;
// UNION Types ( | ) : Any of the type that qualify are ok for this, it's not exactly OR its a UNION type.
var format = function (title, param) {
    return "".concat(title, " ").concat(param);
};
exports.format = format;
// function which return nothing
var printFormat = function (title, param) {
    console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
// Function which returns a promise
var fetchData = function (url) { return Promise.resolve("Data from server"); };
exports.fetchData = fetchData;
// Specifying some parameters and receiving all other parameters in an array
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join(', '));
}
exports.introduce = introduce;
//  TYPE ENFORCEMENT AT COMPILE TIME
function getName(user) {
    var _a, _b;
    return "".concat((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : "First", " ").concat((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : "Last");
}
exports.getName = getName;
