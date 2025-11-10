import { Logo } from "../molecules/logo";
import { NavbarMenu } from "../molecules/navbarMenu";
import { UserMenu } from "../molecules/userMenu";
import styles from './navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Logo />
            <NavbarMenu />
            <UserMenu />

        </nav>
    )
}

export { Navbar }