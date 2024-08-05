const sectionDaily = document.querySelectorAll('.daily')
const sectionWeekly = document.querySelectorAll('.weekly')
const sectionMonthly = document.querySelectorAll('.monthly')
const dailyButton = document.querySelector('.flex-group__daily')
const weeklyButton = document.querySelector('.flex-group__weekly')
const monthlyButton = document.querySelector('.flex-group__monthly')

dailyButton.addEventListener('click', () => {
  sectionWeekly.forEach((x) => {
    x.classList.add('hide')
  })
  sectionDaily.forEach((x) => {
    x.classList.remove('hide')
  })

  sectionMonthly.forEach((x) => {
    x.classList.add('hide')
  })

  dailyButton.style.color = 'white'
  weeklyButton.style.color = 'hsl(235, 45%, 61%)'
  monthlyButton.style.color = 'hsl(235, 45%, 61%)'
})

weeklyButton.addEventListener('click', () => {
  sectionWeekly.forEach((x) => {
    x.classList.remove('hide')
  })
  sectionDaily.forEach((x) => {
    x.classList.add('hide')
  })

  sectionMonthly.forEach((x) => {
    x.classList.add('hide')
  })

  weeklyButton.style.color = 'white'
  dailyButton.style.color = 'hsl(235, 45%, 61%)'
  monthlyButton.style.color = 'hsl(235, 45%, 61%)'
})

monthlyButton.addEventListener('click', () => {
  sectionWeekly.forEach((x) => {
    x.classList.add('hide')
  })
  sectionDaily.forEach((x) => {
    x.classList.add('hide')
  })

  sectionMonthly.forEach((x) => {
    x.classList.remove('hide')
  })

  monthlyButton.style.color = 'white'
  dailyButton.style.color = 'hsl(235, 45%, 61%)'
  weeklyButton.style.color = 'hsl(235, 45%, 61%)'
})

function hideElements() {}
