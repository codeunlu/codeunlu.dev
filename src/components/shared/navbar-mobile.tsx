import {IoClose} from "react-icons/io5";
import {Link} from "react-router-dom";
import {LanguageToggle} from "@/components/language-toggle.tsx";
import {useTranslation} from "react-i18next";

type Props = {
    toggleMenu: () => void;
}

export default function NavbarMobile({toggleMenu}: Props) {
    const { t } = useTranslation();

    return <div className="fixed lg:hidden bg-background top-0 right-0 h-full w-64 z-100">
        <div className="flex justify-end items-center px-4 py-2">
            <button
                aria-label="Close Menu"
                className="focus:outline-none"
                onClick={toggleMenu}
            >
                <IoClose className="w-6 h-6"/>
            </button>
        </div>
        <div className="flex flex-col gap-4 justify-center items-end text-xl z-50">
            <Link
                className="block py-2 px-4 mx-4 no-underline rounded-lg hover:bg-indigo-500 hover:text-white"
                to="/projects"
            >
                {t("projects")}
            </Link>
            <Link
                className="block py-2 px-4 mx-4 no-underline rounded-lg hover:bg-indigo-500 hover:text-white"
                to="/posts"
            >
                {t("posts")}
            </Link>
            <Link
                className="block py-2 px-4 mx-4 no-underline rounded-lg hover:bg-indigo-500 hover:text-white"
                to="/bookmarks"
            >
                {t("sources")}
            </Link>
            <div className="py-2 px-4 mx-6">
                <LanguageToggle/>
            </div>
        </div>
    </div>
}