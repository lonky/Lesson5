// Провести рефакторинг задачи так, чтобы код (toString().padStart(2, "0")) не повторялся, вынести его в отдельную функцию и использовать
// Саму задачу обернуть в отдельную функцию getDate, которая принимает в качестве параметра произвольную дату в формате '2026-10-22T22:10:15'
//* Проверить валидна ли дата в переданном параметре

// const now: Date = new Date();

function addPadding(num: number): string {
  return num.toString().padStart(2, "0");
}

function checkDate(date: string) {
  const checkingDate = new Date(date);
  if (Number.isNaN(checkingDate.getDate())) {
    return `Неверный формат даты: ${checkingDate}.
Пример валидного формата "08/08/2026 22:46:14"`;
  } else {
    return checkingDate;
  }
}

function getDate(now: string): string {
  const now_date = checkDate(now);
  if (!(now_date instanceof Date)) {
    return now_date;
  }
  const day = addPadding(now_date.getDate());
  const month = addPadding(now_date.getMonth());
  const year = now_date.getFullYear();
  const hours = addPadding(now_date.getHours());
  const minutes = addPadding(now_date.getMinutes());
  const seconds = addPadding(now_date.getSeconds());
  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  return formattedDate;
}

console.log("Валидные даты:");
console.log(getDate("08/08/2026 22:46:14"));
console.log(getDate("08/08/2026"));
console.log(getDate("123"), "\n");
console.log("Невалидные даты:");
console.log(getDate("test"));
console.log(getDate("NaN"));
console.log(getDate("true"));

// console.log(getDate(now));
// console.log(getDate(new Date("08/08/2026 22:46:14")));

// const day = now.getDate().toString().padStart(2, "0");
// const month = (now.getMonth() + 1).toString().padStart(2, "0");
// const year = now.getFullYear();

// const hours = now.getHours().toString().padStart(2, "0");
// const minutes = now.getMinutes().toString().padStart(2, "0");
// const seconds = now.getSeconds().toString().padStart(2, "0");

// const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

// console.log(formattedDate);
