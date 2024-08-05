document.addEventListener('DOMContentLoaded', () => {
  const sections = {
    daily: document.querySelectorAll('.daily'),
    weekly: document.querySelectorAll('.weekly'),
    monthly: document.querySelectorAll('.monthly')
  }

  const buttons = {
    daily: document.querySelector('.flex-group__daily'),
    weekly: document.querySelector('.flex-group__weekly'),
    monthly: document.querySelector('.flex-group__monthly')
  }

  function handleButtonClick(activeSection) {
    Object.keys(sections).forEach((section) => {
      sections[section].forEach((element) => {
        if (section === activeSection) {
          element.classList.remove('hide')
        } else {
          element.classList.add('hide')
        }
      })

      buttons[section].style.color =
        section === activeSection ? 'white' : 'hsl(235, 45%, 61%)'
    })
  }

  buttons.daily.addEventListener('click', () => handleButtonClick('daily'))
  buttons.weekly.addEventListener('click', () => handleButtonClick('weekly'))
  buttons.monthly.addEventListener('click', () => handleButtonClick('monthly'))
})
