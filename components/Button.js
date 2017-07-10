import { Component } from 'react'
import Link from 'next/link'

export default ({
  children,
  type,
  variation = 'secondary',
  href,
  onClick
}) => {
  const Component = !!href ? 'a' : 'button'
  return (
    <Component
      type={ type }
      className={ `btn btn-${variation}`}
      children={ children }
      href={ href }
      onClick={ onClick }
    />
  )
}