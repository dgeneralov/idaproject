# **Jun-front-dev-test**
### **Описание проекта**

- #### _Проект создан в качестве тестового, для прохождения собеседования

- #### _В проектной работе были реализованы:_

- Организация файлов по БЭМ
- Адаптивная верстка для устройств с шириной экрана 320 и 1280 ppi, с приминением медиа-запросов

```css

@media screen and (max-width: 1279px) {
  .root {
     min-width: 1024px;
  }
} 

@media screen and (max-width: 767px) {
  .root {
     min-width: 320px;
  }
} 
```
- Применеие Grid Layout
- реализация удаления карточек по клику
- добавление карточек из обьектв при загрузки страницы
- добавление карточек из формы
```js
function createCard(cardName, cardLink, cardSubTitle, cardPrice) {
    const newCard = card.cloneNode(true),
        imageCards = newCard.querySelector(".elements__img");

    imageCards.src = cardLink;
    imageCards.setAttribute('alt', 'cardName');
    newCard.querySelector(".elements__title").textContent = cardName;
    newCard.querySelector(".elements__subtitle").textContent = cardSubTitle;
    newCard.querySelector(".elements__price").textContent = cardPrice;


    newCard.querySelector(".elements__icon").addEventListener('click', function() {
        this.parentElement.remove();
    });

    return newCard;
}
```
- возможность редактировать текст на сайте с помощью спеуиального окна "popup"
```js
buttonEdit.addEventListener("click", function () {
    popup.classList.add("popup_opened");
});

popupClouse.addEventListener("click", function () {
    popup.classList.remove("popup_opened");
});


let formElement = document.querySelector(".popup__container");
let nameInput = formElement.querySelector("#name");
let jobInput = formElement.querySelector("#jobe");


function formSubmitHandler(evt) {
    evt.preventDefault();

    document.querySelector(".profile__title").textContent = nameInput.value;
    document.querySelector(".profile__subtitle").textContent = jobInput.value;

    popup.classList.remove("popup_opened");

}
```

### **Инструкция и системные требования:**

- Веб-браузер

  - _google chrome_
  - _mazila firefox_
  - _yandex браузер_
  - _ms edge_