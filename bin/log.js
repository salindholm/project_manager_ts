"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
function Log() {
    return function (target, propertyKey, descriptor) {
        let originalFunction = descriptor.value || descriptor.get;
        function wrapper() {
            let startedAt = +new Date();
            let returnValue = originalFunction.apply(this);
            let endedAt = +new Date();
            console.log(`${propertyKey} executed in ${(endedAt - startedAt)} milliseconds`);
            return returnValue;
        }
        if (descriptor.value)
            descriptor.value = wrapper;
        else if (descriptor.get)
            descriptor.get = wrapper;
    };
}
exports.Log = Log;
