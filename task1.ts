// Написать функцию, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.
console.log(sum(5));

function sum(n: number): number {
  let res = 0;
  for (let count = 1; count <= n; count++) {
    res += count;
  }
  return res;
}
