import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'

const ActiveLink = ({
  children,
  activeClassName,
  inactiveClassName,
  matches,
  ...props
}) => {
  const { asPath } = useRouter()

  // `/` will be matched via props.href
  // `/about.js` will be matched via props.href
  // `posts/[slug].js` will be matched via props.as
  // if props.matches (RegExp) is provided, test that instead
  const isActive = !!matches
    ? matches.test(asPath)
    : asPath === props.href || asPath === props.as

  const className = isActive ? activeClassName : inactiveClassName

  return (
    <Link {...props} className={className}>
      {children}
    </Link>
  )
}

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
  inactiveClassName: PropTypes.string,
  matches: PropTypes.instanceOf(RegExp),
}

export default ActiveLink
