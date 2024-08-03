const form = document.getElementById('form')
const submitButton = document.querySelector('.submit-button')
const dissmissButton = document.querySelector('.dissmiss-button')
const newsletter = document.getElementById('newsletter')
const newsletter_2 = document.getElementById('newsletter-2')
const errorMessage = document.querySelector('.error')
const inputEmail = document.getElementById('email')
const customizedMail = document.querySelector('.customized-email')

form.addEventListener('submit', handleSubmit)

dissmissButton.addEventListener('click', () => {
  newsletter.classList.remove('hide')
  newsletter_2.classList.add('hide')
})

function handleSubmit(e) {
  e.preventDefault()

  const data = Object.fromEntries(new FormData(e.target))

  if (validateEmail(data.email)) {
    customizedMail.textContent = data.email
    showSuccess()
    return
  }
  showError()
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(email)) {
    return false
  }
  return true
}

function showSuccess() {
  newsletter.classList.add('hide')
  newsletter_2.classList.remove('hide')
  errorMessage.classList.add('hide')
}

function showError() {
  errorMessage.classList.remove('hide')
  email.style.backgroundColor = 'rgb(228, 83, 63)'
  setTimeout(() => {
    errorMessage.classList.add('hide')
    email.style.backgroundColor = 'white'
  }, 2000)
}
