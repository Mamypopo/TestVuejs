import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: []
  }),
  actions: {
    createUser (user) {
      this.users.push(user)
    },
    updateUser (user, index) {
      this.users.splice(index, 1, user)
    },
    removeUser (index) {
      this.users.splice(index, 1)
    }
  }
})