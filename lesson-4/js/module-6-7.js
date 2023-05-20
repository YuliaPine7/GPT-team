//TODO:====================01===========================Модальне вікно=============================================================================
/**
  |============================
  | Модальне вікно:
  |  1 - Реалізувати відкриття модального вікна по кліку по кнопці "Відкрити модалку"
  |  2 - Реалізувати закриття модального вікна по кліку на "кнопку", "ESC" і "бекдроп". Не забувай знімати слухача події після закриття модального вікна
  |  Виконуй завдвння послідовно: 
  |  - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати. 
  |  - Створи 4 функції onOpenModalBtnElClick, closeModalWindow, onEscClick, onBackdropClick. Не забувай робити перевірку на цільовий елемент. 
  |  - Клас який відповідає за ,відображення і скриття модального вікна "is-open"
  |
  |  Виконай рефакторінг коду і зроби відкриття модального вікна за допомогою бібліотека "basicLightbox". Не забуть підключити скрипти і стилі у файл "index.html".
  |============================
*/

const refs = {
  bodyEl: document.querySelector('body'),
  openBtnEl: document.querySelector('.js-modal-open'),
  closeBtnEl: document.querySelector('.js-modal-close'),
  backdropEl: document.querySelector('.js-backdrop'),

  // part 2

  formEl: document.querySelector('.js-modal__form'),
}

// refs.openBtnEl.addEventListener('click', onOpenModalBtnElClick);
// refs.closeBtnEl.addEventListener('click', closeModalWindow);


// function onOpenModalBtnElClick() {

//   refs.backdropEl.classList.add('is-open');
  
//   refs.bodyEl.style.overflow = "hidden"; //відміняє скролл

//   window.addEventListener('keydown', onEscClick)
//   window.addEventListener('click', onBackdropClick)
// }

// function closeModalWindow() {

//   refs.backdropEl.classList.remove('is-open');

//   refs.bodyEl.style.overflow = "visible";  //додає скролл

//   window.removeEventListener('keydown', onEscClick)
// }

// function onEscClick(event) {
//   if (event.code !== "Escape") {
//     return
//   };
//   closeModalWindow()
// }

// function onBackdropClick(event) {
//   if (event.target !== refs.backdropEl) {
//     return
//   }
//   closeModalWindow()
// }





// 2 варінт 

refs.openBtnEl.addEventListener('click', onOpenModalBtnElClick);


  const instance = basicLightbox.create(`
<div class="modal">
          <button type="button" class="close-btn js-modal-close">X</button>

          <form class="login-form js-modal__form">
            <label>
              Name
              <input type="text" name="name" placeholder="enter your name" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="enter your email" />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                placeholder="enter your password"
              />
            </label>
            <button type="submit">Login</button>
          </form>
        </div>
`)


function onOpenModalBtnElClick() {

  refs.bodyEl.style.overflow = "hidden"; //відміняє скролл
  instance.show()
  
  document.querySelector('.js-modal__form').addEventListener('submit', onSubmit)

  document.querySelector('.js-modal-close').addEventListener('click', closeModalWindow)
  window.addEventListener('keydown', onEscClick)
}

function closeModalWindow() {

  refs.bodyEl.style.overflow = "visible";  //додає скролл
  instance.close()

  window.removeEventListener('keydown', onEscClick)
}

function onEscClick(event) {
  if (event.code !== "Escape") {
    return
  };
  closeModalWindow()
}






/**
  |============================
  | Робота з формою:
  | 1 - Реалізуй відправку данних через подію "submit" на формі
  | 2 - Зроби перевірку на заповнення інпутів "email" і "password". Вони не повинні бути пустими. Поле "name", може бути пустим для приватності користувача 
  | виводь про це в повідемленні за допомогою метода "alert" - "email or password is empty"
  | 3 - При відправки форми в консоль виведи обьект з данними користувача. Реалізуй перевірку, якщо еористувач не ввів імʼя, записуй в обьект рядок "Anonimus"
  |
  | Виконуй завдвння послідовно: 
  |  - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати.
  |  - Повісь слухача події на форму
  |  - Пропиши колбєк функцію onSubmit. Не забувай про відміну поведінки по змовчуванню. Значення інпутів знайди за допомогою currentTarget і його elements.
  |  - Після отправки почисти форму і реалізуй автоматичне закриття модального вікна
  |============================
*/

 
// refs.formEl.addEventListener('submit', onSubmit)

