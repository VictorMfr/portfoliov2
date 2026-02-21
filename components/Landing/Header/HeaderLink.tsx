import { IconType } from "react-icons";


interface HeaderLinkProps {
    title: string;
    Icon: IconType;
    iconColor: string;
    href: string;
}

export default function HeaderLink({ Icon, iconColor, title, href }: HeaderLinkProps) {
    return (
        <li className="flex items-center gap-2 px-2">
            <Icon color={iconColor}/>
            <a href={href} className="text-white text-nowrap">{title}</a>
        </li>
    )
}