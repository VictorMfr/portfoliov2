import Image from "next/image";

interface HeaderLogoProps {
    locale: string;
}

export default async function HeaderLogo({ locale }: HeaderLogoProps) {

    return (
        <a href={`/${locale}#inicio`} className="flex items-center gap-2 justify-center lg:justify-start">
            <Image
                src={'/images/portfolio-logo.png'}
                alt='Logotipo'
                width={124}
                height={30}
            />
        </a>
    );
}