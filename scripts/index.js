const
    elements = document.querySelector(".elements"),
    form = document.querySelector(".form__container"),
    card = elements.querySelector(".card").content,
    cardName = form.querySelector(".form__input_title"),
    cardSubTitle = form.querySelector(".form__input_txt-area"),
    elementsImg = form.querySelector(".form__input_link"),
    cardPrice = form.querySelector(".form__input_price");




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

// добавляем карточки из формы
form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    elements.prepend(createCard(cardName.value, elementsImg.value, cardSubTitle.value, cardPrice.value));
    form.reset();
});

// добавление карточек на страницу из массива
initialCards.forEach((item) => {
    elements.append(createCard(item.name, item.link, item.subtitle, item.price));
});