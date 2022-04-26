'use strict'

function headerActions() {
    const burger = document.querySelector('.burger');
    const body = document.body;
    let headerMenu = document.querySelector('.header__menu');
    let headerAction = document.querySelector('.header__actions');
    let headerinput = document.querySelector('.header__input');
    let headerLabel = document.querySelector('.header__label');
    let inputClose = document.querySelector('.header__input-close')
    let headerForm = document.querySelector('.header__search')
    headerinput.addEventListener('click', () => {
        headerAction.classList.add('active')
        headerinput.classList.add('active')
        headerMenu.classList.add('hide')
        headerLabel.classList.add('active')
        headerForm.classList.add('active')
        body.classList.add('lock')
    })

    inputClose.addEventListener('click', (e) => {
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
document.addEventListener('click', documentClick)

function documentClick(e) {
    const targetEl = e.target;
    if (targetEl.closest('[data-parent]')) {
        const subMenuId = targetEl.dataset.parent ? targetEl.dataset.parent : null;
        const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
        if (subMenu) {
            let activeLink = document.querySelector('.submenu-active');
            let activeBlock = document.querySelector('.submenu-open');
            let closeBtn = document.querySelectorAll('.categories-header__submenu-close')
            if (activeLink && activeLink !== targetEl) {
                activeLink.classList.remove('submenu-active')
                activeBlock.classList.remove('submenu-open')
            }

            subMenu.classList.toggle('submenu-open')
            targetEl.classList.toggle('submenu-active');
            closeBtn.forEach((el) => {
                el.addEventListener('click', () => {
                    if (subMenu.classList.contains('submenu-open')) {
                        subMenu.classList.remove('submenu-open')
                        targetEl.classList.remove('submenu-active');
                    }
                })
            })
        }
        else {
            console.log('no have menu');
        }

        e.preventDefault()
    }
    if (targetEl.closest('[data-catalog]')) {
        const catalogBtn = targetEl.dataset ? targetEl.dataset : null
        if (catalogBtn) {
            let catalog = document.querySelector('.header__catalog');
            targetEl.classList.toggle('open')
            catalog.classList.toggle('open')
            document.addEventListener('click', (e) => {
                if (e.target == catalog) {
                    targetEl.classList.remove
                        ('open')
                    catalog.classList.remove
                        ('open')
                }
            })
            let catalogBack = document.querySelector('.catalog-header-back');
            catalogBack.addEventListener('click', () => {
                targetEl.classList.remove
                    ('open')
                catalog.classList.remove
                    ('open')
            })
        }
    }
}

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