// function onSubmit(event) {
//   event.preventDefault()
//   const { elements: { email, name, password } } = event.currentTarget
 
//   if (!email.value || !password.value) {
//     return alert('email or password is empty')
//   }

//   const userData = {
//     name: name.value || 'Anonimus',
//     email: email.value,
//     password: password.value
//   }


//   console.log(userData);
//   refs.formEl.reset()
//   closeModalWindow()
//   setTimeout(() => {
//     alert('дякую за реєстрацію')
//   }, 1000);
// }





//2 варіант



function onSubmit(event) {
  event.preventDefault()
  const { elements: { email, name, password } } = event.currentTarget
 
  if (!email.value || !password.value) {
    return alert('email or password is empty')
  }

  const userData = {
    name: name.value || 'Anonimus',
    email: email.value,
    password: password.value
  }


  console.log(userData);
  event.currentTarget.reset()
  closeModalWindow()
  setTimeout(() => {
    alert('дякую за реєстрацію')
  }, 1000);
}


//TODO:====================02====================================TODOS============================================================================================
/**
  |============================
  | Список справ todos:
  | 1 - Напиши скрипт для застосунку todos. Реалізуй методи додавання та видалення щоденних справ.
  | 2 - Реалізуй перевірку на неможлівість додати пусту справу до списку справ. 
  | Виконуй завдвння послідовно: 
  | - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати.
  | - Додай слухачі подій з відповідними подіями
  | - Пропиши три функції, які тобі допоможуть це реалізувати 
  | - Функція обробник на додавання елементів "onClickSubmit". Її завдання, зчитати значення з інпуту, виконай за допомогою "currentTarget.elements", також не забувай
  | про метод trim(), який видаляє пробіли. Ця функція повинна робити перевірку на пустий інпут, створювати обьект, додавати до масиву нову todos і чистити інпут. Також
  | запускати функцію рендера сторінкі.
  | - Функція "onBtnClick", яка буде видаляти todos. Вона повинна знайти id todos, яку потрібно видалити. Значення id можно считати з дата атрибуту за допомогою 
  | "target.dataset.id", але не забувай, що там буде рядок і можно використати метод "parseInt". Для видалення можно використати метод "filter". Після видалення ми 
  | повинні відрендорити сторінку за допомогою функції "updateList".
  | - І сама функція "updateList". Ії завдання створити розмітку за допомого метода createElement і setAttribute, додати на сторінку за допомогою метода "append". Не 
  | забувай чистити розмітку перед її вставкою.
  |============================
*/


const formToDoEl = document.querySelector('.js-todos__form')
const listEl = document.querySelector('ul')

formToDoEl.addEventListener('submit', onClickSubmit)
listEl.addEventListener('click', onBtnDeleteClick)

let items = [] 

function onClickSubmit(event) {
  event.preventDefault();

  const input = event.currentTarget.elements['user-todos']
  const todos = input.value.trim()
  
  if (!todos) {
    return alert('заповніть поле')
  }

  if (todos !== '') {
    const dublicate = items.find(el => el.text === todos)
    if (dublicate) {
      return alert('Dublicate!')
    }
  }

  const item = {
    id: Date.now(),
    text: todos,
  }

  items.push(item)

  input.value = ''

  updateList()

}

function updateList() {

    
  //варіант 1
  
//   const markup = items.map(el =>
//   {
//   const liEl = document.createElement('li');
//   const spanEl = document.createElement('span');
//   spanEl.textContent = el.text
//   liEl.appendChild(spanEl)

//   const btnEl = document.createElement('button')
//   btnEl.type = 'button'
//   btnEl.setAttribute('data-id', el.id)
//   btnEl.classList.add('delete')
//   btnEl.textContent = 'Видалити'
//   liEl.appendChild(btnEl)

//     return liEl
//   })

// listEl.innerHTML = ''
// listEl.append(...markup)
  
  
  //варіант 2
  
   const markup = items.map((item) => {
      return `
      <li>
      <span class="text${item.done ? ' done' : ''}">${item.text}</span>
      <div>
        <button type="button" data-id="${
          item.id
        }" class="delete">Видалити</button>
      </div>
      </li>
    `;
    })
    .join('');

  listEl.innerHTML = markup;  
}



function onBtnDeleteClick(event) {
  
  if (event.target.nodeName !== 'BUTTON') {
  return
  }

  const todosId = Number(event.target.dataset.id)
  
  items = items.filter(el => el.id !== todosId)
  updateList()

}
