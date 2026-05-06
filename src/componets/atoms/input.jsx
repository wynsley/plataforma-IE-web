function Input({
  type = 'text',
  name,
  value,
  placeholder,
  onChange,
  required,
  className = '',
  size = 'medium',
  align = 'left',
  variant = 'defautl',
  ...props
}) {

  const variants = {
    default : `bg-gray-200 rounded-lg h-10 px-3
                border-none 
                focus:border-blue-500 focus:ring-1 focus:ring-blueT 
                outline-none transition-all duration-200`,
    primary:`bg-transparent border-0 border-b border-blue
      px-2 pt-2 pb-0 w-full focus:outline-none focus:border-[#FFBB00] transition`
  }

  const sizes ={
    small : 'text-[.9em]',
    medium : 'text-[1.2em]',
    large : 'text-[1.5em]'
  }

  const aligns = {
    left : 'text-left',
    center : 'text-center',
    right : 'text-right',
  }
  return (
    <input
      className={`
        ${className}
        ${variants[variant] || variants.default}
        ${sizes[size] || sizes.medium}
        ${aligns[align] || aligns.left}
      `}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      {...props}
    />
  )
}

export { Input }