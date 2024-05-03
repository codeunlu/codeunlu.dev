import {Card, CardDescription} from "@/components/ui/card";
import ProductCard from "@/components/product-card.tsx";
import {productData} from "@/data.ts";
import {useTranslation} from "react-i18next";

const Projects = () => {
    const {t} = useTranslation();
    return (
        <div className="mt-10 mb-10 flex flex-col gap-10">
            <Card className="px-6 py-10">
                <CardDescription className="text-lg text-white">
                    {t("project-page-paragraph")}
                </CardDescription>
            </Card>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                {productData.map((product) => (
                    <ProductCard
                        key={product.title}
                        imageUrl={product.imageUrl}
                        title={product.title}
                        tags={product.tags}
                        description={product.description}
                        href={product.href}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
