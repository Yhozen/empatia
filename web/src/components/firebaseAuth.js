import React, { useState, useEffect } from 'react'
import { useFirebase } from 'react-redux-firebase'
import { navigate } from 'gatsby'

const Loading = () => <div>Loading...</div>

const StyledFirebaseAuth = React.lazy(() =>
  import('react-firebaseui/StyledFirebaseAuth')
)
export default () => {
  const [options, setOptions] = useState(false)
  const firebase = useFirebase()
  const isSSR = typeof window === 'undefined'
  useEffect(() => {
    import('../util/providers').then(module => {
      setOptions(module.default)
    })
  }, [])

  return (
    <>
      {!isSSR && options && (
        <React.Suspense fallback={<Loading />}>
          <StyledFirebaseAuth
            uiConfig={{
              signInFlow: 'popup',
              callbacks: {
                signInSuccessWithAuthResult: () => navigate('/')
              },
              signInOptions: options
            }}
            firebaseAuth={firebase.auth()}
          />
        </React.Suspense>
      )}
    </>
  )
}
