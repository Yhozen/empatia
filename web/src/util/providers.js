import * as _ from 'firebase/app'
import 'firebase/auth'

export default [
  _.auth.EmailAuthProvider.PROVIDER_ID,
  _.auth.PhoneAuthProvider.PROVIDER_ID,
  'anonymous'
]
