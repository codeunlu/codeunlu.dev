import BookmarksPost from "@/components/bookmarks-post.tsx";
import {bookmarksData} from "@/data.ts";
import {useTranslation} from "react-i18next";

const Bookmarks = () => {
    const {t} = useTranslation();
    return (
        <div className="mt-10 flex flex-col gap-10">
            <h3 className="text-4xl font-bold tracking-wide">{t("source-page-title")}</h3>
            <div>
                {bookmarksData.map((item) => (
                    <BookmarksPost
                        title={item.title}
                        description={item.description}
                        link={item.link}
                        domain={item.domain}
                        date={item.date}
                    />
                ))}
            </div>
        </div>

    );
};

export default Bookmarks;
