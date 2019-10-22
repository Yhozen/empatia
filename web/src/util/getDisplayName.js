export default user => {
    if (user) {
        if (user.isAnonymous) {
            return 'Anonimo'
        } else if (user.phoneNumber) {
            return user.phoneNumber
        } else {
            return user.email
        }
    }
}

