import {CardDescription, CardTitle} from "@/components/ui/card";
import HelperBox from "@/components/helper-box.tsx";
import {PiHandHeartThin} from "react-icons/pi";
import AppPlatform from "@/components/app-platform.tsx";
import StackBox from "@/components/stack-box.tsx";
import {Link} from "react-router-dom";
import {helperData, platformData} from "@/data.ts";
import {useTranslation} from "react-i18next";

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-20 mt-20">
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold tracking-wide text-white">{t("whoami")}</h1>
                <div className="flex gap-10">
                    <div className="flex flex-col items-start gap-8 xl:w-2/3 w-full">
                        <p className="text-lg leading-loose text-start text-muted-foreground ">
                            {t("home-paragraph")}
                            <b className="border-b-4 border-indigo-500 text-white">{t("home-paragraph-city")}</b>
                            {t("home-paragraph-2")}
                            <b className="border-b-4 border-indigo-500 text-white">{t("home-paragraph-skill")}</b>
                            {t("home-paragraph-3")}
                            <b className="border-b-4 border-indigo-500 text-white">
                                {t("home-paragraph-work")}
                            </b>
                            {t("home-paragraph-4")}
                        </p>
                        <Link to={"/contact"} className="flex items-center gap-2 px-4 py-2
                        border-4
                        border-indigo-500
                        hover:border-white
                        text-indigo-500
                        hover:text-white
                        ">
                            <span className="text-lg text-white">{t("contactme")}</span>{" "}
                            <PiHandHeartThin size={24}/>
                        </Link>
                    </div>
                    <div className="w-1/3 h-full hidden xl:block">
                        <StackBox/>
                    </div>
                </div>
            </div>
            <div className="mt-16 flex flex-col gap-4">
                <CardTitle className="font-bold text-3xl text-white">{t("home-section-one-title")}</CardTitle>
                <CardDescription className="font-normal text-lg font-montserrat">
                    {t("home-section-one-paragraph")}
                </CardDescription>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {helperData().map((helper, index) => (
                    <HelperBox key={index} iconName={helper.icon} title={helper.title} />
                ))}
            </div>
            <div className="mt-16 flex flex-col gap-4">
                <CardTitle className="font-bold text-3xl">
                    {t("home-section-two-title")}
                </CardTitle>
                <CardDescription className="font-normal text-lg font-montserrat">
                    {t("home-section-two-paragraph")}
                </CardDescription>
            </div>
            <div className="mt-[-1.5rem] grid gap-8 md:grid-cols-1 lg:grid-cols-2 ">
                {platformData().map((platform, index) => (
                    <AppPlatform
                        key={index}
                        iconName={platform.iconName}
                        title={platform.title}
                        description={platform.description}
                        addClass={platform.addClass}
                        href={platform.href}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
