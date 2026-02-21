import HeaderNavigation from "./HeaderNavigation";
import HeaderLogo from "./HeaderLogo";

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  return (
    <header className="bg-[#01111F] lg:bg-[#011627] sticky top-0 border-b border-white/20 lg:border-0 z-20">
      <div className="lg:bg-[#01111F] flex flex-col gap-2 md:px-32 py-4 lg:flex-row border border-b border-white/20">
        <HeaderLogo locale={locale} />
        <HeaderNavigation locale={locale} />
      </div>
    </header>
  )
} 