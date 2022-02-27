const owntestMock = require('./src/owntest-mock')

function forEach(items: any, callback: Function): void {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

let tes = owntestMock.fn(x => x * 2)

let userLocalStorage = owntestMock.localStorage();

let user = [1,2,3]

userLocalStorage.setItem('user', JSON.stringify(user));

forEach(JSON.parse(userLocalStorage.getItem('user')), tes);

console.log(tes.mock);

console.log(tes.mock.calls[1][0]);