"use client";

import Link from "next/link";
import style from "./Header.module.css";
import LayoutWrapper from "../layout-wrapper";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import { cn } from "@/lib/utils";
import SignIn from "@/components/auth/sign-is";

const Header = () => {
    const pathname = usePathname();
    return (
        <header
            className={cn(
                "w-full z-50 fixed",
                pathname.startsWith("/read") && "relative"
            )}
        >
            <LayoutWrapper className={style.header}>
                <Link href={"/"}>
                    <Image
                        src={"/images/Logo.png"}
                        alt="Logo"
                        width={102}
                        height={36}
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className={style.desktopNav}>
                    {NAV_LINKS.map((item, index) => (
                        <Link
                            key={index + crypto.randomUUID()}
                            href={item.path}
                            className={`${style.navLink} ${pathname === item.path && style.active
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <SignIn />
                </nav>

                {/* Mobile Navigation */}
                <MobileNavigation />
            </LayoutWrapper>
        </header>
    );
};

export default Header;
