'use client';

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const changeLocale = (nextLocale: "es" | "en") => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="flex items-center gap-2 text-white/80 text-sm">
      <span className="sr-only">{t("label")}</span>
      <button
        type="button"
        onClick={() => changeLocale("es")}
        className={locale === "es" ? "text-white font-semibold" : "hover:text-white"}
      >
        ES
      </button>
      <span>/</span>
      <button
        type="button"
        onClick={() => changeLocale("en")}
        className={locale === "en" ? "text-white font-semibold" : "hover:text-white"}
      >
        EN
      </button>
    </div>
  );
}

