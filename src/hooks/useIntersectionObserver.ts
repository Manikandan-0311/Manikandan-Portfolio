import { useEffect } from 'react'

/**
 * Hook to handle intersection observer for scroll animations
 * @param element - The element to observe
 * @param callback - Function to call when element is in view
 */
export const useIntersectionObserver = (
  element: React.RefObject<HTMLElement>,
  callback: () => void
) => {
  useEffect(() => {
    if (!element.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(element.current)
    return () => observer.disconnect()
  }, [element, callback])
}

export default useIntersectionObserver
