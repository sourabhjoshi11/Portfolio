import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const cursorDotRef = useRef(null)
  const cursorOutlineRef = useRef(null)

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    document.body.classList.add('hide-default-cursor')

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let outlineX = mouseX
    let outlineY = mouseY

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`
      }
    }

    const animate = () => {
      // Smooth lerp (linear interpolation)
      outlineX += (mouseX - outlineX) * 0.15
      outlineY += (mouseY - outlineY) * 0.15

      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate(-50%, -50%)`
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    const animFrame = requestAnimationFrame(animate)

    const handleMouseOver = (e) => {
      const isInteractive = e.target.closest('a') || e.target.closest('button') || e.target.closest('input') || e.target.closest('textarea')
      
      if (isInteractive) {
        cursorOutlineRef.current?.classList.add('cursor-hover-active')
        cursorDotRef.current?.classList.add('cursor-hover-active')
      } else {
        cursorOutlineRef.current?.classList.remove('cursor-hover-active')
        cursorDotRef.current?.classList.remove('cursor-hover-active')
      }
    }
    
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(animFrame)
      document.body.classList.remove('hide-default-cursor')
    }
  }, [])

  return (
    <>
      <div 
        ref={cursorOutlineRef} 
        className="custom-cursor-outline pointer-events-none fixed left-0 top-0 z-[9999] hidden h-10 w-10 rounded-full border-2 border-[#e27a1b]/60 transition-[width,height,background-color,border-color,transform] duration-300 ease-out sm:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div 
        ref={cursorDotRef} 
        className="custom-cursor-dot pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 rounded-full bg-[#e27a1b] transition-opacity duration-300 ease-out sm:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  )
}
