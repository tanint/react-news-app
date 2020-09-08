import { useEffect } from 'react'

export function useOnClickOutside(ref, handler, otherRefs = []) {
  useEffect(() => {
    const listener = (event) => {
      const condition = otherRefs.map((otherRef) => {
        return !otherRef.current || otherRef.current.contains(event.target)
      })

      if (
        !ref.current ||
        ref.current.contains(event.target) ||
        condition.includes(true)
      ) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
