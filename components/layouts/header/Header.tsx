'use client';

import Link from 'next/link';
import style from './Header.module.css';
import LayoutWrapper from '../layout-wrapper';
import { usePathname } from 'next/navigation';
import { NAVLINKS } from '@/constants';
import Image from 'next/image';
import MobileNavigation from './MobileNavigation/MobileNavigation';
import { cn } from '@/lib/utils';

const Header = () => {
    const pathname = usePathname();
    return (
        <header className={cn('w-full z-50', pathname === '/' && 'fixed')}>
            <LayoutWrapper className={style.header}>
                <Link href={'/'}>
                    <Image
                        src={'/images/Logo.png'}
                        alt="Logo"
                        width={102}
                        height={36}
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className={style.desktopNav}>
                    {NAVLINKS.map((item, index) => (
                        <Link
                            key={index + crypto.randomUUID()}
                            href={item.path}
                            className={`${style.navLink} ${
                                pathname === item.path && style.active
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Navigation */}
                <MobileNavigation />
            </LayoutWrapper>
        </header>
    );
};

export default Header;
