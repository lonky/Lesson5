// Напишите самовызывающиеся функцию подсчета факториала числа: число должно передаваться как параметр функции

const result = (n: number): number => {
  if (n < 1) {
    return 1;
  }
  return n * result(n - 1);
};

console.log(result(5));

const result2 = (function fa(n: number): number {
  if (n < 1) {
    return 1;
  }
  return n * fa(n - 1);
})(5);

console.log(result2);
