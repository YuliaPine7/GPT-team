//! Callback
//TODO:=================01====================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній


// function greet(name) {
//   console.log(`Привіт ${name}`);
// }

// function letMeSeeYourName(callback) {
//   const name = prompt(`Вкажіть Ваше ім'я`)
//   if (!name) {
//      return console.log('Заповніть поле');
//   }
//   callback(name)
// }

// letMeSeeYourName(greet);


//TODO:=================02=============================
//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль



// function makeProduct(name, price, callback) {
//   const id = Date.now()
//   const product = {
//     id,
//     name,
//     price,
//   }
//   callback(product)
// }

// function showProduct({id, name, price}) {
// console.log(`Товар: ${id}. Назва: ${name}. Ціна: ${price} грн`);
// }

// makeProduct('Штани', 40, showProduct)



//TODO:=================03=============================
// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), що пам'ятає ім'я шефа при її виклику
// Функція makeDish має логірувати "<shef> is cooking <dish>"

// function makeShef(shefName) {
//   return function makeDish(dish) {
//   console.log(`${shefName} is cooking ${dish}`);
//   }
// }

// const shef1 = makeShef('Nikita');
// const shef2 = makeShef('Olya');
// const shef3 = makeShef('Yulia');

// shef1('fish')
// shef2('cakes')
// shef3('borsch')

//TODO:=================04=============================
//Напишіть функцію each(array, callback), яка
//першим параметром приймає масив, а другим - функцію,
//Яка застосовується до кожного елементу масиву.
//Функція each повинна повернути новий масив, елементами
//якого будуть результати виклику callback
//callback функції повинна множити елементи на 2

// const array = [3, 5, 6, 34, 8, 83, 12, 34];

// function each(array, callback, multiplier) {
//   const newArray = []
//   for (let item of array) {
//    newArray.push(callback(item, multiplier))
//   }
//   return newArray
// }

// function multy(number, multiplier) {
//   return number * multiplier
// }

// console.log(each(array, multy, 4));


//TODO:==================05============================
//Напишіть функцію makeCounter, яка повертає іншу
//функцію, яка вважає та логує кількість своїх викликів

// function makeCounter() {
//   let counter = 0
//   return () => counter += 1
// }

// const counter = makeCounter()
// console.log(counter());
// console.log(counter());
// console.log(counter());

//TODO:==================06============================
//Напишіть функцію savePassword(password), яка приймає
//пароль і повертає внутрішню функцію, що приймає
//рядок і повертає буль true, якщо рядок збігається зі збереженим
//паролем і false - якщо не збігається

// function savePassword(password) {
//  return (ourPassword) => password === ourPassword
// }

// const checkPassword = savePassword('admin')
// console.log(checkPassword('1234'));
// console.log(checkPassword('admin'));

//TODO:====================07==========================
//Напишіть функцію для зберігання знижки. Функція повертає
//Іншу функцію, яка приймає суму покупки
//і повертає фінальну суму із збереженою знижкою.

// function saveDiscount(discount) {
//   return function makeDiscount(value) {
//     return value - value * (discount / 100)
//   }
// }

// const premium = saveDiscount(50)
// const standart = saveDiscount(10)
// console.log(premium(1000));
// console.log(standart(250));


//! Методи масивів
//TODO:=========task-8=================
// ? Знайдіть перше непарне число

//  const numbers = [2, 1, 6, 8, 9, 10, 12]
//  const firstOddNumber = numbers.find(element => element % 2 !== 0);
//  console.log(firstOddNumber);
//  console.log(numbers);

//TODO:===========task-9===============

const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

//TODO:==========================
// Отримати масив імен всіх користувачів (поле name).

// const userName = array => array.map(user => user.name);
// console.log(userName(users));

//TODO:==========================
// Отримати масив об'єктів користувачів за кольором очей (eyeColor).

// const getUsersByColor = (array, eyeColor) => array.filter(user => user.eyeColor === eyeColor);

// console.log(getUsersByColor(users, 'brown'))
//console.log(getUsersByColor(users, 'blue')) // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//TODO:==========================
// Отримати масив імен користувачів за статтю (поле gender)

// const getUsersWithGender = (array, gen) => {
//   return array
//   .filter(user => user.gender === gen)
//   .map(element => element.name);
// }

//  console.log(getUsersWithGender(users, 'female')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//TODO:==========================
// Отримати масив тільки неактивних користувачів (поле isActive).

// const getInactiveUsers = array => array.filter(user => user.isActive);

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//TODO:==========================
// Отримати масив користувачів віком від min до max

// const getUsersWithAge = (array, min, max) => array.filter(user => user.age >= min && user.age <=max);
//  console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//TODO:==========================
// Отримати загальну суму балансу (поле balance) всіх користувачів.

// const calculateTotalBalance = array => array.reduce((accum, element) => (element.balance += accum),0)
//  console.log(calculateTotalBalance(users)); // 20916

//TODO:==========================
// Масив імен всіх користувачів, у яких є товарищь із зазначеним ім'ям.

// const getUsersWithFriend = (array, friendName) => array.filter(user => user.friends.includes(friendName)).map(user => user.name);

//  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
//  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//TODO:==========================
// Масив імен (поле name) людей, відсортованих залежно кількості їх друзів (поле friends)
// const getNamesSortedByFriendsCount = array => {
//   return [...array].sort((a,b) => a.friends.length - b.friends.length).map(user => user.name);
// }

//  console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//TODO:==========================
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не повинно бути
// Уміння, що повторюються, і вони повинні бути відсортовані в алфавітному порядку.

//const getSortedUniqueSkills = array => {
  // return [...array].reduce((accum, element) => {
  //   accum.push(element.skills)
  //   return accum
  
  // },[])
  // .flat()
  // .filter((skill, index, array) => array.indexOf(skill) === index)
  // .sort((a,b) => a.localeCompare(b))

//   return [...array]
//     .flatMap(user => user.skills)
//     .filter((skill, index, array) => array.indexOf(skill) === index)
//     .sort((a,b) => a.localeCompare(b))
//  }
//   console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

//TODO:====================task-10==========================
/// Даний словник із міст та дат виступів рок-групи

/// Необхідно перетворити словник (key-value) на масив із назв міст
/// Виведення міст має бути у хронологічному порядку
/// Міста у яких концерт вже пройшов потрібно виключити
/// Результат ["Умань", "Харків", "Одеса"]

// const concerts = {
//     Київ: new Date('2020-04-01'),
//     Умань: new Date('2023-07-02'),
//     Вінниця: new Date('2020-04-21'),
//     Одеса: new Date('2023-07-15'),
//     Хмельницький: new Date('2020-04-18'),
//     Харків: new Date('2023-07-10'),
// }

// const concertsToArray = object => {
//   const newArray = Object.keys(object);
//   return [...newArray]
//     .filter(city => object[city] > new Date())
//     .sort((a,b) => object[a] - object[b])
// }

// console.log(concertsToArray(concerts))
