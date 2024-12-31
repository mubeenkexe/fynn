import { Menu } from "lucide-react";
import style from "./MobileNavigation.module.css";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS, QUOTES } from "@/constants";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const MobileNavigation = () => {
    function getRandomQuote() {
        return QUOTES[Math.floor(Math.random() * QUOTES.length)];
    }
    return (
        <div className={style.mobileNavigation}>
            <Sheet>
                <SheetTrigger className={style.trigger}>
                    <Menu fontSize={32} />
                </SheetTrigger>
                <SheetContent className={style.content}>
                    <SheetHeader>
                        <SheetTitle className={style.title}>
                            Explore the World of Stories
                        </SheetTitle>
                        <SheetDescription>{getRandomQuote()}</SheetDescription>
                    </SheetHeader>
                    {NAV_LINKS.map((item, index) => (
                        <Link
                            key={index + crypto.randomUUID()}
                            href={item.path}
                            className={style.navLink}
                        >
                            {item.name} <GoArrowUpRight fontSize={16} />
                        </Link>
                    ))}
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNavigation;
