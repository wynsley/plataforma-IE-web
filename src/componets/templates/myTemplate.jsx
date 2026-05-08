function MyTemplate({ children }) {
  return (
    <div className="pt-[4em] flex flex-col justify-center  items-start ">
      {children}
    </div>
  )
}

export { MyTemplate }