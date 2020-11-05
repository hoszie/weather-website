const weatherForm = document.querySelector('form')
const citySearch = document.querySelector('input')
const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = `/weather/?address=${citySearch.value}`

  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''

  fetch(location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error
      } else {
        messageOne.textContent = data.locale
        messageTwo.textContent = data.forecast
      }
    })
  })

  // console.log(location);
})