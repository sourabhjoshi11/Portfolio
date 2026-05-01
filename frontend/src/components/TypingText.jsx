import { useEffect, useState } from 'react'

export function TypingText({ phrases, className = '' }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[index % phrases.length]
    const pause = deleting ? 45 : 75
    let timer

    if (!deleting && text === current) {
      timer = setTimeout(() => setDeleting(true), 1100)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((value) => value + 1)
    } else {
      timer = setTimeout(() => {
        setText((value) => current.slice(0, deleting ? value.length - 1 : value.length + 1))
      }, pause)
    }

    return () => clearTimeout(timer)
  }, [deleting, index, phrases, text])

  return (
    <span className={className}>
      {text}
        <span className="ml-1 inline-block h-6  w-0.5 translate-y-1 bg-cyan-300 align-middle animate-pulse" />
    </span>
  )
}