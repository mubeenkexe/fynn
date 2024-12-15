'use client';

import Link from 'next/link';
import style from './Header.module.css';
import LayoutWrapper from '../layout-wrapper';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/constants/navLinks';

const Header = () => {
    const pathname = usePathname();
    return (
        <header className="fixed w-full">
            <LayoutWrapper className={style.header}>
                <Link href={'/'} className={style.logo}>
                    TypeVerse.
                </Link>

                <nav className={style.nav}>
                    {navLinks.map(
                        (item, index) => (
                            <Link
                                key={index + crypto.randomUUID()}
                                href={item.path}
                                className={`${style.navLink} ${pathname === item.path && style.active}`}
                            >
                                {item.name}
                            </Link>
                        )
                    )}
                </nav>
            </LayoutWrapper>
        </header>
    );
};

export default Header;
