import milkshakePic from './images/milkshake.jpg'
import friesPic from './images/fries.jpg'
import sandwichPic from './images/sandwich.jpg'

const createMenu = function() {
    const content = document.getElementById('content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    const item1 = document.createElement('div')
    item1.classList.add('item-1')
    const milkshake = new Image()
    milkshake.src = milkshakePic
    milkshake.height = 400
    milkshake.width = 350
    milkshake.classList.add('milkshake')
    item1.appendChild(milkshake)
    const milkshakeDesc = document.createElement('p')
    milkshakeDesc.textContent = 'This scrumptious shake for only £2'
    item1.appendChild(milkshakeDesc)
    pageContent.appendChild(item1)

    const item2 = document.createElement('div')
    item2.classList.add('item-2')
    const fries = new Image()
    fries.src = friesPic
    fries.height = 300
    fries.width = 350
    fries.classList.add('milkshake')
    item2.appendChild(fries)
    const friesDesc = document.createElement('p')
    friesDesc.textContent = 'These delicious chips for only £1'
    item2.appendChild(friesDesc)
    pageContent.appendChild(item2)

    const item3 = document.createElement('div')
    item3.classList.add('item-3')
    const sandwich = new Image()
    sandwich.src = sandwichPic
    sandwich.height = 400
    sandwich.width = 350
    sandwich.classList.add('sandwich')
    item3.appendChild(sandwich)
    const sandwichDesc = document.createElement('p')
    sandwichDesc.textContent = 'This heavenly burger for £6'
    item3.appendChild(sandwichDesc)
    pageContent.appendChild(item3)

    content.appendChild(pageContent)

}

export default createMenu