/*Функция, возвращающая случайное целое число из переданного диапазона включительно.

имя_функции(от, до); // Результат: целое число из диапазона "от...до"

Учтите, что диапазон может быть только положительный, включая ноль. А также придумайте, как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему.

Функция может не гарантировать верный результат, если в переданном диапазоне нет ни одного подходящего числа.*/


function randomNumber (min, max) {
  if ((min < 0) || (max < 0)) {
    console.log ('Числа должны быть положительными');
    return;
  }

  if (!(typeof min === 'number') || !(typeof max === 'number')) {
    console.log ('Значения должны быть числами, а не ' + typeof min);
    return;
  }

  let minTemp = min;
  let maxTemp = max;

  if (min > max) {
    minTemp = max;
    maxTemp = min;
  }

  if (min === max) {
    return min;
  }

  return Math.floor((Math.random()*(maxTemp - minTemp + 1) + minTemp));
}


function checkLength (str, maxLength) {
  if (typeof str !== 'string' || typeof maxLength !== 'number') {
    console.log ('Значение ' + str + ' должно быть строкой. ', 'Значение ' +  maxLength + ' должно быть числом.')
    return;
  }

  return str.length <= maxLength;
}
