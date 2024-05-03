import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";

type Props = {
    iconName: IconType;
    title: string;
    description: string;
    addClass?: string;
    href: string;
}

const AppPlatform = ({
    iconName: Icon,
    title,
    description,
    addClass,
    href
}: Props) => {
    const { t } = useTranslation();
    return (
        <div
            className={`flex flex-col items-center justify-center text-end ${addClass} h-96 gap-4 rounded-lg px-6`}
        >
            <div className="text-white">
                <Icon size={48} />
            </div>
            <h1 className="text-lg text-white font-semibold text-center">{title}</h1>
            <p className="text-white text-opacity-80 text-center">{description}</p>
            
            <Link 
                to={href}
                target="_blank"
                className='px-8 py-3 bg-background rounded-sm'
            >
                {t("discover")}
            </Link>
        </div>
    )
}

export default AppPlatform;