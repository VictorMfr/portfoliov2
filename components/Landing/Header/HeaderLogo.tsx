import Image from "next/image";
import { getTranslations } from "next-intl/server";

interface HeaderLogoProps {
    locale: string;
}

export default async function HeaderLogo({ locale }: HeaderLogoProps) {
    const t = await getTranslations("Header");

    return (
        <a href={`/${locale}#inicio`} className="flex items-center gap-2 justify-center lg:justify-start">
            <Image
                src={'/images/victor-logo.png'}
                alt='Logotipo'
                width={30}
                height={30}
            />
            <p className="font-bold text-2xl text-white">{t("brand")}</p>
        </a>
    );
}