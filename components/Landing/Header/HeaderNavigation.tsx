import { FaBriefcase, FaCertificate, FaUser } from "react-icons/fa";
import { getTranslations } from "next-intl/server";
import HeaderLink from "./HeaderLink";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderNavigationProps {
    locale: string;
}

export default async function HeaderNavigation({ locale }: HeaderNavigationProps) {
    const t = await getTranslations("Header");

    return (
        <nav className="flex-1 flex justify-center items-center gap-4 lg:justify-end">
            <ul className="flex flex-wrap justify-center">
                <HeaderLink Icon={FaUser} iconColor="white" title={t("about")} href={`/${locale}#about`} />
                <HeaderLink Icon={FaCertificate} iconColor="white" title={t("certificates")} href={`/${locale}#certificates`} />
                <HeaderLink Icon={FaBriefcase} iconColor="white" title={t("projects")} href={`/${locale}#projects`} />
            </ul>
            <LanguageSwitcher />
        </nav>
    )
}