// ! Arrays and function
//TODO:=========task-1=================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, -12, 24, 7, 80, -1];

//? Answer
// function findSmallerNumber(array) {
//   return Math.min(...array)
// }

// function findSmallerNumber(array) {
//   const min = array[0]
//   for (let i of array) {
//     if (i < min) {
//     return i
//     }
//   }
// }
//?

// const smallestNumber = findSmallerNumber(numbers) ;
// console.log(smallestNumber); // 2

//TODO:=========task-2=================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.


// function calculateAverage() {
//   // console.log(arguments);
//   let sum = 0
//   let count = 0
//   for (let number of arguments) {
//     if (typeof number === 'number') {
//       count += 1;
//       sum += number
//     }
//   }
//   return sum/count
// }

// console.log(calculateAverage(10, 10, 20, 200, 'hello')); // 60

//TODO:=========task-3=================
const filmoteka = [
  {
    id: 1,
    title: 'Duna',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 10,
    actors: [
      'Amelia Gibson',
      'Cameron Clayton',
      'Viola Vasquez',
      'Lula Collins',
      'Victor Nichols',
    ],
    adult: false,
  },
  {
    id: 2,
    title: 'Venom',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 8,
    actors: [
      'Inez Greer',
      'Barry Curtis',
      'Blanche Rios',
      'Glen Perry',
      'Logan Powers',
    ],
    adult: true,
  },
  {
    id: 3,
    title: 'Luca',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 9,
    actors: [
      'Marguerite Gibbs',
      'Lora Alvarez',
      'Jorge Simpson',
      'Thomas Hall',
      'Darrell Hunter',
    ],
    adult: false,
  },
  {
    id: 4,
    title: 'Free Guy',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 6,
    actors: [
      'Calvin Andrews',
      'Mamie Myers',
      'Madge Townsend',
      'Ralph Kim',
      'Jorge Reese',
    ],
    adult: true,
  },
  {
    id: 5,
    title: 'Saw',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 7,
    actors: [
      'Adele Marsh',
      'Melvin Burgess',
      'Jesus Reese',
      'Harriet Moreno',
      'Curtis Cox',
    ],
    adult: true,
  },
];

//? Напишіть функцію getAllTitlesOfFilms(films), яка повертає масив із усіма назвами фільмів.

// function getAdultFilms(films){
//   const newArr = [];
//   for(let film of films){
//     newArr.push(film.title)
//   }
//   return newArr
// }

// console.log(getAdultFilms(filmoteka))
//? Напишіть функцію findFilmByName(films, filmTitle), яка шукає фільм за назвою.
// function findFilmByName(films, filmTitle){
//   for(let film of films){
//     if(film.title === filmTitle){
//       return film
//     }
//     return `${filmTitle} does not exist`
//   }
// }
// console.log(findFilmByName(filmoteka,'Lucah'))

//? Напишіть функцію getAdultFilms(films), яка повертає масив усіх дорослих фільмів.

// function getAdultFilms(films){
//   const newArr = [];
//   for(let film of films){
//     if(film.adult){
//       newArr.push(film)
//     }
//   }
//   return newArr
// }
// console.log(getAdultFilms(filmoteka))

//? Напишіть функцію getNotAdultFilms(films), яка повертає масив усіх фільмів без обмеження.

// function getNotAdultFilms(films){
//   const newArr = [];
//     for(let film of films){
//       if(!film.adult){
//          newArr.push(film)
//        }
//     }
//    return newArr
// }
// console.log(getNotAdultFilms(filmoteka))

//TODO:============task-4===============
// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-рол');
// styles[1] = 'Класика'
// styles.splice(1,1,'Класика');
// console.log(styles.shift());
// styles.unshift('Реп','Реггі')
// console.log(styles)

//TODO:============task-5==============
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

// function min(a,b){
//   if(typeof a === 'number' && typeof b === 'number'){
//     return a > b ? b : a
//   }
// return 'We cannot compare non-number objects'

// }

//  const result = min(10, 1);
//  console.log(result); // 5

//TODO:=============task-6=================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumAdjacentNumbers(array){
//   const newArr = [];
//   for(let i = 0; i < array.length - 1; i+=1){
//     newArr.push(array[i] + array[i+1])
//   }
// return newArr
// }

//  const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
//  const result = sumAdjacentNumbers(someArr);
//  console.log(result); // [33, 45, 39, 17, 25, 27, 29]

//TODO:============task-7==============
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']

//  const musicGenres = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп'];


// const logItems = (array) => {
//   for(let i = 1; i < array.length; i+=1){
//   console.log(`${i}: ${array[i]}`) 
//   }

// }
// logItems(musicGenres);

//TODO:=============task-8=================
// Функція formatMessage(message, maxLength)
// приймає рядок (параметр message) і форматує його,
// якщо довжина перевищує значення параметрі maxLength.

const formatMessage = (message, maxLength) => {
  // if(message.length > maxLength){
  //    return message.slice(0, maxLength) + "... "
  // }
  // else{
  //   return message
  // }
  return message.length > maxLength ? message.slice(0, maxLength) + "... " : message;

}

 console.log(formatMessage('Curabitur ligula sapien', 16)); //Повертає 'Curabitur ligula...'.
console.log(formatMessage('Curabitur ligula sapien', 23)); //Повертає 'Curabitur ligula sapien'.
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); //Повертає 'Nunc sed turpis...'.
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); //Повертає 'Nunc sed turpis a felis in nunc fringilla'.
