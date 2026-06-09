'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

interface MobileMenuProps {
    locale: string;
}

export default function MobileMenu({ locale }: MobileMenuProps) {
    const t = useTranslations('Header');
    const [isOpen, setIsOpen] = useState(false);

    // Close menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const links = [
        { label: t('about'), href: `/${locale}#about` },
        { label: t('services'), href: `/${locale}#services` },
        { label: t('technologies'), href: `/${locale}#technologies` },
        { label: t('certificates'), href: `/${locale}#certificates` },
        { label: t('projects'), href: `/${locale}#projects`, highlight: true },
    ];

    return (
        <div className="flex items-center gap-3">
            <LanguageSwitcher />

            {/* Hamburger button */}
            <button
                id="mobile-menu-toggle"
                type="button"
                aria-label={isOpen ? t('closeMenu') : t('openMenu')}
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 flex flex-col justify-center items-center w-10 h-10 rounded-full border border-white/20 hover:border-[#33ff60] hover:bg-[#33ff60]/10 transition-all duration-300 focus:outline-none"
            >
                <span
                    className="block w-5 h-[2px] bg-white rounded transition-all duration-300"
                    style={{
                        transform: isOpen ? 'translateY(5px) rotate(45deg)' : 'none',
                    }}
                />
                <span
                    className="block w-5 h-[2px] bg-white rounded my-[3px] transition-all duration-300"
                    style={{ opacity: isOpen ? 0 : 1, transform: isOpen ? 'scaleX(0)' : 'scaleX(1)' }}
                />
                <span
                    className="block w-5 h-[2px] bg-white rounded transition-all duration-300"
                    style={{
                        transform: isOpen ? 'translateY(-5px) rotate(-45deg)' : 'none',
                    }}
                />
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Slide-in menu panel */}
            <div
                className="fixed top-0 right-0 h-full w-72 bg-[#011627] border-l border-[#33ff60]/30 z-40 flex flex-col pt-24 pb-8 px-6 shadow-2xl transition-transform duration-300 ease-in-out"
                style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
                aria-hidden={!isOpen}
            >
                <nav>
                    <ul className="flex flex-col gap-2">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`
                                        flex items-center px-5 py-3 rounded-full text-sm font-medium transition-all duration-200
                                        ${link.highlight
                                            ? 'bg-[#33ff60] text-[#011627] font-semibold hover:bg-[#5fff80]'
                                            : 'text-white/80 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10'
                                        }
                                    `}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Bottom decoration */}
                <div className="mt-auto text-white/20 text-xs text-center">
                    <div className="w-8 h-[1px] bg-[#33ff60]/30 mx-auto mb-3" />
                    Portfolio
                </div>
            </div>
        </div>
    );
}
