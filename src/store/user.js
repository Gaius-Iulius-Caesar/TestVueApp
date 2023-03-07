import { defineStore } from "pinia"

export default defineStore("users", {
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage
      }
    ]
  },
  // 其它配置项
  state: () => {
    return {
      user: [{ username: "admin", passworld: "123456" }]
    }
  },
  actions: {
    increment(username, passworld) {
      const result = this.user.find((item) => item.username === username)
      if (result === undefined) {
        this.user.push({ username, passworld })
        return true
      }
      return false
    },
    exist(username, passworld) {
      const result = this.user.find(
        (item) => item.username === username && item.passworld === passworld
      )
      if (result !== undefined) {
        return true
      }
      return false
    }
  }
})
