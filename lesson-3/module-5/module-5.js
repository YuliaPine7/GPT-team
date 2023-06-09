//! function Constructions
//TODO:=================1=============================
// Виправте помилки, щоб код працював
// const product = {
//     price: 5000,
//     showPrice() {
//         console.log(this.price)
//     },
// }
// product.showPrice()

//TODO:=================2=============================

//Виправте помилки, щоб код працював
// const product = {
//     price: 5000,
//     showPrice() {
//         console.log(this.price)
//     },
// }

// function callAction(action) {
//     action()
// }

// callAction(product.showPrice.bind(product))

// Anser:

//TODO:=========task-3=================
//Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

// Aswer:

// const User = function ({userName,age,numbersOfPost}) {
//   this.userName = userName;
//   this.age = age;
//   this.numbersOfPost = numbersOfPost;
  
//   // this.getInfo = function () {
//   //   console.log(`Користувачеві ${this.userName} ${this.userAge} років і в нього ${this.userNumbersOfPost} публікацій.`)
//   // }
// }

// User.prototype.getInfo = function () {
//     console.log(`Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`)
// }
  
/**
  |============================
  | Розкоментувати ; )
  |============================
// */
// const polly = new User({ userName: 'Polly', age: 30, numbersOfPost: 15 })
// console.log(polly)
// polly.getInfo()

// const obj = {}
// console.log(obj)

//TODO:=========task-4=================
//Напиши функцію конструктор Storage який створює об'єкти
//Для управління складом товарів.
//При виклику отримуватиме один агрумент - початковий масив товарів,
//і записувати їх у властивість items.
//Додай методи класу:
//getItems() - повертайте масив товарів
//addItems(item) - отримує новий товар та додає його до поточних
//removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних

// Aswer:

// const Storage = function (itemsArray) {
//   this.items = itemsArray;
// }

// Storage.prototype.getItems = function () {
//   return this.items
// }

// Storage.prototype.addItems = function (item) {
//   return this.items.push(item)
// }

// Storage.prototype.removeItem = function (item) {
//   this.items = this.items.filter(el => el !== item)
//   return this.items
// }

/**
  |============================
  | Розкоментувати ; )
  |============================
*/
// const storage = new Storage(['apple', 'banana', 'mango']);

// console.log(storage);
// console.log(storage.addItems('kiwi'))
// console.log(storage.getItems())
// console.log(storage.removeItem('apple'));

//TODO:=========task-5=================
/**
 * Напишіть функію конструктор, яка створіть корабель, який вміє стріляти, і успадкуйте від нього
 * бойовий корабель
 */

// Aswer:

/**
  |============================
  | Розкоментувати ; )
  |============================
*/

// const ws = new WarShip(999, 'US', 100, 'Jack Sparrow', '99$')

// ws.fire()

//! Class
//TODO:=========task-6=================
//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// Aswer:

/**
  |============================
  | Розкоментувати ; )
  |============================
*/

// const client = new Client('mango', 'mango@gmail.com')

// client.changeEmail = 'mango555@gmail.com'
// console.log(client.getClientData.email)
// client.changeLogin = '12345'
// console.log(client.getClientData.login)

//TODO:=========task-7=================
//Напиши клас Notes який управляє колекцією нотаток у
//властивості items.
//Нотатка - це об'єкт із властивостями text і priority.
//Додай класу статичний метод Priopity,
//який буде повертати об'єкт із пріоритетами.
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

// Aswer:

/**
  |============================
  | Розкоментувати ; )
  |============================
*/

// const note1 = new Notes()

// note1.addNote({ text: 'Note1', priority: Notes.Priority().LOW })
// note1.addNote({ text: 'Note2', priority: Notes.Priority().LOW })
// console.table(note1.items)

// note1.removeNote('Note1')
// console.table(note1.items)

// note1.updatePriority({ text: 'Note2', newPriority: Notes.Priority().HIGHT })
// console.table(note1.items)

//TODO:=========task-8=================
// Створи клас для калькулятора, який має такі методи:
// метод number, який набуває початкового значення для наступних операцій
// Геттер, який повертає фінальний результат усіх операцій, проведених із числом
// методи add, substruct, divide, multiply
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// Aswer:

/**
  |============================
  | Розкоментувати ; )
  |============================
*/

// const calculator = new Calculator()
// const res = calculator
//     .number(10)
//     .add(10)
//     .divide(2)
//     .multiply(4)
//     .substruct(5).result

// console.log(res)

// const res2 = calculator
//     .number(20)
//     .substruct(40)
//     .multiply(-8)
//     .divide(160)
//     .add(20).result

// console.log(res2)

//TODO:=========task-9=================
// Створити клас Worker, у якого є властивості name, age, salary.
//У класу Worker є метод getSalary.
//Створити клас TopLevelWorker, у якого є властивість hierarchyLevel
//і який успадковує клас Worker, додаючи метод getHierarchyLevel
//Реалізувати завдання за допомогою ES5 прототипів та ES6 класів

const HIERARCHY_LEVEL = {
  TOP: 'top',
  BOTTOM: 'bottom',
};

const workerObj = {
  name: 'Mango',
  surname: 'Worker',
  age: 30,
  position: 'FE developer',
  salary: 5000,
};

/**
  |============================
  | ES5
  |============================
*/

// const Worker = function (obj) {
//   const { name, surname, age, position, salary } = obj 
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
//   this.position = position;
//   this.salary = salary;
// }

// Worker.prototype.getSalary = function () {
//   return this.salary
// }

// const TopLevelWorker = function (obj, hierarchyLevel) {
//   Worker.call(this, obj)
//   this.hierarchyLevel = hierarchyLevel;
// }

// TopLevelWorker.prototype.getHierarchyLevel = function () {
//   return this.hierarchyLevel
// } 

// TopLevelWorker.prototype.getSalary = Worker.prototype.getSalary

// Aswer:

/**
  |============================
  | Розкоментувати ; )
  |============================
*/

// const worker = new TopLevelWorker(workerObj, HIERARCHY_LEVEL.BOTTOM)
// console.log(worker)
// console.log(worker.getSalary())
// console.log(worker.getHierarchyLevel())

/**
  |============================
  | ES6
  |============================
*/

// Aswer:

// class WorkerES6 {
//   constructor(obj) {
//     const { name, surname, age, position, salary } = obj 
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
//   this.position = position;
//   this.salary = salary;
//   }

//   getSalary() {
//     return this.salary;
//   }

// }

// class TopLevelWorkerES6 extends WorkerES6 {
//   constructor(obj, hierarchyLevel) {
//     super(obj) 
//     this.hierarchyLevel = hierarchyLevel;
//   }

//   getHierarchyLevel() {
//     return this.hierarchyLevel;
//   }
// }

/**
  |============================
  | Розкоментувати ; )
  |============================
*/

// const topWorker = new TopLevelWorkerES6(workerObj, HIERARCHY_LEVEL.TOP)
// console.log(topWorker)
// console.log(topWorker.getSalary())
// console.log(topWorker.getHierarchyLevel())