import { useEffect, useRef } from 'react'

export function useClickOutside<T extends HTMLElement = HTMLDivElement>(
  handler: () => void,
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler()
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])

  return ref
}

export function useClickWindow<T extends HTMLElement = HTMLDivElement>(
  handler: () => void,
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current) {
        console.log("other")
        return
      }
      if (ref.current.contains(event.target as Node)) {
        ref.current.className = "about-window focus"
        handler()
        return
      }
      ref.current.className = "about-window"
      handler("test")
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
  
  return ref
}
