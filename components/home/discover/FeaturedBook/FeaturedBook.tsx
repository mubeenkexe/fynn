import Image from "next/image";
import style from "./featuredBook.module.css";
import Button from "@/components/common/button";
import LayoutWrapper from "@/components/layouts/layout-wrapper";
import { Separator } from "@/components/ui/separator";
import StarRating from "./StarRating";

interface FeaturedBookProps {
    poster: string;
    rating: number;
    title: string;
    author: string;
    description: string;
    tagline: string;
    publicationDate: string;
    genre: string;
    language: string;
    pages: number;
    characters: string;
}

const BookInfo = ({
    label,
    value,
}: {
    label: string;
    value: string | number;
}) => (
    <div className="flex justify-between font-roboto">
        <p className="font-medium">{label}</p>
        <p className="w-2/4 text-start text-subTexts">{value}</p>
    </div>
);

const FeaturedBook = ({
    poster,
    rating,
    title,
    author,
    description,
    tagline,
    publicationDate,
    genre,
    language,
    pages,
    characters,
}: FeaturedBookProps) => {
    return (
        <LayoutWrapper>
            <div className={style.container}>
                <div className={style.posterHolder}>
                    <Image
                        src={poster}
                        alt="Book Poster"
                        width={300}
                        height={500}
                        className="h-auto rounded-2xl"
                    />
                    <Button type="button" className="w-full">
                        Read {title}
                    </Button>
                </div>

                <div className={style.details}>
                    <div className="flex flex-col gap-3">
                        <h1 className={style.title}>
                            {title} <StarRating rating={rating} />
                        </h1>
                        <p className={style.tagline}>{tagline}</p>
                    </div>

                    <p className={style.description}>{description}</p>

                    <Separator color="#B5B5B5" className={style.separator} />

                    <div className={style.info}>
                        {[
                            { label: "Original Title", value: title },
                            { label: "Author", value: author },
                            { label: "Language", value: language },
                            { label: "Characters", value: characters },
                            { label: "Genre", value: genre },
                            {
                                label: "Publication Date",
                                value: publicationDate,
                            },
                            { label: "Pages", value: pages },
                        ].map(({ label, value }) => (
                            <BookInfo key={label} label={label} value={value} />
                        ))}
                    </div>
                </div>
            </div>
        </LayoutWrapper>
    );
};

export default FeaturedBook;
