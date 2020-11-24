import cn from 'classnames'

export default function Button(props) {
  const {
    size = 'default',
    variant = 'primary',
    children,
    className,
    ...other
  } = props
  
  return (
    <button
      {...other}
      className={cn(`inline-flex items-center font-semibold rounded-md shadow-sm focus-ring ${className}`, {
        'text-white bg-blue-600 hover:bg-blue-700': variant === 'primary',
        'text-blue-700 bg-blue-100 hover:bg-blue-200': variant === 'secondary',
        'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50': variant === 'white',
        'px-2.5 py-1.5 text-xs': size === 'xs',
        'px-3 py-2 text-xs text-sm leading-4': size === 'sm',
        'px-4 py-2 text-sm': size === 'md',
        'px-4 py-2 text-base': size === 'default',
        'px-6 py-btn-lg text-lg': size === 'lg',
        'px-4 py-2 text-sm lg:text-base 2xl:px-6 2xl:py-2.5 2xl:text-lg': size === 'responsive',
      })}
    >
      {children}
    </button>
  )
}
