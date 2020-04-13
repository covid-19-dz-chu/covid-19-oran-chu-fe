import { action, observable, computed, decorate } from 'mobx'

class UserStore {
  id = ''

  token = ''

  login(username, password, callback) {
    // this.token = agent.login
    this.token = `mockedToken${password}`
    this.username = username

    if (callback) callback()
  }

  get isAuthenticated() {
    return this.token
  }
}

decorate(UserStore, {
  id: observable,
  token: observable,
  username: observable,
  // computed
  isAuthenticated: computed,
  // actions
  login: action
})

export default UserStore
