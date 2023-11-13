const createContactForm = function() {
    const content = document.getElementById('content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    const form = document.createElement('form')
    form.classList.add('contact-form')

    const desc = document.createElement('h3')
    desc.textContent = 'Get in touch!'
    form.appendChild(desc)

    const name = document.createElement('input')
    name.type = 'text'
    name.placeholder = 'Enter name'
    form.appendChild(name)

    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.placeholder = 'Enter address'
    form.appendChild(addressInput)

    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.placeholder = 'Enter phone no.'
    form.appendChild(phoneInput)

    const submitButton = document.createElement('input')
    submitButton.classList.add('submit-btn')
    submitButton.type = 'submit'
    submitButton.value = 'Submit'
    form.appendChild(submitButton)

    pageContent.appendChild(form)
    content.appendChild(pageContent)

}

export default createContactForm