import React, { useState, useEffect } from 'react'
import { useFirebase } from 'react-redux-firebase'

const Loading = () => <div>Loading...</div>

const StyledFirebaseAuth = React.lazy(() =>
  import('react-firebaseui/StyledFirebaseAuth')
)
export default () => {
  const [mounted, setMounted] = useState(false)
  const firebase = useFirebase()
  const isSSR = typeof window === 'undefined'
  useEffect(() => {
    import('../util/providers').then(module => {
      setMounted(module.default)
    })
  }, [])

  return (
    <>
      {!isSSR && mounted && (
        <React.Suspense fallback={<Loading />}>
          <StyledFirebaseAuth
            uiConfig={{
              signInFlow: 'popup',
              signInSuccessUrl: '/',
              signInOptions: mounted
            }}
            firebaseAuth={firebase.auth()}
          />
        </React.Suspense>
      )}
    </>
  )
}
