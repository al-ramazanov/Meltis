'use strict'
const body = document.body;
function headerActions() {
    const burger = document.querySelector('.burger');
    let headerMenu = document.querySelector('.header__menu');
    let headerAction = document.querySelector('.header__actions');
    let headerinput = document.querySelector('.header__input');
    let headerLabel = document.querySelector('.header__label');
    let inputClose = document.querySelector('.header__input-close')
    let headerForm = document.querySelector('.header__search');

    headerLabel.addEventListener('click', (el) => {
        headerAction.classList.add('active')
        headerinput.classList.add('active')
        headerinput.focus()
        headerMenu.classList.add('hide')
        headerLabel.classList.add('active')
        headerForm.classList.add('active')
        // body.classList.add('lock')
    })

    inputClose.addEventListener('click', () => {
        headerAction.classList.remove('active')
        headerinput.classList.remove('active')
        headerMenu.classList.remove('hide')
        headerLabel.classList.remove('active')
        headerForm.classList.remove('active')
        body.classList.remove('lock')
    })

    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
        body.classList.toggle('lock')
        headerMenu.classList.toggle('is-open');
        let catalog = document.querySelector('.header__catalog');
        if (catalog.classList.contains('open')) {
            catalog.classList.remove('open')
        }
    })
    let headerContainer = document.querySelector('.header__container')
    if (document.documentElement.offsetWidth <= 920.99) {
        headerContainer.prepend(headerForm)
    }
}
headerActions()


// function documentClick(e) {
//     const targetEl = e.target;
//     if (targetEl.closest('[data-parent]')) {
//         const subMenuId = targetEl.dataset.parent ? targetEl.dataset.parent : null;
//         const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
//         if (subMenu) {
//             let activeLink = document.querySelector('.submenu-active');
//             let activeBlock = document.querySelector('.submenu-open');
//             let closeBtn = document.querySelectorAll('.categories-header__submenu-close')
//             if (activeLink && activeLink !== targetEl) {
//                 activeLink.classList.remove('submenu-active')
//                 activeBlock.classList.remove('submenu-open')
//             }

//             subMenu.classList.toggle('submenu-open')
//             targetEl.classList.toggle('submenu-active');
//             closeBtn.forEach((el) => {
//                 el.addEventListener('click', () => {
//                     if (subMenu.classList.contains('submenu-open')) {
//                         subMenu.classList.remove('submenu-open')
//                         targetEl.classList.remove('submenu-active');
//                     }
//                 })
//             })
//         }
//         else {
//             console.log('no have menu');
//         }
//     }
//     if (targetEl.closest('[data-catalog]')) {
//         const catalogBtn = targetEl.dataset ? targetEl.dataset : null
//         if (catalogBtn) {
//             let catalog = document.querySelector('.header__catalog');
//             targetEl.classList.toggle('open')
//             catalog.classList.toggle('open')
//             document.addEventListener('click', (e) => {
//                 if (e.target == catalog) {
//                     targetEl.classList.remove
//                         ('open')
//                     catalog.classList.remove
//                         ('open')
//                 }
//             })
//             let catalogBack = document.querySelector('.catalog-header-back');
//             catalogBack.addEventListener('click', () => {
//                 targetEl.classList.remove
//                     ('open')
//                 catalog.classList.remove
//                     ('open')
//             })
//         }
//     }
// }
// document.addEventListener('click', documentClick)

function addClass() {
    let subMenuBtn = document.querySelectorAll('[data-parent]');
    if (subMenuBtn && subMenuBtn) {
        subMenuBtn.forEach((el) => {
            el.classList.add('have-menu')
        })
    }
}
addClass()

function appendBlock() {
    let blockForAppend = document.querySelector('.product__info-append');
    let appendingBlock = document.querySelector('.product-info');
    if (blockForAppend && blockForAppend) {
        if (document.documentElement.offsetWidth <= 871) {
            blockForAppend.classList.add('active')
            blockForAppend.append(appendingBlock)
        }
    }

}
appendBlock()

