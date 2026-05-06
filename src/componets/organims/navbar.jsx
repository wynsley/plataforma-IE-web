import { Logo } from "../molecules/logo";
import { NavbarMenu } from "../molecules/navbarMenu";
import { UserMenu } from "../molecules/userMenu";

function Navbar({handleLogout}) {
    return (
        <nav className=" fixed bg-blue flex justify-between items-center 
            py-0 pr-[1%] pl-[3%] h-[4em] w-full   
        ">
            <Logo />
            <NavbarMenu />
            <UserMenu onLogout={handleLogout}/>

        </nav>
    )
}

export { Navbar }