import HeaderNavigation from "./HeaderNavigation";
import HeaderLogo from "./HeaderLogo";

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  return (
    <header className="bg-[#011627] sticky top-0 z-20 px-[5%] py-[20px] border-b border-[#33ff60]">
      <div className="flex justify-between">
        <HeaderLogo locale={locale} />
        <HeaderNavigation locale={locale} />
      </div>
    </header>
  )
} 