import { getTranslations } from "next-intl/server";
import HeaderLink from "./HeaderLink";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

interface HeaderNavigationProps {
    locale: string;
}

export default async function HeaderNavigation({ locale }: HeaderNavigationProps) {
    const t = await getTranslations("Header");

    return (
        <>
            {/* Desktop nav — hidden on small screens */}
            <nav className="hidden lg:flex flex-1 justify-center items-center gap-6">
                <ul className="flex flex-wrap justify-center gap-[6px]">
                    <HeaderLink title={t("about")} href={`/${locale}#about`} />
                    <HeaderLink title={t("services")} href={`/${locale}#services`} />
                    <HeaderLink title={t("technologies")} href={`/${locale}#technologies`} />
                    <HeaderLink title={t("certificates")} href={`/${locale}#certificates`} />
                    <HeaderLink title={t("projects")} href={`/${locale}#projects`} className="bg-[#33ff60]" style={{ color: 'black' }} />
                </ul>
                <LanguageSwitcher />
            </nav>

            {/* Mobile hamburger menu — visible only on small screens */}
            <div className="flex justify-end mt-2 lg:hidden">
                <MobileMenu locale={locale} />
            </div>
        </>
    );
}