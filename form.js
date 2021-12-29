const contactSubmit = document.querySelector('#contactSubmit')

contactSubmit.addEventListener('click', event => {
  event.preventDefault()
  const form = document.querySelector('#contactForm')
  const user = form.querySelector('#username').value
  const email = form.querySelector('#email').value
  const message = form.querySelector('#comment').value

  const formdata = {
    'username': user,
    'email': email,
    'comment': message
  }

  const xhttp = new XMLHttpRequest()
  xhttp.open("POST", "https://formspree.io/f/mqkyvaoa")
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  xhttp.setRequestHeader('Accept', 'application/json')
  xhttp.send(JSON.stringify(formdata))

  form.classList.add('slide-up')
})