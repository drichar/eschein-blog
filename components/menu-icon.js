export default function MenuIcon(props) {
  const {
    isOpen,
    onMenuClick
  } = props;

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
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
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
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    );
  };

  return (
    <button
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      aria-expanded={isOpen}
      onClick={onMenuClick}
    >
      <span className="sr-only">
        {isOpen ? 'Close main menu' : 'Open main menu'}
      </span>
      {renderIcon()}
    </button>
  );
}
