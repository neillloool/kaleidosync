import Kaleidoscope from '../kaleidosync/kaleidoscope'

class Index {
  constructor() {
    this.loginButton()
    window.KALEIDOSYNC = new Kaleidoscope(true)
    setTimeout(() => document.body.classList.add('loaded'), 300)
  }

  loginButton() {
    const button = document.querySelector('.login')
    button.addEventListener('click', this.getAuthId)
  }

  getAuthId() {
    fetch('/auth')
      .then((res) => res.json())
      .then((res) => {
        if (res.auth_id) {
          window.location.href = `/login?auth_id=${res.auth_id}`
        }
      })
  }
}

export default Index