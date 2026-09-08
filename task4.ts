// Написать функцию, которая проверяет - подходит ли пароль, переданный параметром, под заданные требования:
// Пароль должен содержать как минимум одну заглавную букву и цифру
// Пароль только из латинских букв
// Длина пароля должна быть не менее 10 символов

const validationPassword = (password: string): boolean => {
  if (password.length < 10) {
    return false;
  }
  let num = 0;
  let cap = 0;
  for (const char of password) {
    if ("0123456789".includes(char)) {
      num += 1;
      continue;
    }
    if (char.toUpperCase() === char) {
      cap += 1;
    }
  }
  if (num < 1) {
    console.log("no num");
    return false;
  }
  if (cap < 1) {
    console.log("no capital");
    return false;
  }
  return true;
};

console.log(validationPassword("testte1stTest"));
