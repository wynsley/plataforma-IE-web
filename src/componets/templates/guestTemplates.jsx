import { Navbar } from "../organims/navbar";
function GuestTemplates({ children }) {
  return (
    <>
      <Navbar />
      <section>
        {children}
      </section>
    </>
  )
}

export { GuestTemplates }