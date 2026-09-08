// Напишите функцию, которая при каждом вызове будет выводит увеличенный счетчик на 1

// Пример:
const counter = createCounter(10);
console.log(counter()); // 11
console.log(counter()); // 12

function createCounter(n: number) {
  let new_n = n;
  return () => {
    new_n += 1;
    return new_n;
  };
}
