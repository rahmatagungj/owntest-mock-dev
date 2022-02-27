export interface fnInterface {
  mock : {
    calls: any[];
    results: any[];
  }
}

export function fn(callback? : Function): fnInterface {
  var calls: any[] = []
  var results: any[] = []
  calls.push()

  function h(...args: any): void {
      if (callback) {
        if (typeof callback !== 'function') {
          throw new Error('callback is not a function')
        }
        // callback.apply(this, args)
        let valueFromCallback = callback(...args)
        results.push(valueFromCallback)
      }

      calls.push(args)
  }
  
  h.mock = {
      calls,
      results
  }

  return h
}