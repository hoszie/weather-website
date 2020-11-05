console.log('Client side JS file is loaded');

const weatherForm = document.querySelector('form')
const citySearch = document.querySelector('input')
const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = `http://localhost:3000/weather/?address=${citySearch.value}`

  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''

  fetch(location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error
      } else {
        messageOne.textContent = ''
        messageTwo.textContent = `In ${data.locale} at the moment ${data.forecast}`
      }
    })
  })

  // console.log(location);
})