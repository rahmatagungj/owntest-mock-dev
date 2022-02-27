## OwnTest Mock
This package is a mock package for testing purposes, you can combine it with `owntest.js` to test your own code.

## Usage
### Mock Function
```javascript
const owntestMock = require('owntest-mock');

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

let mockCallback = owntestMock.fn(x => x * 2);
forEach([1, 2, 3], mockCallback);

// The mock function is called twice
expect(mockCallback.mock.calls.length).toBe(3);

// The first argument of the first call to the function was 1
expect(mockCallback.mock.calls[0][0]).toBe(1);

// The first argument of the second call to the function was 2
expect(mockCallback.mock.calls[1][0]).toBe(2);

// The return value of the first call to the function was 2
expect(mockCallback.mock.results[0].value).toBe(2);
```

### Mock LocalStorage
```javascript
const owntestMock = require('owntest-mock');

let mockLocalStorage = owntestMock.localStorage();
let user = {
  name: 'John Doe',
  age: 42
}

mockLocalStorage.setItem('user', JSON.stringify(user));

expect(JSON.parse(mockLocalStorage.getItem('user'))).toEqual(user);

mockLocalStorage.removeItem('user');

expect(JSON.parse(mockLocalStorage.getItem('user'))).toBe(null);
```