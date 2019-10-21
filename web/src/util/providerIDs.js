import * as _ from 'firebase/app'
import * as firebaseui from 'firebaseui'
import 'firebase/auth'

export default [
  firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
  _.auth.EmailAuthProvider.PROVIDER_ID,
  _.auth.PhoneAuthProvider.PROVIDER_ID
]
