module.exports = {
  verifyEmail: (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  },
  verifyBirthDate: (birthDate) => {
    let today = new Date()
    let maxDate = today.setFullYear(today.getFullYear() - 16)
    let minDate = today.setFullYear(today.getFullYear() - 125)
    birthDateUTC = Date.UTC(birthDate.slice(0,4), birthDate.slice(5,7) - 1, birthDate.slice(8,10))
    if (!birthDate.length || birthDateUTC <= maxDate && birthDateUTC >= minDate) {
      return true
    } else {
      return false
    }
  }
}
