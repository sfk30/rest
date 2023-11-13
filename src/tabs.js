import createMenu from "./menu"
import createHomePage from "./homepage"

const createTabs = function () {

    const content = document.getElementById('content')

    const btnContainer = document.createElement('div')
    btnContainer.classList.add('btn-container')

    const homeBtn = document.createElement('button')
    homeBtn.textContent = 'Home'
    homeBtn.classList.add('tab')

    const menuBtn = document.createElement('button')
    menuBtn.textContent = 'Menu'
    menuBtn.classList.add('tab')

    const contactBtn = document.createElement('button')
    contactBtn.textContent = 'Contact'
    contactBtn.classList.add('tab')

    btnContainer.appendChild(homeBtn)
    btnContainer.appendChild(menuBtn)
    btnContainer.appendChild(contactBtn)

    content.appendChild(btnContainer)

    menuBtn.addEventListener('click', () => {
        clear()
        createMenu()
    })

    homeBtn.addEventListener('click', () => {
        clear()
        createHomePage()
    })

}

function clear() {
    const content = document.getElementById('content')
    const pageContent = document.querySelector('.page-content')
    if (pageContent) {
        content.removeChild(pageContent)
    }
}

export default createTabs