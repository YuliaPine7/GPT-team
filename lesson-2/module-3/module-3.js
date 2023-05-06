//! Object and function
//TODO:==========Task-1=============
// Напиши скрипт, який для об'єкта user,
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'
// 3 замінити значення premium на false
// 4 виводити вміст об'єкта user у форматі
// ключ:значення використовуючи Object.keys() і for...of

// const user = {
//   name: 'John',
//   age: 30,
//   hobby: 'reading',
//   premium: true,
// };

// //? Answer

// user.mood = 'happy'
// user.hobby = 'skydiving'

// user.premium = false

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for (let key of Object.keys(user)) {
//     console.log(`${key}: ${user[key]}`);
// }
//?

//TODO:=========task-2=================
// Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо простим способом

// const obj = {
//   name: 'Igor',
//   car: 'Mercedes',
//   carColor: 'black',
// };

// // const getBool = (obj, key) => {
// //     console.log(Object.keys(obj));
// //     const keys = Object.keys(obj)
// //     return keys.includes(key)
// // }
// //? Answer

// const getBool = (obj, key) => key in obj

// //?

// console.log(getBool(obj, 'car')); // true

//TODO:==========task-3=============
// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let sum = 0;

// // ? Answer

// for (let salary of Object.values(salaries)) {
//     sum += salary
// }

// // ?

// console.log(sum);

//TODO:==========task-4=============
// Напишіть функцію updateObject, яка приймає об'єкт та повертає
// новий об'єкт без зазначених параметрів
// Очікуваний результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

//? Answer

// const updateObject = (obj, ...removeKeys) => {
//     const newObj = {...obj};
//     for (let key of removeKeys) {
//         delete newObj[key]
//     }
//     return newObj
// }

// //?

// console.log(updateObject({ a: 1, b: 2, c: 3 }, 'b', 'a')); // {c: 3}

//TODO:=========task-5=================
// Напишіть функцію, яка приймає як параметр об'єкт
// та формує об'єкти у новому масиві у форматі [key, value]

// const user = {
//   name: 'John',
//   surName: 'Stones',
//   age: 20,
//   hobby: 'tenis',
//   haveCar: true,
//   merried: false,
// };

// // ?Answer

// const changeObject = (obj) => Object.entries(obj)

// // ?

// console.log(changeObject(user));

//TODO:============task-6================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2.

// до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// const multiplyNumeric = (obj) => {
//     for(let item in obj){
//         if(obj.hasOwnProperty(item) && typeof obj[item] === 'number'){
//             obj[item] *= 2
//         }
//     }
//     return obj
// }

// console.log(multiplyNumeric(menu));

// після виклику функції
// menu = {
// width: 400,
// height: 600,
// title: "My menu"
// };

//TODO:=========task-7==============
// Потрібно перебрати об'єкти та вивести ім'я кращого співробітника

/*
 * Виклики функції для перевірки працездатності твоєї реалізації.
 */

// const findBestEmployee = (obj) => {
//    let bestEmployee = '';
//     let bestTask = 0;

    // for(let [employee, task] of Object.entries(obj)){
    //     if(task > bestTask){
    //         bestTask = task;
    //         bestEmployee = employee;
    //     }
    // }
    // return bestEmployee

    // for(let item of Object.entries(obj)){
    //    // console.log(item[0])
    //     if(item[1] > bestTask){
    //         bestTask = item[1];
    //         bestEmployee = item[0];
    //     }
    // }
    // return bestEmployee
//}

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux
