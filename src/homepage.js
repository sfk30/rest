import burgerPic from './images/burger.jpg';

const createHomePage = function() {
    const content = document.getElementById('content')

    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    const heading = document.createElement('h1')
    heading.textContent = 'Burgers and fries'
    pageContent.appendChild(heading)

    const burger = new Image()
    burger.src = burgerPic
    burger.height = 350
    burger.width = 500
    pageContent.appendChild(burger)

    const phrase = document.createElement('p')
    phrase.textContent = 'We make the best burgers'
    pageContent.appendChild(phrase)

    content.appendChild(pageContent)

}

export default createHomePage