const form = document.getElementById('form')
const submitButton = document.querySelector('.submit-button')
const dissmissButton = document.querySelector('.dissmiss-button')
const newsletter = document.getElementById('newsletter')
const newsletter_2 = document.getElementById('newsletter-2')

form.addEventListener('submit', (e) => {
  handleSubmit(e)
})

submitButton.addEventListener('click', () => {
  newsletter.classList.add('hide')
  newsletter_2.classList.remove('hide')
})

dissmissButton.addEventListener('click', () => {
  newsletter.classList.remove('hide')
  newsletter_2.classList.add('hide')
})

function handleSubmit(event) {
  event.preventDefault()
}
