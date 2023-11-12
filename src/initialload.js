const initialLoad = function() {
    const content = document.getElementById('content')

    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    const heading = document.createElement('h1')
    heading.textContent = 'Burgers and fries'
    pageContent.appendChild(heading)

    const burger = document.createElement('img')
    burger.src = "https://images.pexels.com/photos/2119758/pexels-photo-2119758.jpeg?auto=compress&cs=tinysrgb&w=800"
    pageContent.appendChild(burger)

    const phrase = document.createElement('p')
    phrase.textContent = 'We make the best burgers'
    pageContent.appendChild(phrase)

    content.appendChild(pageContent)

}

export default initialLoad