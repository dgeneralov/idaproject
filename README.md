# **Jun-front-dev-test**
### **Описание проекта**

- #### _Проект создан в качестве тестового, для прохождения собеседования

- #### _В проектной работе были реализованы:_

- Организация файлов по БЭМ
- Адаптивная верстка для устройств с приминением медиа-запросов

```css

@media screen and (max-width: 767px) {
  .root {
     min-width: 320px;
  }
} 
```
- Применеие Grid Layout, flex-box
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
- P.S Недочет по верстке - запутался в порядке наложения элементов. Из-а этого не корреткно расоложенны кнопки удаления карточек.