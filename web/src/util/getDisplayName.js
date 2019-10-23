export default user => {
  if (user) {
    if (user.isAnonymous) {
      return 'Anónimo'
    } else if (user.phoneNumber) {
      return user.phoneNumber
    } else {
      return user.email
    }
  }
}
