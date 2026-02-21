import Image from "next/image";
import { getTranslations } from "next-intl/server";

interface FooterProps {
  locale: string;
}

export default async function Footer({ locale }: FooterProps) {
  const t = await getTranslations("Footer");

  return (
    <footer id="contacto" className="bg-[#01111F] border-t border-white/20 text-white px-12 sm:px-6 md:px-24 flex flex-col md:flex-row gap-12 py-8 scroll-mt-24">
      <div className="flex-2/12 flex flex-col justify-between">
        <div className="flex gap-5 pr-30">
          <a href={`/${locale}#inicio`} className="flex items-center gap-5">
            <Image
              src={'/images/victor-logo.png'}
              alt='Logotipo'
              width={30}
              height={30}
            />
            <p className="font-bold text-2xl ">{t("brand")}</p>
          </a>
        </div>
        <p>{t("copyright")}</p>
      </div>
      <div className="flex flex-col gap-5 flex-1/12">
        <h3 className="font-bold">{t("contact")}</h3>
        <ul className="">
          <li>victormfr2003@gmail.com</li>
          <li>
            <a href="/contact.pdf" target="_blank" rel="noopener noreferrer">{t("cv")}</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-5 flex-9/12">
        <h3 className="font-bold">{t("social")}</h3>
        <ul className="">
          <li><a href="https://www.linkedin.com/in/victor-martinez-0851a6318/">LinkedIn</a></li>
          <li><a href="https://www.instagram.com/wm_dev3/">Instagram</a></li>
          <li><a href="https://www.youtube.com/@FVictorMartinez">YouTube</a></li>
        </ul>
      </div>
    </footer>
  );
}