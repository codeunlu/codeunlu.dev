import {HiOutlinePaintBrush} from "react-icons/hi2";
import {SlEnergy} from "react-icons/sl";
import {IoCalendarOutline} from "react-icons/io5";
import {MdOutlineCloud} from "react-icons/md";
import {TbTestPipe} from "react-icons/tb";
import {CiPlay1} from "react-icons/ci";
import {FaAppStore, FaGooglePlay} from "react-icons/fa";
import {useTranslation} from "react-i18next";

export const helperData = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = useTranslation();

    return [
        {
            icon: SlEnergy,
            title: t("home-section-one-column1")
        },
        {
            icon: HiOutlinePaintBrush,
            title: t("home-section-one-column2")
        },
        {
            icon: IoCalendarOutline,
            title: t("home-section-one-column3")
        },
        {
            icon: MdOutlineCloud,
            title: t("home-section-one-column4")
        },
        {
            icon: TbTestPipe,
            title: t("home-section-one-column5")
        },
        {
            icon: CiPlay1,
            title: t("home-section-one-column6")
        }
    ];
}

export const platformData = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = useTranslation();
    return [
        {
            iconName: FaGooglePlay,
            title: t("home-section-three-title"),
            description: t("home-section-three-paragraph"),
            addClass: "bg-gradient-to-l from-[#01875f] via-[#056559] to-[#01875f]",
            href: "/#"
        },
        {
            iconName: FaAppStore,
            title: t("home-section-four-title"),
            description: t("home-section-four-paragraph"),
            addClass: "bg-gradient-to-l from-[#0470b9] via-[#057d93] to-[#035a95]",
            href: "/#"
        }
    ]
}

export const productData = [
    {
        imageUrl: "https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "Sanal Mağazalar",
        tags: ["react", "java"],
        description: "Farklı sektörler için özelleştirilebilir sanal mağaza çözümleri sunuyoruz. Mobil ve web platformlarında, kullanıcı dostu arayüzlerle güçlü altyapıları bir araya getirerek müşterilerinizin ihtiyaçlarını karşılıyoruz.",
        href: "/#"
    },
    {
        imageUrl: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "Mobil Uygulama Geliştirme",
        tags: ["react", "java"],
        description: "Mobil uygulama geliştirme sürecinde size özel çözümler sunuyoruz. En son teknolojileri kullanarak iOS ve Android platformlarında güvenilir ve kullanıcı dostu mobil uygulamalar geliştiriyoruz.",
        href: "/#"
    },
    {
        imageUrl: "https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "E-ticaret Platformları",
        tags: ["react", "java"],
        description: "Çeşitli sektörler için özelleştirilebilir e-ticaret platformları geliştiriyoruz. Güçlü altyapılarımız ve kullanıcı dostu arayüzlerimizle müşterilerinizi çevrimiçi platformlara taşımanıza yardımcı oluyoruz.",
        href: "/#"
    }
];

export const bookmarksData = [
    {
        title: "atlassian/pragmatic-drag-and-drop",
        description: "Herhangi bir deneyim için herhangi bir teknoloji yığınında hızlı sürükle ve bırak",
        link: "https://github.com/atlassian/pragmatic-drag-and-drop",
        domain: "github.com",
        date: "1 gün önce"
    },
    {
        title: "react-icons: Iconic JSX Components",
        description: "React uygulamaları için SVG ikonlarının kolayca kullanılabilmesini sağlayan kütüphane",
        link: "https://github.com/react-icons/react-icons",
        domain: "github.com",
        date: "1 hafta önce"
    },
    {
        title: "The Pragmatic Programmer: Your Journey to Mastery",
        description: "Yazılım geliştirme alanında klasik haline gelmiş, pratik ve zamanında test edilmiş ipuçları içeren kitap",
        link: "https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052",
        domain: "amazon.com",
        date: "1 ay önce"
    },
    {
        title: "JavaScript: The Good Parts",
        description: "JavaScript dilinin en iyi uygulamalarını öğrenmek için klasik kaynak",
        link: "https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742",
        domain: "amazon.com",
        date: "2 ay önce"
    },
    {
        title: "React Router: Declarative Routing for React.js",
        description: "React uygulamalarında bildirimsel yönlendirme sağlayan kütüphane",
        link: "https://reactrouter.com/",
        domain: "reactrouter.com",
        date: "3 ay önce"
    }
];