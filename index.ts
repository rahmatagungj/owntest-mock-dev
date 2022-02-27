import owntestMock from './src/owntest-mock';

// function forEach(items: any, callback: Function): void {
//   for (let index = 0; index < items.length; index++) {
//     callback(items[index]);
//   }
// }

// let tes = owntestMock.fn(xs => {
//   let toReturn = []

//   xs.forEach(x => {
//     toReturn.push(x ** x);
//   });

//   return toReturn;
// })

// let userLocalStorage = owntestMock.localStorage();

// let user = [[1, 2, 3], [4, 5, 6]];

// userLocalStorage.setItem('user', JSON.stringify(user));

// forEach(JSON.parse(userLocalStorage.getItem('user')), tes);

// console.log(tes.mock);

console.log(owntestMock);