function Link({
  href, 
  onClick, 
  className = '', 
  variant = 'default',
  text,
  target, 
  children
}) {

  const variants = {
    default: `
      hover:text-blue-800 
      hover:underline 
      transition-colors
    `,
    primary: `
      px-6 sm:px-8 md:px-10 
      py-3 md:py-3.5 
      bg-gradient-to-br from-white to-[#0E4051]
      text-black font-semibold 
      rounded-lg 
      hover:from-[#725800] hover:to-white
      transition-all duration-300 
      hover:-translate-y-[3px]
      text-center 
      shadow-lg hover:shadow-xl 
      text-sm sm:text-base md:text-lg
    `,
    secondary: `flex flex-col items-center 
      justify-center mt-6 md:mt-8 bg-[#06141F]
      md:w-[186px] xl:w-[15em] pb-1 rounded-2xl z-100 border-b border-[#FFBB00]
      `, 
    danger: `flex gap-1 items-end-safe justify-center 
    `,
    varFlex : `flex flex-col items-center 
      justify-centermd:mt-8 px-6 md:px-8 
      lg:px-10 pb-1  z-100
    `,
    button: `
      px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3
      text-sm sm:text-base 
      bg-gradient-to-br from-[#725800] to-white
      text-blackfont-semibold text-center
      rounded-lg shadow-lg hover:shadow-xl shadow-black/30
      transition-tranform duration-300 hover:-translate-y-[4px]
      min-w-[120px]  sm:min-w-[160px] md:min-w-[180px]
`}

  return (
    <a
    target={target}
      href={href}
      onClick={onClick}
      className={`
        ${className}
        ${variants[variant] || variants.default}
      `}
    >
      {children || text}
    </a>
  );
}

export { Link };