function accordion() {
    let dropDowns = document.querySelectorAll('.dropdown-js');
    dropDowns.forEach((el) => {

        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const dropDownBtn = self.querySelector('.dropdown-js__control');
            const dropDownBody = self.querySelector('.dropdown-js__body');

            self.classList.toggle('open')

            console.log(dropDownBtn);
            console.log(dropDownBody);
            if (self.classList.contains('open')) {
                dropDownBtn.classList.add('open');
                dropDownBody.classList.add('open')
                dropDownBody.style.maxHeight = dropDownBody.scrollHeight + 'px';
            } else {
                dropDownBody.style.maxHeight = null;
                dropDownBody.classList.remove('open')
                dropDownBtn.classList.remove('open');
            }

        })
    })
}
accordion()

function openBlocks() {
    const cartSwitch = document.querySelector('.product-info__tocart');
    const wrapper = document.querySelector('.wrapper');
    if (cartSwitch) {
        const cartHtml = `<div class="cart">
        <div class="cart__content">
            <div class="cart__header">
                <h2 class="cart__title block__header">Товар в корзине</h2>
                <div class="cart__close"></div>
            </div>
            <div class="cart-card">
                <span class="cart-card__remove"></span>
                <div class="cart-card__item">
                    <div class="cart-card__pic">
                        <img src="img/cart/cart-pic-1.jpg" alt="cart thumb">
                    </div>
                    <div class="cart-card__body">
                        <div class="cart-card__descr">
                            <h3 class="cart-card__title">Alessa</h3>
                            <p class="cart-card__price">444 4444 ₽</p>
                        </div>
                        <div class="cart-card__descr">
                            <h3 class="cart-card__info">Дизайнерский светильник</h3>
                            <div class="cart-card__counter counter-js">
                                <div class="cart-card__counter-minus minus-js"></div>
                                <div class="cart-card__counter-value value-js">1</div>
                                <div class="cart-card__counter-plus plus-js"></div>
                            </div>
                        </div>
                        <div class="cart-card__size">
                            Размер: <span class="cart-card__size-value">S</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cart-order">
                <div class="cart-order__sum">
                    Итого
                    <div class="cart-order__price">444 4444 ₽</div>
                </div>
                <div class="cart-order__quantity">
                    <span class="cart-order__quantity-value">1</span> товар на сумму
                </div>
                <a href="checkout.html" class="cart-order__btn page-btn">Оформить заказ</a>

                <div class="cart-order__info">
                    После оформления заказа менеджер свяжется с вами, чтобы уточнить
                    все детали
                </div>
            </div>
            <!-- ================================================================ -->
            <div class="slider-block">
    <div class="slider-block__container">
        <div class="slider-block__header">
            <h2 class="slider-block__title block__header">
            С этим часто покупают
            </h2>
            <div class="slider-block__control">
                <div class="slider-block__btn slider-block__btn--prev cart-slider-prev"><span class="icon-arrowLeft"></span>
                </div>
                <div class="slider-block__btn slider-block__btn--next cart-slider-next"><span class="icon-arrowRight"></span>
                </div>
            </div>
        </div>
        <div class="swiper page-slider-cart">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="card">
                        <div class="card-badge-sale">Sale</div>
                        <div class="card-badge-new">new</div>
                                <div class="card__image-wrapper">
                                    <img src="img/bestsellers/bestseller-1.jpg" alt="pic" class="card__image">
                                    <img src="img/bestsellers/bestseller-2.jpg" alt="pic" class="card__image">
                                </div>
                        <div class="card__text">
                            <h3 class="card__name">
                                Semi
                            </h3>
                            <div class="card__price card__price-sale">
                                <span class="card__price-old">88 000 ₽</span>
                                <p class="card__price-new">61 600 ₽
                                    <span class="card__price-percent">-30%</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>      
                <div class="swiper-slide">
                    <div class="card">
                        <div class="card-badge-sale">Sale</div>
                        <div class="card-badge-new">new</div>
                                <div class="card__image-wrapper">
                                    <img src="img/bestsellers/bestseller-1.jpg" alt="pic" class="card__image">
                                    <img src="img/bestsellers/bestseller-2.jpg" alt="pic" class="card__image">
                                </div>
                        <div class="card__text">
                            <h3 class="card__name">
                                Semi
                            </h3>
                            <div class="card__price card__price-sale">
                                <span class="card__price-old">88 000 ₽</span>
                                <p class="card__price-new">61 600 ₽
                                    <span class="card__price-percent">-30%</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>      
            </div>
        </div>
    </div>
</div>
            <!-- ================================================================ -->
        </div>
    </div>`
        wrapper.insertAdjacentHTML('afterbegin', cartHtml);
        const cart = wrapper.querySelector('.cart')
        const cartClose = cart.querySelector('.cart__close')
        cartSwitch.addEventListener('click', () => {
            let productCardTop = document.querySelector('.product-card');
            console.log(productCardTop);
            cart.classList.toggle('open')
            // cart.style.top = productCardTop.offsetTop + 'px';
            body.classList.toggle('lock')
        })
        document.addEventListener('click', (e) => {
            if (e.target == cart) {
                cart.classList.remove('open')
                body.classList.remove('lock')

            }
            if (e.target == cartClose) {
                cart.classList.remove('open')
                body.classList.remove('lock')

            }
        })
    }
    const filterSwitch = document.querySelector('.catalog__filter-switch')

    if (filterSwitch) {
        const filterBody = document.querySelector('.filter__body')
        const filterHtml = `<div class="catalog-filter">
        <div class="catalog-filter__container">
            <div class="catalog-filter__items">
                <div>
                    <div class="catalog-filter__column color">
                        <h3 class="column-filter__title">Цвет</h3>
                        <ul class="column-filter__list">
                            <li class="column-filter__list-item">
                                <input type="checkbox"" class=" custom__checkbox-input" id="Серебро" name="Серебро">
                                <label for="Серебро" class="custom__checkbox-label">
                                    <span class="custom__checkbox-switch"></span>Серебро
                                </label>
                            </li>
                            <li class="column-filter__list-item">
                                <input type="checkbox"" class=" custom__checkbox-input" id="Бронза" name="Бронза">
                                <label for="Бронза" class="custom__checkbox-label">
                                    <span class="custom__checkbox-switch"></span>Бронза
                                </label>
                            </li>
                            <li class="column-filter__list-item">
                                <input type="checkbox"" class=" custom__checkbox-input" id="Золото" name="Золото">
                                <label for="Золото" class="custom__checkbox-label">
                                    <span class="custom__checkbox-switch"></span>Золото
                                </label>
                            </li>
                            <li class="column-filter__list-item">
                                <input type="checkbox"" class=" custom__checkbox-input" id="Латунь" name="Латунь">
                                <label for="Латунь" class="custom__checkbox-label">
                                    <span class="custom__checkbox-switch"></span>Латунь
                                </label>
                            </li>
                            <li class="column-filter__list-item">
                                <input type="checkbox"" class=" custom__checkbox-input" id="Сталь" name="Сталь">
                                <label for="Сталь" class="custom__checkbox-label">
                                    <span class="custom__checkbox-switch"></span>Сталь
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div class="catalog-filter__column">
                        <h3 class="column-filter__title">Стиль</h3>
                        <ul class="column-filter__list">
                            <li class="column-filter__list-item">
                                <input type="checkbox"" class=" custom__checkbox-input" id="Лофт" name="Лофт">
                                <label for="Лофт" class="custom__checkbox-label">
                                    <span class="custom__checkbox-switch"></span>Лофт
                                </label>
                            </li>
                            <li class="column-filter__list-item">
                                <input type="checkbox"" class=" custom__checkbox-input" id="Модерн" name="Модерн">
                                <label for="Модерн" class="custom__checkbox-label">
                                    <span class="custom__checkbox-switch"></span>Модерн
                                </label>
                            </li>
                            <li class="column-filter__list-item">
                                <input type="checkbox"" class=" custom__checkbox-input" id="Классический стиль"
                                    name="Классический стиль">
                                <label for="Классический стиль" class="custom__checkbox-label">
                                    <span class="custom__checkbox-switch"></span>Классический стиль
                                </label>
                            </li>
                            <li class="column-filter__list-item">
                                <input type="checkbox"" class=" custom__checkbox-input" id="Скандинавский стиль"
                                    name="Скандинавский стиль">
                                <label for="Скандинавский стиль" class="custom__checkbox-label">
                                    <span class="custom__checkbox-switch"></span>Скандинавский стиль
                                </label>
                            </li>
                            <li class="column-filter__list-item">
                                <input type="checkbox"" class=" custom__checkbox-input" id="Ар-Деко" name="Ар-Деко">
                                <label for="Ар-Деко" class="custom__checkbox-label">
                                    <span class="custom__checkbox-switch"></span>Ар-Деко
                                </label>
                            </li>
                            <li class="column-filter__list-item">
                                <input type="checkbox"" class=" custom__checkbox-input" id="Ручная работа"
                                    name="Ручная работа">
                                <label for="Ручная работа" class="custom__checkbox-label">
                                    <span class="custom__checkbox-switch"></span>Ручная работа
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="catalog-filter__column">
                    <h3 class="column-filter__title">Тип</h3>
                    <ul class="column-filter__list">
                        <li class="column-filter__list-item">
                            <input type="checkbox"" class=" custom__checkbox-input" id="Люстры" name="Люстры">
                            <label for="Люстры" class="custom__checkbox-label">
                                <span class="custom__checkbox-switch"></span>Люстры
                            </label>
                        </li>
                        <li class="column-filter__list-item">
                            <input type="checkbox"" class=" custom__checkbox-input" id="Люстра инсталляция"
                                name="Люстра инсталляция">
                            <label for="Люстра инсталляция" class="custom__checkbox-label">
                                <span class="custom__checkbox-switch"></span>Люстра инсталляция
                            </label>
                        </li>
                        <li class="column-filter__list-item">
                            <input type="checkbox"" class=" custom__checkbox-input" id="Потолочные светильники"
                                name="Потолочные светильники">
                            <label for="Потолочные светильники" class="custom__checkbox-label">
                                <span class="custom__checkbox-switch"></span>Потолочные светильники
                            </label>
                        </li>
                        <li class="column-filter__list-item">
                            <input type="checkbox"" class=" custom__checkbox-input" id="Потолочные люстры"
                                name="Потолочные люстры">
                            <label for="Потолочные люстры" class="custom__checkbox-label">
                                <span class="custom__checkbox-switch"></span>Потолочные люстры
                            </label>
                        </li>
                        <li class="column-filter__list-item">
                            <input type="checkbox"" class=" custom__checkbox-input" id="Люстры для низких потолков"
                                name="Люстры для низких потолков">
                            <label for="Люстры для низких потолков" class="custom__checkbox-label">
                                <span class="custom__checkbox-switch"></span>Люстры для низких потолков
                            </label>
                        </li>
                        <li class="column-filter__list-item">
                            <input type="checkbox"" class=" custom__checkbox-input"
                                id="Кольцевые люстры и светильники" name="Кольцевые люстры и светильники">
                            <label for="Кольцевые люстры и светильники" class="custom__checkbox-label">
                                <span class="custom__checkbox-switch"></span>Кольцевые люстры и светильники
                            </label>
                        </li>
                        <li class="column-filter__list-item">
                            <input type="checkbox"" class=" custom__checkbox-input"
                                id="Реечные и рядные светильники и люстры"
                                name="Реечные и рядные светильники и люстры">
                            <label for="Реечные и рядные светильники и люстры" class="custom__checkbox-label">
                                <span class="custom__checkbox-switch"></span>Реечные и рядные светильники и
                                люстры
                            </label>
                        </li>
                        <li class="column-filter__list-item">
                            <input type="checkbox"" class=" custom__checkbox-input" id="Бра и настенные светильники"
                                name="Бра и настенные светильники">
                            <label for="Бра и настенные светильники" class="custom__checkbox-label">
                                <span class="custom__checkbox-switch"></span>Бра и настенные светильники
                            </label>
                        </li>
                        <li class="column-filter__list-item">
                            <input type="checkbox"" class=" custom__checkbox-input"
                                id="Готовые комбинации светильников" name="Готовые комбинации светильников">
                            <label for="Готовые комбинации светильников" class="custom__checkbox-label">
                                <span class="custom__checkbox-switch"></span>Готовые комбинации светильников
                            </label>
                        </li>
                        <li class="column-filter__list-item">
                            <input type="checkbox"" class=" custom__checkbox-input" id="Настольные лампы"
                                name="Настольные лампы">
                            <label for="Настольные лампы" class="custom__checkbox-label">
                                <span class="custom__checkbox-switch"></span>Настольные лампы
                            </label>
                        </li>
                        <li class="column-filter__list-item">
                            <input type="checkbox"" class=" custom__checkbox-input" id="Точечный свет"
                                name="Точечный свет">
                            <label for="Точечный свет" class="custom__checkbox-label">
                                <span class="custom__checkbox-switch"></span>Точечный свет
                            </label>
                        </li>
                        <li class="column-filter__list-item">
                            <input type="checkbox"" class=" custom__checkbox-input" id="Детский свет"
                                name="Детский свет">
                            <label for="Детский свет" class="custom__checkbox-label">
                                <span class="custom__checkbox-switch"></span>Детский свет
                            </label>
                        </li>
                        <li class="column-filter__list-item">
                            <input type="checkbox"" class=" custom__checkbox-input" id="Торшеры" name="Торшеры">
                            <label for="Торшеры" class="custom__checkbox-label">
                                <span class="custom__checkbox-switch"></span>Торшеры
                            </label>
                        </li>
                        <li class="column-filter__list-item">
                            <input type="checkbox"" class=" custom__checkbox-input" id="Аксессуары"
                                name="Аксессуары">
                            <label for="Аксессуары" class="custom__checkbox-label">
                                <span class="custom__checkbox-switch"></span>Аксессуары
                            </label>
                        </li>
                    </ul>
                </div>
                <div>
                    <div class="catalog-filter__column material">
                        <h3 class="column-filter__title">Материал</h3>
                        <ul class="column-filter__list">
                            <li class="column-filter__list-item">
                                <input type="checkbox"" class=" custom__checkbox-input" id="Хром" name="Хром">
                                <label for="Хром" class="custom__checkbox-label">
                                    <span class="custom__checkbox-switch"></span>Хром
                                </label>
                            </li>
                            <li class="column-filter__list-item">
                                <input type="checkbox"" class=" custom__checkbox-input" id="Дерево" name="Дерево">
                                <label for="Дерево" class="custom__checkbox-label">
                                    <span class="custom__checkbox-switch"></span>Дерево
                                </label>
                            </li>
                            <li class="column-filter__list-item">
                                <input type="checkbox"" class=" custom__checkbox-input" id="Текстильный абажур"
                                    name="Текстильный абажур">
                                <label for="Текстильный абажур" class="custom__checkbox-label">
                                    <span class="custom__checkbox-switch"></span>Текстильный абажур
                                </label>
                            </li>
                            <li class="column-filter__list-item">
                                <input type="checkbox"" class=" custom__checkbox-input" id="Металл" name="Металл">
                                <label for="Металл" class="custom__checkbox-label">
                                    <span class="custom__checkbox-switch"></span>Металл
                                </label>
                            </li>
                            <li class="column-filter__list-item">
                                <input type="checkbox"" class=" custom__checkbox-input" id="Акрил" name="Акрил">
                                <label for="Акрил" class="custom__checkbox-label">
                                    <span class="custom__checkbox-switch"></span>Акрил
                                </label>
                            </li>
                            <li class="column-filter__list-item">
                                <input type="checkbox"" class=" custom__checkbox-input" id="Стекло" name="Стекло">
                                <label for="Стекло" class="custom__checkbox-label">
                                    <span class="custom__checkbox-switch"></span>Стекло
                                </label>
                            </li>
                            <li class="column-filter__list-item">
                                <input type="checkbox"" class=" custom__checkbox-input" id="Камень" name="Камень">
                                <label for="Камень" class="custom__checkbox-label">
                                    <span class="custom__checkbox-switch"></span>Камень
                                </label>
                            </li>
                            <li class="column-filter__list-item">
                                <input type="checkbox"" class=" custom__checkbox-input" id="Цемент" name="Цемент">
                                <label for="Цемент" class="custom__checkbox-label">
                                    <span class="custom__checkbox-switch"></span>Цемент
                                </label>
                            </li>
                            <li class="column-filter__list-item">
                                <input type="checkbox"" class=" custom__checkbox-input" id="Сталь2" name="Сталь">
                                <label for="Сталь2" class="custom__checkbox-label">
                                    <span class="custom__checkbox-switch"></span>Сталь
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div class="catalog-filter__column">
                        <h3 class="column-filter__title">Форма</h3>
                        <ul class="column-filter__list">
                            <li class="column-filter__list-item">
                                <input type="checkbox"" class=" custom__checkbox-input" id="Шарообразные плафоны"
                                    name="Шарообразные плафоны">
                                <label for="Шарообразные плафоны" class="custom__checkbox-label">
                                    <span class="custom__checkbox-switch"></span>Шарообразные плафоны
                                </label>
                            </li>
                            <li class="column-filter__list-item">
                                <input type="checkbox"" class=" custom__checkbox-input" id="Купольная форма"
                                    name="Купольная форма">
                                <label for="Купольная форма" class="custom__checkbox-label">
                                    <span class="custom__checkbox-switch"></span>Купольная форма
                                </label>
                            </li>
                            <li class="column-filter__list-item">
                                <input type="checkbox"" class=" custom__checkbox-input" id="Удлиненная форма"
                                    name="Удлиненная форма">
                                <label for="Удлиненная форма" class="custom__checkbox-label">
                                    <span class="custom__checkbox-switch"></span>Удлиненная форма
                                </label>
                            </li>
                            <li class="column-filter__list-item">
                                <input type="checkbox"" class=" custom__checkbox-input" id="Молекулярная форма"
                                    name="Молекулярная форма">
                                <label for="Молекулярная форма" class="custom__checkbox-label">
                                    <span class="custom__checkbox-switch"></span>Молекулярная форма
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="catalog-filter__column">
                    <h3 class="column-filter__title">Цена</h3>
                    <div class="catalog-filter__price-range">
                        <div class="catalog-filter__price-value"></div>
                    </div>
                    <div class="catalog-filter__price price-min">
                        от
                        <input type="number">
                        ₽
                    </div>
                    <div class="catalog-filter__price price-max">
                        до
                        <input type="number">
                        ₽
                    </div>
                </div>
            </div>
            <div class="catalog-filter__btns">
                <button class="catalog-filter__btn submit">Применить</button>
                <button class="catalog-filter__btn reset">Сбросить</button>
            </div>
        </div>
    </div>`;
        filterBody.insertAdjacentHTML('afterbegin', filterHtml);
        let filterSwitchTop = filterSwitch.offsetTop + filterSwitch.offsetHeight;
        let filter = wrapper.querySelector('.catalog-filter');
        const filterClose = document.querySelector('.filter__close')
        filterSwitch.addEventListener('click', () => {
            filter.classList.toggle('open')
            if (filter.classList.contains('open')) {
                filter.style.top = filterSwitchTop + 'px';
                filterClose.style.opacity = 1
            } else {
                filter.style.top = null
                filterClose.style.opacity = null

            }
        })
        document.addEventListener('click', (e) => {
            if (e.target == filter) {
                filter.classList.remove('open')
                filterClose.style.opacity = null

            }
            if (e.target == filterClose) {
                filter.classList.remove('open')
                filter.style.top = null
                filterClose.style.opacity = null

            }
        })
    }
    const galerySwitch = document.querySelector('.product-gallery__btn')

    if (galerySwitch) {
        const galeryHtml = `<div class="galery-popup">
        <div class="galery-popup__body">
            <div class="galery-popup__container">
                <div class="galery-popup__close"></div>
                <div class="galery-popup__thumbs">
                    <div class="galery-popup__thumbs-pic">
                        <img src="img/popup-galery/pic-1.jpg" alt="#">
                    </div>
                    <div class="galery-popup__thumbs-pic">
                        <img src="img/popup-galery/pic-2.jpg" alt="#">
                    </div>
                    <div class="galery-popup__thumbs-pic">
                        <img src="img/popup-galery/pic-3.jpg" alt="#">
                    </div>
                    <div class="galery-popup__thumbs-pic">
                        <img src="img/popup-galery/pic-4.jpg" alt="#">
                    </div>
                    <div class="galery-popup__thumbs-btn"></div>
                </div>
                <div class="galery-popup__focus">
                    <div class="galery-popup__focus-pic">
                        <img src="img/popup-galery/big-pic.jpg" alt="#">
                    </div>
                </div>
            </div>
        </div>
    </div>`;
        wrapper.insertAdjacentHTML('afterbegin', galeryHtml);
        const galery = wrapper.querySelector('.galery-popup')
        const galeryClose = document.querySelector('.galery-popup__close')
        galerySwitch.addEventListener('click', () => {
            galery.classList.toggle('open')
            body.classList.toggle('lock')
        })
        document.addEventListener('click', (e) => {
            if (e.target == galeryClose) {
                galery.classList.remove('open')
                body.classList.remove('lock')
            }
        })
        document.addEventListener('keydown', (e) => {
            if (e.key == 'Escape') {
                galery.classList.remove('open')
                body.classList.remove('lock')
            }
        })
    }


}
openBlocks()

document.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.column-filter__title')) {
        const accordionWrapper = target.closest('.catalog-filter__column');
        let accordionBody = accordionWrapper.querySelector('.column-filter__list');
        target.classList.toggle('open')
        if (target.classList.contains('open')) {
            accordionBody.classList.add('open')
            accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
            accordionBody.style.marginBottom = 20 + 'px';
        } else {
            accordionBody.classList.remove('open')
            accordionBody.style.maxHeight = null;
            accordionBody.style.marginBottom = null;
        }
    }
    let counter;
    if (target.classList.contains('minus-js') || target.classList.contains('plus-js')) {
        const counterWrapper = target.closest('.counter-js')
        counter = counterWrapper.querySelector('.value-js');
    }

    if (target.classList.contains('minus-js')) {
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText
        }
    }
    if (target.classList.contains('plus-js')) {
        counter.innerText = ++counter.innerText;

    }
    if (target.classList.contains('cart-card__remove')) {
        const cartItem = target.closest('.cart-card')
        let item = document.querySelector('.similar-min')
        item.remove()
        cartItem.remove()
    }

})
