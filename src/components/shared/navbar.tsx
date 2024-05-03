import Logo from "@/components/logo.tsx";
import {IoMenu} from "react-icons/io5";
import NavLink from "@/components/nav-link.tsx";
import {LanguageToggle} from "@/components/language-toggle.tsx";
import {useTranslation} from "react-i18next";

type Props = {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

export default function Navbar({isMenuOpen, toggleMenu}: Props) {
    const { t } = useTranslation();

    return <nav className="flex items-center justify-between text-lg ">
        <Logo
            name="Mustafa ÜNLÜ"
            role="Software Developer"
            imageSrc={"/images/logo.jpeg"}
        />
        <div className="flex items-center gap-4 lg:hidden">
            <button
                className="hamburger"
                aria-label="Menu"
                aria-expanded={isMenuOpen ? "true" : "false"}
                onClick={toggleMenu}
            >
                <IoMenu className="h-12 w-12"/>
            </button>
        </div>
        <div className={`lg:flex items-center justify-center gap-5 hidden relative`}>
            <NavLink to="/projects">{t("projects")}</NavLink>
            <NavLink to="/posts">{t("posts")}</NavLink>
            <NavLink to="/bookmarks">{t("sources")}</NavLink>
            <LanguageToggle/>
        </div>
    </nav>
}