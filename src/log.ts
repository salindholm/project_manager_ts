export function Log() {
  return function (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    let originalFunction = descriptor.value || descriptor.get;

    function wrapper() {
      let startedAt = +new Date();
      let returnValue = originalFunction.apply(this)
      let endedAt = +new Date()
      console.log(`${propertyKey} executed in ${(endedAt - startedAt)} milliseconds`)
      return returnValue
    }

    if (descriptor.value) descriptor.value = wrapper
    else if(descriptor.get) descriptor.get = wrapper
  }
}