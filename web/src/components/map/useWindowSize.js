import { useState, useEffect } from 'react'

const getSize = () => {
  return {
    innerHeight: typeof window !== 'undefined' && window.innerHeight,
    innerWidth: typeof window !== 'undefined' && window.innerWidth,
    outerHeight: typeof window !== 'undefined' && window.outerHeight,
    outerWidth: typeof window !== 'undefined' && window.outerWidth
  }
}

export default () => {
  const [windowSize, setWindowSize] = useState(getSize())
  const [loading, setLoading] = useState(true)
  const handleResize = () => {
    setWindowSize(getSize())
  }

  useEffect(() => {
    setWindowSize({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
      outerHeight: window.outerHeight,
      outerWidth: window.outerWidth
    }) /* fix SSR */
    setLoading(false)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return [windowSize, loading]
}
