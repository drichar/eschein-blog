import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React, { Children } from 'react'

const ActiveLink = ({ children, activeClassName, matches, ...props }) => {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  // `/` will be matched via props.href
  // `/about.js` will be matched via props.href
  // `posts/[slug].js` will be matched via props.as
  // if props.matches (RegExp) is provided, test that instead
  const isActive = !!matches
    ? matches.test(asPath)
    : asPath === props.href || asPath === props.as;

  const className = isActive
      ? activeClassName.trim()
      : childClassName

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
  matches: PropTypes.instanceOf(RegExp),
}

export default ActiveLink
