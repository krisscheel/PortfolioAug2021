const registerButton = document.querySelector('.register-button')

registerButton.addEventListener('click', event => {
  event.preventDefault()
  const frontEl = document.querySelector('.front')
  frontEl.classList.add('slide-up')
})