import styles from "./Navbar.module.css";
import ActiveLink from "./ActiveLink";
import { FC } from "react";

const pages = [
    {
        text: "Home",
        href: "/"
    },
    {
        text: "About",
        href: "/about"
    },
    {
        text: "Contact",
        href: "/contact"
    },
    {
        text: "Pricing",
        href: "/pricing"
    }
]

const Navbar: FC = () => {
    return (
        <nav className={styles['menu-container']}>
            {pages.map((page, index) => (
                <ActiveLink text={page.text} href={page.href} key={index} />
            ))}
        </nav>
    );
}
 
export default Navbar;