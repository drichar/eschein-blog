import cn from 'classnames'

export default function MenuIcon(props) {
  const {
    isOpen,
    isHome,
    scrolled,
    onMenuClick
  } = props

  const renderIcon = () => {
    return isOpen ? (
      <svg
        className="h-7 w-7"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : (
      <svg
        className="h-7 w-7"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    )
  }

  return (
    <button
      className={cn('transition-all inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500', {
        'text-gray-400 hover:text-gray-500 hover:bg-gray-100': !isHome || scrolled || isOpen,
        'text-white-50 hover:text-white hover:bg-blue-600': isHome && !scrolled && !isOpen
      })}
      aria-expanded={isOpen}
      onClick={onMenuClick}
    >
      <span className="sr-only">
        {isOpen ? 'Close main menu' : 'Open main menu'}
      </span>
      {renderIcon()}
    </button>
  )
}
