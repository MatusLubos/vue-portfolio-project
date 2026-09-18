import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    meno: 'Lubo',
    prihlaseny: false
  }),
  actions: {
    prihlas() {
      this.prihlaseny = true
    },
    odhlas() {
      this.prihlaseny = false
    }
  }
})