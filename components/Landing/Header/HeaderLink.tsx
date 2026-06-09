import { CSSProperties } from "react";
import { IconType } from "react-icons";


interface HeaderLinkProps {
    title: string;
    Icon?: IconType;
    iconColor?: string;
    href: string;
    className?: string;
    style?: CSSProperties
}

export default function HeaderLink({ Icon, iconColor, title, href, className, style }: HeaderLinkProps) {
    return (
        <li className={`flex items-center gap-2 px-[24px] py-[8px] hover:bg-white text-white hover:text-[#011627] rounded-full transition-all transition-duration-300 ${className}`} style={style}>
            {Icon && <Icon color={iconColor} />}
            <a href={href} className="text-nowrap">{title}</a>
        </li>
    )
}