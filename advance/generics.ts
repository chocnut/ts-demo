// Generics are parameterized type.
// similar to function parameterize values

// example with function
// function fooBar(x) {
//   return {
//     value: x,
//   };
// }

// type name convention commonly T, U, V, R from c++
// interface FooBar<T, V> {
//   value: T;
//   value2: V;
// }

// let fooValue: FooBar<number[string, number], string[]> = {value: [], value2: []};
// fooValue.value = [1, 's'];
// fooValue.value2 = ['s'];

// interface FooBar<T = any> {
//   (value: T): boolean;
// }

// const FooBarComponent;

// When to use Generics?

// const getLastValue = (arr: Array<number>) => {
//   return arr[arr.length - 1];
// };

// const f1 = getLastValue([1, 2, 3]);
// const f2 = getLastValue(['1', '2', '3']);

// const getLastValue = <T>(arr: T[]) => {
//   return arr[arr.length - 1];
// };

// const f1 = getLastValue([1, 2, 3]);
// const f2 = getLastValue(['1', '2', '3']);

// Use in mixed types
// const generateArr = <T, Y>(x: T, y: Y) => {
//   return [x, y];
// };

// const f1 = generateArr(5, 6);
// const f2 = generateArr('5', 6);

// tuple
const generateArr = <T, U>(x: T, y: U): [T, U] => {
  return [x, y];
};

// const f1 = generateArr(5, 6);
// const f2 = generateArr('5', 6);

// override
// const generateArr = <T, U>(x: T, y: U): [T, U] => {
//   return [x, y];
// };

// const f1 = generateArr(5, 6);
// // Explicitly define the generic type
// const f2 = generateArr<string | undefined, number>('5', 6);
