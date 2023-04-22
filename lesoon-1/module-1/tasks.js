//TODO: 1 ===================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// const a = Number(prompt('Enter your number'))
// if(a === 10){
//     alert('Вірно')
// }
// else{
//    alert ('Невірно')
// }
// a === 10 ? alert('Вірно') : alert('Невірно');


//TODO: 2 ===================================
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

// const min = +prompt('Enter your number');
// console.log(min)

// if(min > 0 && min <= 15){
//     alert('First quarter')
// } else if(min > 15 && min <= 30){
//     alert('Second quarter')
// } else if(min > 30 && min <= 45){
//     alert('Third quarter')
// } else if(min > 45 && min < 60){
//     alert('Fourth quarter')
// } else{
//     alert('Enter a different number')
// }

//TODO: 3 ===================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = +prompt('Enter your number');

// switch(num){
//     case 1:
//         alert('Winter');
//         break;
//     case 2:
//         alert('Spring');
//         break;
//     case 3:
//         alert ('Summer');
//         break;
//     case 4 :
//         alert('Autumn');
//         break;
//     default:
//         alert('Enter a different number');
// }

//TODO: 4 ===================================
// скористаємося циклом while та виведіть у консоль числа від 0 до 50

// let n = 0;
// while (n <= 50) {
//     console.log(n);
//     n += 1;
// }

//TODO: 5 ===================================
//Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

// const question = prompt('Яка «офіційна» назва JavaScript?').toLowerCase();
// if(question === "ecmascript"){
// alert('Вірно!')
// } else {
//     alert('Не знаєте? ECMAScript!')
// }

//TODO: 6 ===================================
// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

// const globalMin = 69
// const hours = String(Math.floor(globalMin / 60)).padStart(2, 0);
// console.log(hours);
// const minutes = String(globalMin % 60).padStart(2, 0)
// console.log(minutes);
// console.log(`${hours}:${minutes}`)

//TODO: 7 ===================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const min = 10;
// const max = 40;
// let total = 0;

// for (let i = max; i >= min; i -= 1) {
//     if (i % 2 === 0) {
//         console.log("Парні:", i);
//         total += i;
//     }
// }

// console.log("Total sum:", total);

//TODO: 8 ===================================
//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша відміна
//Вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
// Якщо відвідувач натиснув відміна виводити рядок 'скасовано'
//інакше виводити рядок "Невірний пароль!"

// const loginInput = prompt('Введіть свій логін');

// if (loginInput === "Адмін") {
//     const password = prompt('Введіть свій пароль');
//     if (password) {
//         if (password === "Я головний") {
//             alert("Добрий день!");
//         } else {
//             alert("Невірний пароль!")
//         }
//     } else {
//         alert("скасовано");
//     }
// } else if (loginInput !== "Адмін" && loginInput) {
//     alert("Невірний логін");
// } else {
//     alert("скасовано");
// }

//TODO: 9 ===================================
// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Введення додається до значення
// змінної total.
// Операція введення числа триває до того часу,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив введення натиснувши на
// кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку,що користувач ввів саме число,
// а не довільний набір символів, не потрібно.

// let total = 0;
// let question = null;

// do {
//     question = prompt("Ведіть число");

//     if (question === null) {
//         break;
//     }

//     question = parseFloat(question);
     
//     if (!isNaN(question)) {
//         total += question;
//     }
// } while (true)

// alert(`Загальна кількість ведених чисел дорінює ${total}`);

//TODO: 10 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt

// let question = prompt('Ведіть число більше 100');
// let number = null;

// do {
//     number = Number.parseFloat(prompt('Ведіть число більше 100'));
// } while (number < 100);

// alert(number)

//TODO: 11 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const str = 'abcde';

// if (str.startsWith("a")) {
//     alert("Так")
// } else {
//     alert ("Ні")
// }

//TODO: 12 ===================================
//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

// const number = 30;
// for (let i = 1; i <= number; i += 1){
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("fizzbuzz")

//     } else if (i % 3 === 0) {
//         console.log("fizz")

//     }     else if (i % 5 === 0) {
//         console.log("buzz")
//     } else {
//         console.log(i)
//     }
// }

//TODO: 13 ===================================
// Напишіть if..else, що відповідає наступному switch:

// const browser = 'Opera';

// switch (browser) {
//   case 'Edge':
//     alert("You've got the Edge!");
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert('Okay we support these browsers too');
//     break;

//   default:
//     alert('We hope that this page looks ok!');
// }

// const browser = 'Chrome';
// if (browser === 'Edge') {
//     alert("You've got the Edge!");
// } else if (browser === 'Chrome' || browser === 'Firefox'|| browser === 'Safari'|| browser === 'Opera') {
//     alert('Okay we support these browsers too');
// } else {
//     alert('We hope that this page looks ok!');
// }
    